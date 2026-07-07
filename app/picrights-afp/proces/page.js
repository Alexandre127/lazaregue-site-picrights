import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'PicRights AFP procès : risquez-vous vraiment une assignation ?',
  description: 'PicRights AFP peut-il engager un procès ? Découvrez ce que l’AFP devra démontrer devant le tribunal et ce que dit la jurisprudence récente.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/proces/' },
}

const lead = 'Après avoir reçu une réclamation PicRights AFP, beaucoup se posent immédiatement la même question : « l’AFP va-t-elle réellement engager un procès ? » Recevoir un courrier ne signifie pourtant pas qu’une assignation sera automatiquement délivrée.'

const blocks = [
  ['h2', 'Une réclamation PicRights AFP n’est pas un procès'],
  ['p', 'Le courrier que vous recevez correspond à une phase amiable. À ce stade, aucun tribunal ne s’est prononcé, aucune responsabilité n’a été retenue, aucune condamnation n’a été prononcée. Le demandeur expose simplement sa position et sollicite une indemnisation. Si aucun accord n’intervient, une procédure judiciaire peut alors être envisagée.'],
  ['key', 'Recevoir une réclamation PicRights AFP ne signifie pas qu’un procès est engagé — ni qu’il est inévitable.'],
  ['h2', 'Que devra démontrer PicRights AFP devant le tribunal ?'],
  ['p', 'Contrairement à une idée répandue, une assignation ne suffit pas à obtenir gain de cause. Devant le juge, plusieurs éléments devront être démontrés :'],
  ['ul', ['que la photographie bénéficie de la protection du droit d’auteur', 'que l’AFP dispose des droits lui permettant d’agir', 'que votre utilisation constitue une reproduction ou une représentation non autorisée', 'que le préjudice invoqué est établi']],
  ['p', 'Le juge procède toujours à une analyse complète du dossier et ne reprend jamais automatiquement les affirmations contenues dans la mise en demeure.'],
  ['h2', 'Les tribunaux examinent d’abord la photographie'],
  ['p', 'La première question porte presque toujours sur la protection de la photographie. Le tribunal recherche si le cliché traduit des choix libres et créatifs révélant la personnalité du photographe. Lorsque cette condition n’est pas remplie, les demandes fondées sur la contrefaçon peuvent être rejetées.'],
  ['h2', 'Les droits invoqués doivent également être démontrés'],
  ['p', 'L’AFP ne peut obtenir une condamnation qu’à la condition de démontrer qu’elle dispose effectivement des droits invoqués. Les arrêts rendus par la cour d’appel de Paris le 9 juin 2009 rappellent que les clauses de cession doivent être interprétées strictement : lorsque certains modes d’exploitation, notamment numériques, ne sont pas précisément prévus, leur utilisation peut être analysée comme une contrefaçon. Ces décisions concernent les relations entre l’AFP et ses photographes, mais elles rappellent un principe essentiel : les droits invoqués doivent toujours être démontrés.'],
  ['h2', 'La contrefaçon n’est pas systématiquement retenue'],
  ['p', 'La jurisprudence récente montre que les solutions varient selon les photographies. Dans certaines affaires, les tribunaux reconnaissent l’originalité du cliché et retiennent la contrefaçon ; dans d’autres, ils considèrent que la photographie ne présente pas une originalité suffisante et rejettent les demandes fondées sur le droit d’auteur. La seule utilisation d’une photographie AFP ne conduit pas automatiquement à une condamnation.'],
  ['h2', 'L’absence de contrefaçon ne met pas toujours fin au litige'],
  ['p', 'Lorsque les tribunaux refusent la protection par le droit d’auteur, ils peuvent néanmoins examiner d’autres fondements. Plusieurs décisions retiennent le **parasitisme** lorsque l’utilisation non autorisée permet de tirer profit des investissements réalisés par une agence de presse. L’échec d’une action en contrefaçon ne signifie donc pas nécessairement que toute responsabilité est exclue.'],
  ['h2', 'Les erreurs les plus fréquentes'],
  ['ul', ['**Penser qu’un procès est automatique** : une mise en demeure n’est pas une assignation', '**Payer sans avoir analysé le dossier** : le montant demandé ne préjuge jamais de ce qu’un tribunal retiendrait', '**Attendre une assignation pour réagir** : une analyse dès la réception permet souvent de définir une stratégie avant que le litige ne s’aggrave']],
  ['key', 'Un procès en matière de photographies de presse n’est jamais automatique : il dépend toujours de la qualité des preuves, des droits invoqués et des caractéristiques propres à chaque photographie.'],
]

const faq = [
  ['PicRights AFP engage-t-il réellement des procès ?', 'Oui. Comme tout titulaire de droits, l’AFP peut saisir le tribunal lorsqu’elle estime qu’une photographie a été utilisée sans autorisation. Mais la procédure n’est jamais automatique.'],
  ['Vais-je forcément être condamné ?', 'Non. Le tribunal examine chaque dossier individuellement. Il appartient au demandeur de démontrer l’ensemble des conditions nécessaires au succès de son action.'],
  ['Le juge reprend-il automatiquement le montant de la mise en demeure ?', 'Non. Le préjudice est apprécié par le tribunal au regard des circonstances propres à chaque affaire.'],
]

export default function Page() {
  return <AfpArticleLayout slug="proces" lead={lead} blocks={blocks} faq={faq} />
}
