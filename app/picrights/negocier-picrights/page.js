import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Comment négocier avec PicRights ? Stratégies et solution amiable',
  description: 'Peut-on négocier avec PicRights ? Oui : de nombreux dossiers se terminent sans procès. Contestation, demande de justificatifs, régularisation, négociation du montant, transaction : les stratégies possibles.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/negocier-picrights/' },
}

const lead = 'Oui, on peut négocier avec PicRights. En pratique, de nombreux dossiers se terminent sans procès. Encore faut-il choisir la bonne stratégie, au bon moment, sur la base de la bonne analyse.'

const blocks = [
  ['h2', 'Les stratégies envisageables'],
  ['p', 'Selon les circonstances, plusieurs voies sont possibles :'],
  ['ul', ['contester totalement la demande', 'demander des justificatifs complémentaires (titularité, mandat, preuve d’utilisation)', 'proposer une régularisation', 'négocier le montant', 'rechercher une solution transactionnelle']],
  ['h2', 'Ce dont dépend la bonne stratégie'],
  ['p', 'Il n’existe pas de réponse universelle. La stratégie adaptée dépend toujours :'],
  ['ul', ['des preuves disponibles', 'de la photographie concernée et de son originalité', 'de l’agence représentée', 'de la jurisprudence applicable', 'de votre profil (site commercial ou non, durée d’utilisation, retrait…)']],
  ['h2', 'Négocier ne veut pas dire reconnaître'],
  ['p', 'Une discussion amiable peut être engagée sans reconnaître pour autant le bien-fondé de la réclamation. C’est précisément le rôle d’une réponse construite : ouvrir la voie à une solution favorable tout en préservant vos moyens de défense si le dossier devait se judiciariser.'],
  ['key', 'La négociation intervient utilement une fois le rapport de force établi par l’analyse : c’est parce que la demande présente des faiblesses que la discussion sur le montant devient possible.'],
]

const faq = [
  ['Vaut-il mieux négocier ou contester ?', 'Cela dépend du dossier. Souvent, l’analyse détermine d’abord les points contestables, ce qui permet ensuite de négocier dans de meilleures conditions.'],
  ['La négociation peut-elle se retourner contre moi ?', 'Mal formulée, une proposition peut être interprétée comme une reconnaissance. D’où l’intérêt d’une réponse préparée avec un avocat.'],
]

export default function Page() {
  return <ArticleLayout slug="negocier-picrights" lead={lead} blocks={blocks} faq={faq} />
}
