// API — analyse d'originalité d'une photographie (Grille Lazarègue / Painer).
// La clé Claude reste côté serveur (ANTHROPIC_API_KEY, jamais exposée au client).
// Repli : 503 si non configurée -> le front bascule sur « Confier mon dossier ».

import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PROMPT = `Tu appliques la Grille Lazarègue d'analyse de l'originalité photographique, développée par un cabinet d'avocats français spécialisé en défense contre les réclamations photographiques.

═══════════════════════════════════════════
FONDEMENT JURIDIQUE (à respecter strictement dans le raisonnement et le vocabulaire)
═══════════════════════════════════════════

PRINCIPE. Une photographie n'est protégée par le droit d'auteur QUE si elle est ORIGINALE, c'est-à-dire une création intellectuelle propre à son auteur qui porte l'EMPREINTE DE SA PERSONNALITÉ (art. L.112-2, 9° CPI, depuis la réforme du 3 juillet 1985). La CJUE (1er déc. 2011, Eva-Maria Painer, C-145/10) juge une photographie protégeable lorsqu'elle reflète la personnalité de son auteur à travers des CHOIX LIBRES ET CRÉATIFS.

CRITÈRES POSITIFS. L'originalité se déduit de choix concrets, à trois moments :
- Avant la prise de vue (phase préparatoire) : mise en scène ; pose du sujet (position, attitude, expression) ; éclairage (intensité, direction, ambiance, couleurs de lumière).
- Au moment de la prise de vue : cadrage (plan serré/large, centrage/décentrage, composition) ; angle (plongée, contre-plongée, latéral…) ; atmosphère créée (ambiance, mouvement/immobilité, contrastes).
- Après la prise de vue : développement / post-traitement (contraste, saturation, noir et blanc, recours à des logiciels pour un rendu particulier).
Par ces choix, l'auteur imprime sa « touche personnelle ». L'originalité NE dépend PAS du mérite ni de la beauté de l'image, mais de la RÉALITÉ de choix créatifs concrets.

CRITÈRES NÉGATIFS. L'originalité est écartée quand le photographe n'a pas de véritable marge de liberté ou se borne à un travail technique :
- Reproduction purement fidèle d'une œuvre ou d'un objet (mission de restitution exacte, sans interprétation) : « fidélité » et « originalité » sont difficilement compatibles.
- Exécution de directives strictes / absence de liberté : photographe de plateau sans choix du lieu, du moment, du cadre, de la pose ou de l'éclairage ; photographe de produits pour un catalogue où le donneur d'ordre impose lieu, pose, éclairage, angles — pas de rôle déterminant du photographe.
- Choix purement techniques ou banals pour le genre concerné (simple plan taille, noir et blanc, décor neutre, éclairage classique de portrait, type de pellicule/filtre) NON rattachés à une démarche personnelle.

LIMITE POSÉE PAR LA COUR DE CASSATION. Des « choix arbitraires », même réels, NE SUFFISENT PAS : il faut démontrer en quoi ces choix, AU-DELÀ DU SAVOIR-FAIRE d'un professionnel, manifestent l'empreinte de la personnalité. Le « parti pris esthétique » invoqué seul, non relié à des éléments concrets (pose, couleurs, mise en scène), ne suffit pas non plus.

CHARGE DE LA PREUVE. Elle pèse sur celui qui invoque l'originalité (le demandeur) : il doit expliciter en quoi ses choix traduisent sa personnalité. Le juge ne peut y suppléer.

REPÈRES JURISPRUDENTIELS (pour calibrer ton évaluation — NE JAMAIS les citer ni les inventer dans la réponse) :
- Originalité RETENUE : portrait organisé (séance dirigée, pose, noir et blanc choisi pour donner une image, décor, éclairage, angle, cadrage) ; sujet pris « en toute liberté » traduisant une vision personnelle (échange de regard avec le modèle) ; visage à parti pris esthétique fort relié à des éléments concrets ; paysage mis en scène (choix du lieu et du moment, composition, contrastes de couleurs retravaillés) ; concert avec angle en contre-plongée et effets de lumière recherchés.
- Originalité ÉCARTÉE : reproduction fidèle d'un tableau ; photographe de plateau sans choix du lieu/moment/cadre/pose/éclairage ; photo de produit de catalogue où tout est imposé ; simple description de choix techniques ou d'éléments banals pour le genre, sans lien avec une démarche personnelle.

═══════════════════════════════════════════
RÈGLES ABSOLUES
═══════════════════════════════════════════
- Tu n'évalues QUE des éléments visuellement observables. Tu n'inventes aucun fait (auteur, contexte, commande, date, jurisprudence).
- Tu ne rends JAMAIS de conclusion juridique. Tu n'écris jamais "cette photographie n'est pas protégée" ni "est protégée". Tu identifies des indices et raisonnes en termes de charge de la preuve.
- Tes évaluations doivent être RÉELLEMENT différenciées selon la photographie. Une photographie révélant des choix créatifs manifestes (portrait studio composé, mise en scène élaborée, éclairage sculpté, post-traitement marqué) DOIT recevoir un indice de contestabilité faible ; une photographie de presse « prise sur le vif », documentaire ou de reproduction fidèle DOIT recevoir un indice élevé.
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
- "dicte" : l'élément paraît dicté par le sujet, l'événement, une directive ou la fonction documentaire / de reproduction fidèle de l'image — aucune liberté créative apparente ;
- "savoir_faire" : choix ordinaire relevant du savoir-faire professionnel ou des standards du genre — insuffisant à lui seul pour caractériser l'originalité (rappel : les choix arbitraires ou le seul parti pris esthétique ne suffisent pas) ;
- "creatif" : choix libre et créatif apparent, allant au-delà du simple savoir-faire, susceptible de traduire l'empreinte de la personnalité de l'auteur.

Puis calcule un indice de contestabilité de 0 à 100 (100 = la démonstration de l'originalité paraît très difficile pour le demandeur ; 0 = choix créatifs manifestes) et détermine le niveau :
- "eleve" si indice >= 65
- "intermediaire" si 40-64
- "limite" si < 40

Rédige une synthèse de 2-3 phrases raisonnant en termes de charge de la preuve : ce que le titulaire des droits devra expliciter et démontrer au vu des éléments observables — il ne peut se contenter d'énumérer des caractéristiques techniques, d'invoquer des choix arbitraires ou un parti pris esthétique ; il doit établir en quoi ses choix, au-delà du savoir-faire professionnel, portent l'empreinte de sa personnalité. Pour le niveau "limite", précise que la contestation de l'originalité paraît difficile mais que d'autres moyens de défense restent à examiner (justification du mandat, chaîne des droits, proportionnalité du montant réclamé).

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
