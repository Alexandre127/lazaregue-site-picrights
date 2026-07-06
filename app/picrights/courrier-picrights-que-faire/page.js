import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'J’ai reçu un courrier PicRights : que faire ? Les bons réflexes',
  description: 'Vous venez de recevoir un courrier ou un e-mail PicRights ? Pourquoi vous l’avez reçu, les bons réflexes à adopter, les erreurs à éviter et les documents à conserver avant toute réponse.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/courrier-picrights-que-faire/' },
}

const lead = 'Un courrier PicRights vient d’arriver et vous ne savez pas comment réagir. Avant toute réponse, voici pourquoi vous l’avez probablement reçu et les réflexes qui protègent vos intérêts.'

const blocks = [
  ['h2', 'Pourquoi avez-vous reçu ce courrier ?'],
  ['p', 'Dans la majorité des dossiers, plusieurs situations reviennent.'],
  ['h3', 'Une photographie utilisée sans licence suffisante'],
  ['p', 'Licence limitée, mauvais usage commercial, licence expirée : l’autorisation existait peut-être, mais pas pour cet usage ou plus à cette date.'],
  ['h3', 'Un site conçu par une agence web'],
  ['p', 'C’est extrêmement fréquent. Le propriétaire du site découvre plusieurs années plus tard qu’une photographie aurait été insérée sans autorisation par son prestataire.'],
  ['h3', 'Une ancienne version du site'],
  ['p', 'Certaines photographies ont disparu depuis longtemps mais restent invoquées. La question de la preuve devient alors essentielle.'],
  ['h3', 'Une erreur de détection'],
  ['p', 'Aucune technologie n’est infaillible. Une correspondance visuelle ne démontre pas automatiquement qu’il s’agit de la même photographie.'],
  ['h2', 'Les bons réflexes'],
  ['ul', ['Ne pas payer dans la précipitation, avant toute analyse', 'Ne pas reconnaître spontanément une contrefaçon dans un e-mail rédigé à la hâte', 'Ne pas ignorer totalement le courrier', 'Faire vérifier le dossier avant de formuler une réponse']],
  ['note', 'Certaines réponses rédigées dans la précipitation peuvent être interprétées comme une reconnaissance. Mieux vaut une réponse mesurée qu’une réaction impulsive.'],
  ['h2', 'Les documents à conserver'],
  ['p', 'Ces éléments peuvent devenir essentiels par la suite :'],
  ['ul', ['le courrier ou l’e-mail reçu', 'l’ensemble des échanges', 'les anciennes versions du site', 'les contrats conclus avec le développeur ou l’agence web', 'les éventuelles licences ou factures d’achat de l’image']],
  ['key', 'À ce stade, aucun juge n’a été saisi : le courrier est une demande amiable. Vous avez le temps de faire analyser le dossier avant de décider.'],
]

const faq = [
  ['Dois-je répondre moi-même immédiatement ?', 'Une réponse est généralement préférable à un silence total, mais elle doit être mesurée. Une analyse préalable permet de déterminer la formulation la plus adaptée.'],
  ['Puis-je perdre mes droits si je ne réponds pas tout de suite ?', 'Non. Vous ne perdez aucun droit en prenant le temps de faire analyser le dossier avant de répondre.'],
]

export default function Page() {
  return <ArticleLayout slug="courrier-picrights-que-faire" lead={lead} blocks={blocks} faq={faq} />
}
