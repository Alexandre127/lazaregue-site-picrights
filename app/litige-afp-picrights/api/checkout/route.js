// API — création de la session de paiement Stripe pour le tunnel « Confier ».
//
// Reçoit le dépôt (champs + fichiers) en multipart, dépose les pièces sur
// Vercel Blob (si configuré), puis crée une session Stripe Checkout (240 € TTC)
// et renvoie son URL de redirection.
//
// REPLI : si STRIPE_SECRET_KEY n'est pas défini, renvoie { simulated: true }
// pour que le tunnel affiche la confirmation sans planter (site fonctionnel
// pendant la mise en place des clés).
//
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   STRIPE_SECRET_KEY        (obligatoire pour activer le paiement réel)
//   STRIPE_TAX_RATE_ID       (optionnel : id d'un taux de TVA 20 % créé dans
//                             Stripe → facture détaillée HT / TVA / TTC)
//   BLOB_READ_WRITE_TOKEN    (optionnel : upload des pièces sur Vercel Blob)
//   NEXT_PUBLIC_SITE_URL     (défaut : https://www.lazaregue-avocats.fr)

import Stripe from 'stripe'
import { put } from '@vercel/blob'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lazaregue-avocats.fr'
const CONFIER = `${SITE}/litige-afp-picrights/confier/`

export async function POST(req) {
  try {
    const form = await req.formData()
    const get = (k) => (form.get(k) || '').toString().trim()
    const client = {
      prenom: get('prenom'), nom: get('nom'), societe: get('societe'),
      email: get('email'), telephone: get('telephone'),
      organisme: get('organisme'), montant: get('montant'), delai: get('delai'),
      signature: get('signature'),
    }

    if (!client.email || !client.nom) {
      return Response.json({ error: 'Informations client incomplètes.' }, { status: 400 })
    }

    // Repli si Stripe non configuré : on ne bloque pas le parcours.
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json({ simulated: true })
    }

    // Upload des pièces sur Vercel Blob (store privé — accès authentifié).
    // On stocke les pathnames ; le webhook les relit avec get() pour les
    // joindre à l'e-mail cabinet.
    const filePaths = { miseEnDemeure: [], photo: [], echanges: [] }
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const slug = (client.email || 'client').replace(/[^\w.@-]/g, '_')
      const uploadField = async (field) => {
        const out = []
        for (const f of form.getAll(field)) {
          if (typeof f === 'object' && f && f.size) {
            const name = (f.name || 'piece').replace(/[^\w.\-]/g, '_')
            const blob = await put(`dossiers/${slug}/${field}-${name}`, f, { access: 'private', addRandomSuffix: true })
            out.push(blob.pathname)
          }
        }
        return out
      }
      try {
        filePaths.miseEnDemeure = await uploadField('miseEnDemeure')
        filePaths.photo = await uploadField('photo')
        filePaths.echanges = await uploadField('echanges')
      } catch (e) {
        // Non bloquant : un souci de stockage ne doit jamais casser le paiement.
        console.error('[checkout] upload Blob échoué', e)
      }
    }

    // Tarif dynamique recalculé CÔTÉ SERVEUR (jamais un montant venant du client) :
    // 200 € HT jusqu'à 2 photographies, +90 € HT par photographie au-delà.
    const nbPhotos = Math.max(1, Math.min(200, parseInt(get('nb_photographies'), 10) || 1))
    const forfaitHT = 200 + (nbPhotos > 2 ? (nbPhotos - 2) * 90 : 0)
    const htCents = forfaitHT * 100
    const ttcCents = forfaitHT * 120 // TVA 20 %

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const taxRate = process.env.STRIPE_TAX_RATE_ID
    const lineItem = taxRate
      ? { price_data: { currency: 'eur', product_data: { name: `Forfait phase amiable — ${nbPhotos} photographie(s)` }, unit_amount: htCents }, quantity: 1, tax_rates: [taxRate] }
      : { price_data: { currency: 'eur', product_data: { name: `Forfait phase amiable — ${nbPhotos} photographie(s) (${forfaitHT} € HT + TVA 20 %)` }, unit_amount: ttcCents }, quantity: 1 }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: client.email,
      line_items: [lineItem],
      invoice_creation: { enabled: true },
      locale: 'fr',
      success_url: `${CONFIER}?paid=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CONFIER}?canceled=1`,
      metadata: {
        prenom: client.prenom, nom: client.nom, societe: client.societe,
        telephone: client.telephone, organisme: client.organisme,
        montant: client.montant, delai: client.delai,
        signature_nom: client.signature, signature_date: new Date().toISOString(),
        piece_mise_en_demeure: filePaths.miseEnDemeure.join(' | ').slice(0, 480),
        piece_photo: filePaths.photo.join(' | ').slice(0, 480),
        piece_echanges: filePaths.echanges.join(' | ').slice(0, 480),
      },
    })

    return Response.json({ url: session.url })
  } catch (e) {
    console.error('[checkout] error', e)
    return Response.json({ error: 'Le paiement n’a pas pu être initié.' }, { status: 500 })
  }
}
