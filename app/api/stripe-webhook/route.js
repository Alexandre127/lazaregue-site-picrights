// Webhook Stripe — déclenché après paiement confirmé.
//
// Stripe appelle cette URL en direct (serveur à serveur). Configurer dans
// Stripe → Developers → Webhooks l'endpoint :
//   https://lazaregue-site-picrights.vercel.app/api/stripe-webhook
// (le domaine Vercel direct, PAS le domaine principal proxifié)
// Événement à écouter : checkout.session.completed
//
// À la réception : envoie l'e-mail de confirmation au client et l'e-mail de
// notification au cabinet (avec le récapitulatif du dossier et les liens des
// pièces). La facture est générée automatiquement par Stripe (invoice_creation).
//
// Variables d'environnement :
//   STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET   (obligatoires)
//   RESEND_API_KEY, EMAIL_FROM, CABINET_EMAIL  (emails)

import Stripe from 'stripe'
import { Resend } from 'resend'
import { get } from '@vercel/blob'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))

// Récupère les pièces déposées (stockées sur Blob) pour les joindre à l'e-mail.
async function fetchAttachments(m) {
  const fields = [
    ['piece_mise_en_demeure', 'mise-en-demeure'],
    ['piece_photo', 'photographie'],
    ['piece_echanges', 'echanges'],
  ]
  const atts = []
  for (const [key, base] of fields) {
    const paths = (m[key] || '').split(' | ').filter(Boolean)
    for (let i = 0; i < paths.length; i++) {
      try {
        const res = await get(paths[i], { access: 'private' })
        const buf = Buffer.from(await new Response(res.stream).arrayBuffer())
        const ext = (paths[i].split('.').pop() || 'pdf').slice(0, 5)
        atts.push({ filename: `${base}-${i + 1}.${ext}`, content: buf })
      } catch (e) {
        console.error('[webhook] pièce jointe échouée', e)
      }
    }
  }
  return atts
}

function clientEmailHtml(m) {
  return `
    <div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:560px">
      <h2 style="color:#1a2744">Votre dossier est enregistré</h2>
      <p>Bonjour ${esc(m.prenom)} ${esc(m.nom)},</p>
      <p>Nous avons bien reçu votre dossier et votre règlement. Le cabinet examinera
      les pièces transmises et vous adressera un premier retour <strong>sous 48 heures ouvrées</strong>.</p>
      <p>Vous recevrez séparément votre facture et la convention d'honoraires signée.</p>
      <p style="color:#6b6a64;font-size:13px">Organisme concerné : ${esc(m.organisme)} · Montant réclamé : ${esc(m.montant)} €</p>
      <p style="margin-top:24px">Lazarègue Avocats — Barreau de Paris<br>18 rue de Tilsitt, 75017 Paris</p>
    </div>`
}

function cabinetEmailHtml(m, s) {
  const count = (v) => (v ? v.split(' | ').filter(Boolean).length : 0)
  const line = (label, v) => (count(v) ? `<li>${label} : ${count(v)} fichier(s)</li>` : '')
  return `
    <div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:640px">
      <h2 style="color:#1a2744">Nouveau dossier — ${esc(m.prenom)} ${esc(m.nom)}</h2>
      <ul>
        <li><strong>Société :</strong> ${esc(m.societe)}</li>
        <li><strong>E-mail :</strong> ${esc(s.customer_details?.email || '')}</li>
        <li><strong>Téléphone :</strong> ${esc(m.telephone)}</li>
        <li><strong>Organisme :</strong> ${esc(m.organisme)}</li>
        <li><strong>Montant réclamé :</strong> ${esc(m.montant)} €</li>
        <li><strong>Délai indiqué :</strong> ${esc(m.delai)}</li>
        <li><strong>Signature :</strong> ${esc(m.signature_nom)} (${esc(m.signature_date)})</li>
        <li><strong>Paiement :</strong> ${(s.amount_total || 0) / 100} € — ${esc(s.payment_status)}</li>
      </ul>
      <h3>Pièces déposées (jointes à cet e-mail)</h3>
      <ul>
        ${line('Mise en demeure', m.piece_mise_en_demeure)}
        ${line('Photographie', m.piece_photo)}
        ${line('Échanges', m.piece_echanges)}
      </ul>
    </div>`
}

export async function POST(req) {
  const key = process.env.STRIPE_SECRET_KEY
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!key || !secret) return new Response('not configured', { status: 200 })

  const stripe = new Stripe(key)
  const sig = req.headers.get('stripe-signature')
  const body = await req.text()

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (e) {
    return new Response(`Signature invalide : ${e.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const s = event.data.object
    const m = s.metadata || {}
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const from = process.env.EMAIL_FROM || 'Lazarègue Avocats <dossier@lazaregue-avocats.fr>'
        const clientEmail = s.customer_details?.email || s.customer_email
        if (clientEmail) {
          await resend.emails.send({ from, to: clientEmail, subject: 'Votre dossier est enregistré — Lazarègue Avocats', html: clientEmailHtml(m) })
        }
        if (process.env.CABINET_EMAIL) {
          const attachments = await fetchAttachments(m)
          await resend.emails.send({ from, to: process.env.CABINET_EMAIL, subject: `Nouveau dossier — ${m.prenom || ''} ${m.nom || ''} (${m.organisme || ''})`, html: cabinetEmailHtml(m, s), attachments })
        }
      }
    } catch (e) {
      console.error('[webhook] email error', e)
      // On renvoie 200 malgré tout pour ne pas faire ré-essayer Stripe en boucle.
    }
  }

  return new Response('ok', { status: 200 })
}
