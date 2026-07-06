// API — analyse d'originalité d'une photographie (Grille Lazarègue / Painer).
// La clé Claude reste côté serveur (ANTHROPIC_API_KEY, jamais exposée au client).
// Repli : 503 si non configurée -> le front bascule sur « Confier mon dossier ».

import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PROMPT = `Tu appliques la Grille Lazarègue d'analyse de l'originalité photographique, développée par un cabinet d'avocats français spécialisé en défense contre les réclamations photographiques.

FONDEMENT JURIDIQUE (à respecter strictement dans le raisonnement et le vocabulaire) :
- Une photographie n'est protégée que si elle est originale : une création intellectuelle propre à son auteur, reflétant sa personnalité à travers des CHOIX LIBRES ET CRÉATIFS (art. L.112-2, 9° CPI ; CJUE, 1er déc. 2011, Painer, C-145/10).
- Ces choix s'apprécient en trois temps : avant la prise de vue (mise en scène, pose, éclairage), au moment de la prise de vue (cadrage, angle, atmosphère), après la prise de vue (développement, post-traitement).
- La Cour de cassation juge que des choix, même réels et arbitraires, NE SUFFISENT PAS s'ils ne dépassent pas le simple savoir-faire professionnel ou les standards du genre.
- La charge de la preuve de l'originalité pèse sur celui qui l'invoque : il doit expliciter en quoi ses choix traduisent l'empreinte de sa personnalité. Le juge ne peut y suppléer.

RÈGLES ABSOLUES :
- Tu n'évalues QUE des éléments visuellement observables. Tu n'inventes aucun fait (auteur, contexte, commande, date).
- Tu ne rends JAMAIS de conclusion juridique. Tu n'écris jamais "cette photographie n'est pas protégée" ni "est protégée". Tu identifies des indices et raisonnes en termes de charge de la preuve.
- Tes évaluations doivent être RÉELLEMENT différenciées selon la photographie. Une photographie révélant des choix créatifs manifestes DOIT recevoir un indice faible.
- Si l'image n'est pas une photographie (dessin, capture d'écran, logo, texte), indique-le dans "erreur".

Analyse la photographie selon ces 7 critères, dans cet ordre, chacun rattaché à sa phase :
1. Mise en scène (phase: "preparatoire")
2. Pose et direction du sujet (phase: "preparatoire")
3. Éclairage (phase: "preparatoire")
4. Cadrage et composition (phase: "prise_de_vue")
5. Angle de prise de vue (phase: "prise_de_vue")
6. Atmosphère et moment capturé (phase: "prise_de_vue")
7. Post-traitement et rendu (phase: "post_traitement")

Pour chaque critère : une observation factuelle d'une phrase (vocabulaire juridique sobre) et une évaluation parmi :
- "dicte" : l'élément paraît dicté par le sujet, l'événement ou la fonction documentaire de l'image — aucune liberté créative apparente ;
- "savoir_faire" : choix ordinaire relevant du savoir-faire professionnel ou des standards du genre — insuffisant à lui seul pour caractériser l'originalité ;
- "creatif" : choix libre et créatif apparent, susceptible de traduire l'empreinte de la personnalité de l'auteur.

Puis calcule un indice de contestabilité de 0 à 100 (100 = la démonstration de l'originalité paraît très difficile pour le demandeur ; 0 = choix créatifs manifestes) et détermine le niveau :
- "eleve" si indice >= 65
- "intermediaire" si 40-64
- "limite" si < 40

Rédige une synthèse de 2-3 phrases raisonnant en termes de charge de la preuve : ce que le titulaire des droits devra expliciter et démontrer au vu des éléments observables (il ne peut se contenter d'énumérer des caractéristiques techniques ou d'invoquer un parti pris esthétique). Pour le niveau "limite", précise que la contestation de l'originalité paraît difficile mais que d'autres moyens de défense restent à examiner (justification du mandat, chaîne des droits, proportionnalité du montant réclamé).

Réponds UNIQUEMENT avec ce JSON, sans balises markdown, sans texte avant ou après :
{"photo_type": "description en 4-6 mots", "criteres": [{"phase": "preparatoire|prise_de_vue|post_traitement", "nom": "...", "observation": "...", "evaluation": "dicte|savoir_faire|creatif"}], "indice": 0-100, "niveau": "eleve|intermediaire|limite", "synthese": "..."}
ou, si l'image n'est pas analysable : {"erreur": "explication courte"}`

export async function POST(req) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'not_configured' }, { status: 503 })
  }
  try {
    const { b64 } = await req.json()
    if (!b64) return Response.json({ error: 'Image manquante.' }, { status: 400 })

    const client = new Anthropic()
    const msg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: b64 } },
            { type: 'text', text: PROMPT },
          ],
        },
      ],
    })
    const text = (msg.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n')
    const clean = text.replace(/```json|```/g, '').trim()
    return Response.json(JSON.parse(clean))
  } catch (e) {
    console.error('[analyse-photo]', e)
    return Response.json({ error: "L'analyse n'a pas pu aboutir." }, { status: 500 })
  }
}
