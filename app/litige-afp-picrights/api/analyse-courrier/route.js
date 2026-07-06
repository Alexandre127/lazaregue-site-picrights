// API — extraction des données d'un courrier de réclamation (mise en demeure /
// courrier d'avocat / assignation) pour le devis instantané.
// Ne restitue aucune donnée personnelle du destinataire (voir prompt).

import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PROMPT_LETTRE = `Tu analyses un document relatif à une réclamation photographique (PicRights, AFP, Reuters, AP, PA Images, MaxPPP, Paris Match, Rights Control, Copytrack, Getty Images ou autre).

RÈGLES ABSOLUES :
- Tu extrais UNIQUEMENT les informations demandées. Tu ne restitues JAMAIS de données personnelles du destinataire (noms, adresses, e-mails, numéros de dossier, URL du site).
- Si une information est absente ou illisible, mets null.
- Si le document est sans rapport avec une réclamation photographique, indique-le dans "erreur".

Détermine d'abord "type_document" :
- "mise_en_demeure" : mise en demeure ou réclamation initiale d'une agence ou de son mandataire ;
- "courrier_avocat" : relance ou courrier émanant d'un cabinet d'avocats agissant pour l'agence, encore en phase amiable (pas de saisine du tribunal) ;
- "assignation" : assignation à comparaître devant un tribunal (délivrée par huissier / commissaire de justice).

Extrais ensuite :
1. "demandeur" : l'organisme réclamant ou demandeur (ex. "PicRights, au nom de l'AFP", "Agence France-Presse").
2. "nb_photographies" : le nombre de photographies visées (null si indéterminable).
3. "montant_reclame" : le montant total réclamé en euros (nombre, null si absent).
4. "juridiction" : pour une assignation uniquement, la juridiction saisie (ex. "Tribunal judiciaire de Paris"), sinon null.
5. "date_audience" : pour une assignation uniquement, la date d'audience si elle figure (ex. "3 décembre 2024"), sinon null.

Réponds UNIQUEMENT avec ce JSON, sans balises markdown :
{"type_document": "mise_en_demeure|courrier_avocat|assignation", "demandeur": "...", "nb_photographies": n, "montant_reclame": n, "juridiction": null, "date_audience": null}
ou : {"erreur": "explication courte"}`

export async function POST(req) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'not_configured' }, { status: 503 })
  }
  try {
    const { b64, media_type } = await req.json()
    if (!b64) return Response.json({ error: 'Document manquant.' }, { status: 400 })

    const bloc = media_type === 'application/pdf'
      ? { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: b64 } }
      : { type: 'image', source: { type: 'base64', media_type: media_type || 'image/jpeg', data: b64 } }

    const client = new Anthropic()
    const msg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      messages: [{ role: 'user', content: [bloc, { type: 'text', text: PROMPT_LETTRE }] }],
    })
    const text = (msg.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n')
    const clean = text.replace(/```json|```/g, '').trim()
    return Response.json(JSON.parse(clean))
  } catch (e) {
    console.error('[analyse-courrier]', e)
    return Response.json({ error: "L'analyse du document n'a pas pu aboutir." }, { status: 500 })
  }
}
