import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Comment contester une réclamation PicRights : les moyens de défense',
  description: 'Une réclamation PicRights peut être contestée : preuve, titularité des droits, originalité de la photographie, montant réclamé, contexte d’utilisation. Les cinq grands moyens de défense expliqués.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/contester-picrights/' },
}

const lead = 'Une réclamation PicRights peut parfaitement être contestée — sans que cela signifie qu’elle soit nécessairement infondée. Le rôle de l’avocat consiste à identifier les éventuelles faiblesses du dossier. Voici les cinq grands moyens de défense.'

const blocks = [
  ['h2', '1. La preuve'],
  ['p', 'En droit français, la preuve incombe à celui qui réclame l’exécution d’une obligation. C’est donc au demandeur de démontrer que la photographie a bien été utilisée, qu’elle était présente sur le site, qu’elle était protégée et qu’il en détient les droits.'],
  ['p', 'Dans de nombreux dossiers, la preuve repose principalement sur des captures d’écran. Or les juridictions rappellent régulièrement qu’une capture réalisée par une partie elle-même, sans garanties techniques particulières, peut avoir une valeur probatoire limitée lorsqu’elle n’est corroborée par aucun autre élément. Cela ne la rend pas systématiquement irrecevable, mais plus elle est contestée, plus le juge en examine la fiabilité.'],
  ['h2', '2. La titularité des droits'],
  ['p', 'Le deuxième point consiste à vérifier que la personne qui réclame une indemnisation est bien titulaire des droits invoqués. Cette question, en apparence évidente, peut soulever des difficultés :'],
  ['ul', ['cession de droits incomplète', 'changement d’exploitant', 'droits appartenant à plusieurs intervenants', 'revendications concurrentes sur une même image ou une image très proche']],
  ['p', 'Le demandeur doit être en mesure de démontrer qu’il dispose effectivement du droit d’agir.'],
  ['h2', '3. L’originalité de la photographie'],
  ['p', 'C’est probablement le débat le plus technique. Le droit d’auteur ne protège qu’une œuvre **originale**. L’originalité ne dépend ni du prix de la photographie, ni de la notoriété du photographe, ni du prestige de l’agence : elle dépend des choix créatifs réalisés (cadrage, composition, lumière, mise en scène, choix du moment).'],
  ['p', 'Il n’existe aucune présomption selon laquelle une photographie de presse serait automatiquement originale. Certaines résultent d’un véritable travail artistique ; d’autres relèvent essentiellement de la captation d’un événement (conférence, remise de prix, manifestation publique).'],
  ['h2', '4. Le montant réclamé'],
  ['p', 'Même lorsqu’une atteinte est caractérisée, une seconde question demeure : le montant demandé est-il justifié ? Le juge apprécie notamment la valeur économique réelle de la photographie, la durée d’utilisation, l’importance de la diffusion et la réalité du préjudice. Les condamnations effectivement prononcées peuvent être très éloignées des sommes initialement réclamées.'],
  ['h2', '5. Le contexte d’utilisation'],
  ['p', 'Toutes les utilisations ne présentent pas la même gravité. Le juge peut tenir compte du caractère commercial ou non du site, de la finalité informative de la publication, du nombre de visiteurs, de la durée de mise en ligne et du retrait rapide de la photographie. Ces éléments n’effacent pas nécessairement une atteinte, mais peuvent influencer l’analyse et l’évaluation du préjudice.'],
  ['key', 'Il est rare qu’un dossier puisse être tranché à partir du seul courrier reçu. C’est la combinaison de ces cinq axes, appliquée à votre dossier précis, qui détermine la stratégie.'],
]

export default function Page() {
  return <ArticleLayout slug="contester-picrights" lead={lead} blocks={blocks} />
}
