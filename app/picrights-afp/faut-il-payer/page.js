import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'PicRights AFP : faut-il payer ? Ce qu’il faut vérifier avant',
  description: 'PicRights AFP : une mise en demeure n’est pas une condamnation. Découvrez les 4 vérifications à faire avant toute décision de payer.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/faut-il-payer/' },
}

const lead = 'Vous venez de recevoir un courrier PicRights AFP vous réclamant plusieurs centaines, parfois plusieurs milliers d’euros pour l’utilisation d’une photographie. La première réaction est presque toujours la même : « dois-je payer ? »'

const blocks = [
  ['key', 'Pas automatiquement. Une demande de paiement PicRights AFP ne constitue ni une décision de justice, ni une condamnation. Avant de verser la moindre somme, une question doit être résolue : la réclamation est-elle juridiquement fondée ?'],
  ['h2', 'Une demande PicRights AFP ne signifie pas que vous devez payer'],
  ['p', 'Le courrier que vous avez reçu intervient dans une phase amiable. À ce stade, aucun tribunal n’a statué, aucune condamnation n’a été prononcée, aucune somme n’est judiciairement due. Le demandeur expose sa position et sollicite une indemnisation — encore faut-il que cette demande puisse être juridiquement démontrée.'],
  ['p', 'En cas de procédure, il appartiendra au demandeur d’établir :'],
  ['ul', ['que la photographie bénéficie effectivement de la protection du droit d’auteur', 'qu’il détient les droits qu’il invoque', 'que la photographie utilisée est bien celle concernée', 'que votre utilisation constitue une atteinte à ces droits', 'que le préjudice est démontré']],
  ['p', 'Autrement dit, une réclamation n’est pas une preuve.'],
  ['h2', 'La vraie question n’est pas « dois-je payer ? »'],
  ['p', 'La véritable question est différente : le demandeur pourrait-il réellement obtenir cette somme devant un tribunal ? Tant que les vérifications ci-dessous demeurent sans réponse, payer revient à régler une créance dont le bien-fondé n’a pas encore été vérifié.'],
  ['h2', '1. La photographie est-elle réellement protégée ?'],
  ['p', 'C’est la confusion la plus fréquente. Beaucoup pensent qu’une photographie diffusée par une grande agence de presse bénéficie automatiquement du droit d’auteur. Ce n’est pas ainsi que raisonnent les tribunaux : le juge examine la photographie elle-même et recherche si elle traduit de véritables choix créatifs de son auteur. La qualité du diffuseur ne dispense jamais de cette vérification.'],
  ['h2', '2. Les droits invoqués sont-ils démontrés ?'],
  ['p', 'Le demandeur doit justifier qu’il détient réellement les droits qu’il revendique sur la photographie. Cette question est d’autant plus sensible que, s’agissant de l’AFP, les relations avec les photographes et les cessions de droits sont interprétées strictement par les juridictions.'],
  ['h2', '3. Votre utilisation est-elle juridiquement caractérisée ?'],
  ['p', 'Les preuves produites — souvent des captures d’écran — doivent permettre d’établir avec certitude la photographie concernée, son utilisation et la période visée. Une simple affirmation ne suffit jamais devant le juge.'],
  ['h2', '4. Le montant demandé est-il cohérent ?'],
  ['p', 'Les sommes figurant dans une réclamation PicRights AFP ne constituent pas un barème officiel. En cas de procédure, les juridictions apprécient elles-mêmes le préjudice, en tenant compte de la nature de l’utilisation, de la durée de diffusion et des justificatifs produits. Le montant indiqué ne préjuge jamais de ce qu’un tribunal retiendrait.'],
  ['h2', 'Les erreurs les plus fréquentes'],
  ['ul', ['**Payer immédiatement** : le montant impressionne, mais la décision intervient souvent avant toute vérification juridique', '**Ignorer totalement le courrier** : le silence peut conduire à la poursuite des échanges et, dans certains cas, à une procédure', '**Répondre dans la précipitation** : une réponse mal formulée peut reconnaître inutilement des faits et compliquer la défense']],
  ['key', 'Recevoir une réclamation PicRights AFP ne signifie pas que vous devez automatiquement payer. Ce n’est qu’après l’analyse de ces quatre points qu’il devient possible de déterminer la stratégie la plus adaptée : contestation argumentée, demande de justificatifs ou, lorsque cela apparaît fondé, discussion amiable.'],
]

const faq = [
  ['Suis-je obligé de payer PicRights AFP immédiatement ?', 'Non. Un courrier PicRights AFP est une demande amiable sans force exécutoire. Aucun paiement ne peut être exigé sans décision de justice. Avant toute décision, il convient de vérifier si la réclamation est juridiquement fondée.'],
  ['Le fait que PicRights AFP m’écrive signifie-t-il que je suis responsable ?', 'Non. Une mise en demeure PicRights AFP n’est pas une décision de justice. Elle expose la position du demandeur mais ne préjuge en rien de ce qu’un tribunal retiendrait.'],
  ['Vais-je être poursuivi si je ne paie pas PicRights AFP ?', 'Une procédure judiciaire est toujours possible mais n’est jamais automatique. En cas d’action, le demandeur devra démontrer l’ensemble des conditions nécessaires : protection de la photographie, titularité des droits, preuve de l’utilisation et réalité du préjudice.'],
]

export default function Page() {
  return <AfpArticleLayout slug="faut-il-payer" lead={lead} blocks={blocks} faq={faq} />
}
