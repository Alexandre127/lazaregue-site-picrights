import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights arnaque ? Ce qu’il faut réellement vérifier avant de payer',
  description: 'Vous recherchez « PicRights arnaque » ? Découvrez pourquoi cette question revient souvent, ce qu’il faut vérifier avant toute réponse et pourquoi une réclamation ne signifie pas automatiquement que vous devez payer.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/picrights-arnaque/' },
}

const lead = 'Après avoir reçu une réclamation PicRights, beaucoup effectuent immédiatement la même recherche : « PicRights est-elle une arnaque ? » Vous découvrez soudain une société inconnue, une photographie parfois oubliée, et une demande de plusieurs centaines ou milliers d’euros. La réponse est plus nuancée que la question.'

const blocks = [
  ['h2', 'Pourquoi autant de personnes parlent-elles d’une « arnaque » ?'],
  ['p', 'Cette recherche ne signifie pas nécessairement que les internautes pensent être victimes d’une fraude. Elle traduit surtout un sentiment de surprise : la plupart des destinataires découvrent en même temps le nom de PicRights, le montant réclamé, des références au droit d’auteur et parfois l’intervention d’un cabinet d’avocats.'],
  ['h2', 'Une réclamation PicRights n’est pas automatiquement infondée…'],
  ['p', 'PicRights intervient généralement pour le compte de titulaires de droits afin de détecter certaines utilisations de photographies. Recevoir un courrier de cette société ne permet donc pas de conclure que la réclamation serait fictive.'],
  ['h2', '…mais cela ne signifie pas que vous devez automatiquement payer'],
  ['p', 'C’est ici que réside la confusion. Le simple fait de recevoir une demande de paiement ne suffit pas à démontrer que vous devez régler la somme réclamée. Une réclamation amiable n’est ni une décision de justice, ni une condamnation, ni la preuve que la somme est due. Avant toute décision, plusieurs questions doivent être examinées :'],
  ['ul', ['la photographie est-elle effectivement protégée par le droit d’auteur ?', 'le demandeur démontre-t-il les droits qu’il invoque ?', 'les preuves produites sont-elles suffisantes ?', 'le montant demandé est-il juridiquement justifié ?']],
  ['key', 'La bonne question n’est pas « arnaque ou pas ? » mais « la réclamation que j’ai reçue est-elle juridiquement fondée ? ». Deux personnes ayant reçu un courrier très similaire peuvent se trouver dans des situations totalement différentes.'],
  ['h2', 'Méfiez-vous des réponses toutes faites'],
  ['p', 'Sur Internet, on trouve souvent deux discours opposés : le premier affirme qu’il faut payer immédiatement, le second qu’il ne faut jamais répondre. Dans la pratique, aucune de ces positions ne permet d’analyser sérieusement un dossier. La seule démarche réellement utile consiste à examiner les éléments juridiques propres à la réclamation reçue.'],
  ['h2', 'Ce que nous vérifions avant toute réponse'],
  ['ul', ['la photographie concernée', 'les droits invoqués', 'les preuves produites', 'le montant demandé', 'les éventuels moyens de contestation']],
  ['p', 'Notre objectif n’est ni de partir du principe que la réclamation est fondée, ni de considérer qu’elle serait nécessairement infondée. Il est de déterminer, dossier par dossier, si la demande repose effectivement sur des bases juridiques suffisantes.'],
  ['h2', 'Les erreurs les plus fréquentes'],
  ['ul', ['**Payer** uniquement parce que le courrier paraît impressionnant : le montant ou le ton ne disent rien du bien-fondé', '**Ignorer systématiquement** en pensant qu’il s’agit forcément d’une fraude, et négliger un dossier qui mérite examen', '**Se fier uniquement aux témoignages** trouvés sur Internet : chaque réclamation a ses propres particularités']],
]

const faq = [
  ['PicRights est-elle une société réelle ?', 'Oui. Il s’agit d’une société qui intervient notamment dans la détection d’utilisations supposées non autorisées de photographies.'],
  ['Une réclamation PicRights est-elle forcément justifiée ?', 'Non. Chaque dossier doit être examiné individuellement.'],
  ['Dois-je payer immédiatement ?', 'Une demande amiable n’est pas une décision de justice. Il est recommandé de vérifier d’abord si la réclamation apparaît juridiquement fondée.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-arnaque" lead={lead} blocks={blocks} faq={faq} />
}
