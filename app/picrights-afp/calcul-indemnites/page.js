import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'PicRights AFP : comment sont calculées les sommes réclamées ?',
  description: 'PicRights AFP réclame 1 500 € ou 3 000 € ? Découvrez comment ces sommes sont calculées et pourquoi les tribunaux les réduisent souvent.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/calcul-indemnites/' },
}

const lead = 'Le courrier PicRights AFP réclame parfois plusieurs centaines, voire plusieurs milliers d’euros pour l’utilisation d’une ou plusieurs photographies. La question revient immédiatement : comment cette somme est-elle calculée ?'

const blocks = [
  ['p', 'La réponse est plus nuancée qu’il n’y paraît. Les montants réclamés reposent généralement sur une combinaison de plusieurs éléments — mais les décisions rendues par les tribunaux montrent que les juges ne reprennent jamais automatiquement ces calculs.'],
  ['h2', 'Le point de départ : le prix de la licence'],
  ['p', 'Dans la plupart des dossiers, PicRights AFP commence par déterminer le prix de la licence qui aurait dû être acquittée si l’utilisation avait été autorisée. Cette redevance varie notamment selon la nature du site, la durée d’utilisation, le nombre de photographies et le type d’exploitation. Cette valeur constitue le socle des demandes indemnitaires.'],
  ['h2', 'Le prix de la licence n’est pas le montant final'],
  ['p', 'Le prix de la licence sert de base, mais les demandes vont souvent au-delà. Plusieurs postes peuvent être ajoutés :'],
  ['ul', ['le manque à gagner', 'les pertes subies', 'les bénéfices réalisés grâce à l’utilisation de la photographie', 'certains préjudices moraux']],
  ['p', 'Ces postes correspondent aux critères d’indemnisation prévus par le Code de la propriété intellectuelle.'],
  ['h2', 'Ces demandes sont-elles automatiquement retenues ?'],
  ['p', 'Non — c’est l’enseignement le plus important de la jurisprudence récente. Les juridictions examinent chaque poste séparément : elles vérifient si le manque à gagner est démontré, si les pertes invoquées sont justifiées, si le bénéfice allégué est établi et si un préjudice moral existe réellement. Le juge ne valide jamais automatiquement le calcul proposé.'],
  ['h2', 'Les frais de recherche sont-ils toujours indemnisés ?'],
  ['p', 'Pas nécessairement. L’AFP invoque fréquemment les coûts liés à la détection des utilisations, aux recherches et aux démarches amiables. Les décisions montrent cependant que les tribunaux contrôlent strictement la preuve de ces dépenses : lorsque les justificatifs sont insuffisants, certaines demandes sont rejetées ou fortement réduites.'],
  ['h2', 'Les majorations automatiques sont refusées'],
  ['p', 'Les tribunaux n’acceptent pas systématiquement les pourcentages appliqués de manière forfaitaire, les majorations automatiques ou les extrapolations non justifiées. Ils recherchent au contraire des éléments concrets permettant d’évaluer le préjudice réellement subi.'],
  ['h2', 'Et lorsque la contrefaçon n’est pas retenue ?'],
  ['p', 'Lorsque les photographies ne sont pas jugées suffisamment originales pour bénéficier du droit d’auteur, les tribunaux peuvent examiner le dossier sous l’angle du **parasitisme**. L’indemnisation repose alors davantage sur les investissements réalisés par l’AFP que sur la protection du droit d’auteur. L’échec d’une action en contrefaçon ne met donc pas toujours fin au débat.'],
  ['h2', 'Les montants accordés sont souvent différents'],
  ['p', 'Les sommes accordées par les tribunaux diffèrent fréquemment des montants initialement réclamés, parce que le juge vérifie les preuves, contrôle chaque poste de préjudice et apprécie souverainement les circonstances. Le montant figurant dans une mise en demeure PicRights AFP ne constitue donc jamais une référence intangible.'],
  ['key', 'Le prix de la licence est souvent le point de départ, d’autres postes sont ensuite ajoutés — mais les décisions récentes montrent que les tribunaux contrôlent chaque poste, exigent des justificatifs précis et réduisent régulièrement les montants insuffisamment démontrés. Le montant réclamé ne permet jamais, à lui seul, de préjuger de ce qu’un tribunal retiendrait.'],
]

const faq = [
  ['Le montant indiqué dans la mise en demeure PicRights AFP est-il définitif ?', 'Non. Il s’agit de la position du demandeur. En cas de procédure, le tribunal procède à sa propre évaluation.'],
  ['Les tribunaux reprennent-ils automatiquement les tarifs de l’AFP ?', 'Non. Ils examinent les éléments produits et apprécient eux-mêmes le préjudice, poste par poste.'],
  ['Pourquoi les montants varient-ils autant ?', 'Ils dépendent notamment de la durée d’utilisation, du nombre de photographies, du type de site, des justificatifs produits et des postes de préjudice invoqués.'],
]

export default function Page() {
  return <AfpArticleLayout slug="calcul-indemnites" lead={lead} blocks={blocks} faq={faq} />
}
