import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'PicRights AFP : peut-on ignorer la mise en demeure ?',
  description: 'PicRights AFP : peut-on ne pas répondre à la mise en demeure ? Découvrez les conséquences réelles du silence selon la jurisprudence.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/ignorer/' },
}

const lead = 'Après avoir reçu une réclamation PicRights AFP, de nombreuses personnes envisagent simplement de ne pas répondre. La question revient systématiquement : « si j’ignore le courrier, que risque-t-il de se passer ? »'

const blocks = [
  ['key', 'Aucune règle n’impose de répondre à une mise en demeure PicRights AFP. En revanche, le silence n’empêche absolument pas l’ouverture d’une procédure judiciaire. La vraie question n’est donc pas de savoir si vous êtes obligé de répondre, mais quelles peuvent être les conséquences de cette absence de réponse.'],
  ['h2', 'Une mise en demeure n’est pas une décision de justice'],
  ['p', 'Il faut distinguer deux étapes. La phase amiable, d’abord : c’est le courrier PicRights AFP que vous venez de recevoir. La phase judiciaire, ensuite : si aucun accord n’est trouvé, l’AFP peut décider de saisir le tribunal. Ne pas répondre n’empêche pas l’AFP d’agir en justice — les décisions récentes montrent que les juridictions examinent les demandes même lorsque le destinataire est resté totalement silencieux pendant la phase amiable.'],
  ['h2', 'Le silence ne vaut pas reconnaissance de responsabilité'],
  ['p', 'Le fait de ne pas répondre à une mise en demeure ne constitue pas une reconnaissance implicite de contrefaçon. Le juge examinera toujours la protection de la photographie, les droits invoqués, les preuves produites et les circonstances de l’utilisation. Le tribunal ne condamne jamais une personne uniquement parce qu’elle n’a pas répondu aux courriers amiables.'],
  ['h2', 'Le véritable risque est ailleurs'],
  ['p', 'Le principal risque n’est pas le silence lui-même, mais que l’AFP engage ensuite une procédure. Dans cette hypothèse, le juge statuera au regard des éléments produits — l’originalité de la photographie, la réalité des droits, l’utilisation reprochée et le préjudice — indépendamment du fait que vous ayez répondu ou non. La question centrale demeure celle du bien-fondé de la réclamation.'],
  ['h2', 'Les tribunaux sanctionnent-ils le silence ?'],
  ['p', 'En règle générale, non. La jurisprudence récente montre que le seul fait de ne pas répondre à une mise en demeure ne suffit pas à caractériser une faute distincte. Plusieurs tribunaux rappellent expressément que le silence du destinataire ne permet pas, à lui seul, de retenir une résistance abusive.'],
  ['h2', 'Pourquoi certains défendeurs ont-ils néanmoins été condamnés ?'],
  ['p', 'Une décision récente fait figure d’exception : le tribunal a retenu une indemnisation spécifique en raison d’un comportement caractérisé de mauvaise foi, le défendeur étant resté totalement silencieux malgré de nombreuses démarches et n’ayant pas comparu. Cette décision ne signifie pas que toute absence de réponse constitue une résistance abusive — au contraire, la majorité des décisions rejettent ce chef de demande lorsque le seul grief réside dans l’absence de réponse.'],
  ['h2', 'Le risque principal reste la contrefaçon… ou le parasitisme'],
  ['p', 'Lorsque la photographie est jugée originale, les tribunaux peuvent retenir une contrefaçon. Lorsque cette originalité n’est pas démontrée, certaines juridictions condamnent néanmoins les utilisateurs sur le fondement du **parasitisme**, estimant qu’ils ont profité sans contrepartie des investissements réalisés par l’AFP. Ignorer une mise en demeure ne fait pas disparaître ces questions.'],
  ['h2', 'Que se passe-t-il, concrètement, si vous ne répondez pas ?'],
  ['p', 'Le silence n’a pas d’effet juridique automatique, mais il n’arrête pas le dossier. Trois évolutions sont possibles :'],
  ['table', [
    ['Scénario', 'Ce que cela implique'],
    [
      ['Le dossier s’arrête', 'Aucune suite : cela n’enlève rien au fait que la demande pouvait être infondée.'],
      ['De nouvelles relances', 'Courriers successifs, parfois via un cabinet d’avocats — toujours en phase amiable.'],
      ['Une assignation', 'Le juge examine alors le fond : originalité, droits, preuves, préjudice.'],
    ],
  ]],
  ['h2', 'Que faire, alors ?'],
  ['p', 'La bonne question n’est pas « dois-je répondre ? » mais « la réclamation PicRights AFP est-elle juridiquement fondée ? ». Avant toute décision, il faut vérifier si la photographie est protégée, si les droits invoqués sont démontrés, si les preuves sont suffisantes et si le montant est justifié. C’est seulement après cette analyse qu’il devient possible de définir la stratégie la plus adaptée.'],
  ['link', ['/cas-pratiques/', 'Voir des cas pratiques de réclamations photographiques traités par le cabinet']],
]

const faq = [
  ['Suis-je obligé de répondre à PicRights AFP ?', 'Aucun texte n’impose de répondre à une mise en demeure PicRights AFP. En revanche, le silence n’empêche pas l’engagement d’une procédure judiciaire.'],
  ['Le silence vaut-il reconnaissance de responsabilité ?', 'Non. Le tribunal appréciera les éléments de preuve indépendamment de votre réponse aux courriers amiables.'],
  ['Vais-je être condamné parce que je n’ai pas répondu ?', 'Non. Le simple défaut de réponse ne suffit généralement pas à caractériser une résistance abusive.'],
  ['Puis-je attendre une assignation ?', 'C’est possible, mais une analyse réalisée dès la phase amiable permet souvent de définir une stratégie avant que le litige ne s’aggrave.'],
  ['Ignorer le courrier réduit-il le montant réclamé ?', 'Non. Le silence n’a aucune incidence sur le montant : celui-ci ne sera de toute façon apprécié que par le juge, en cas de procédure, poste par poste.'],
]

export default function Page() {
  return <AfpArticleLayout slug="ignorer" lead={lead} blocks={blocks} faq={faq} />
}
