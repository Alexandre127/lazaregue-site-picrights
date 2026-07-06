// API — transmission d'une assignation au cabinet (hors circuit Stripe).
// Reçoit le document + coordonnées, l'envoie par e-mail au cabinet (Resend).
// Document transmis en pièce jointe, non stocké.

import { Resend } from 'resend'
import { rateLimit, getIp } from '../_lib'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))

export async function POST(req) {
  if (!rateLimit(getIp(req), { limit: 5 })) {
    return Response.json({ error: 'Trop de requêtes — réessayez dans un moment.' }, { status: 429 })
  }
  try {
    const form = await req.formData()
    // Honeypot anti-spam : champ caché qui doit rester vide.
    if ((form.get('site') || '').toString().trim()) {
      return Response.json({ ok: true })
    }
    const email = (form.get('email') || '').toString().trim()
    const tel = (form.get('tel') || '').toString().trim()
    const file = form.get('fichier')

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'E-mail invalide.' }, { status: 400 })
    }
    if (!file || typeof file !== 'object' || !file.size) {
      return Response.json({ error: 'Merci de joindre votre assignation.' }, { status: 400 })
    }
    if (file.size > 15 * 1024 * 1024) {
      return Response.json({ error: 'Fichier trop volumineux (15 Mo max).' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || !process.env.CABINET_EMAIL) {
      // Repli : non configuré — on renvoie une erreur douce.
      return Response.json({ error: 'not_configured' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const from = process.env.EMAIL_FROM || 'Lazarègue Avocats <dossier@lazaregue-avocats.fr>'
    const buf = Buffer.from(await file.arrayBuffer())
    const filename = (file.name || 'assignation').replace(/[^\w.\-]/g, '_')

    await resend.emails.send({
      from,
      to: process.env.CABINET_EMAIL,
      replyTo: email,
      subject: `Assignation transmise — ${email}`,
      html: `<div style="font-family:Arial,sans-serif;color:#1a1a1a">
        <h2 style="color:#1a2744">Nouvelle assignation à examiner en priorité</h2>
        <ul>
          <li><strong>E-mail :</strong> ${esc(email)}</li>
          <li><strong>Téléphone :</strong> ${esc(tel) || '—'}</li>
        </ul>
        <p>L'assignation est jointe à cet e-mail. Devis personnalisé à adresser sous 24h.</p>
      </div>`,
      attachments: [{ filename, content: buf }],
    })

    return Response.json({ ok: true })
  } catch (e) {
    console.error('[assignation]', e)
    return Response.json({ error: "L'envoi n'a pas pu aboutir." }, { status: 500 })
  }
}
