import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'PicRights AFP : une photographie est-elle automatiquement protégée ?',
  description: 'PicRights AFP : toutes les photographies sont-elles protégées ? Découvrez pourquoi les tribunaux refusent la protection à de nombreux clichés de presse.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/originalite/' },
}

const lead = 'C’est probablement la question la plus importante lorsqu’on reçoit un courrier PicRights AFP : la photographie qui m’est reprochée est-elle réellement protégée par le droit d’auteur ?'

const blocks = [
  ['p', 'Beaucoup pensent que la réponse est évidente : puisqu’une photographie provient d’une grande agence de presse, elle serait nécessairement protégée. En réalité, les tribunaux raisonnent différemment. La protection ne dépend pas du nom de l’agence, mais de la photographie elle-même.'],
  ['key', 'Avant de reconnaître une contrefaçon, le juge vérifie d’abord que le cliché constitue une véritable œuvre de l’esprit : présente-t-il une originalité suffisante pour bénéficier du droit d’auteur ? C’est cette question qui se trouve au cœur de nombreux contentieux PicRights AFP.'],
  ['h2', 'Le droit d’auteur ne protège pas toutes les photographies'],
  ['p', 'Le Code de la propriété intellectuelle protège les œuvres photographiques, mais à condition qu’elles soient originales. La Cour de justice de l’Union européenne résume cette exigence par une formule devenue classique : une œuvre est protégée lorsqu’elle constitue « une création intellectuelle propre à son auteur ». La photographie doit donc refléter la personnalité du photographe grâce à des choix libres et créatifs.'],
  ['h2', 'Que recherchent concrètement les tribunaux ?'],
  ['p', 'Le juge ne se contente pas de regarder la photographie : il cherche à comprendre comment elle a été réalisée. Les décisions retiennent notamment :'],
  ['ul', ['le choix du sujet', 'le cadrage', 'l’angle de prise de vue', 'la lumière', 'la profondeur de champ', 'la mise en scène éventuelle', 'le moment du déclenchement', 'le traitement de l’image']],
  ['p', 'Pris ensemble, ces éléments permettent de déterminer si le photographe a exprimé une véritable démarche créative ou s’il s’est limité à une exécution essentiellement technique.'],
  ['h2', 'Les photographies de presse sont-elles plus difficiles à protéger ?'],
  ['p', 'Oui — c’est probablement l’enseignement majeur de la jurisprudence récente. Les photographies prises lors d’événements sportifs, de conférences, de manifestations, d’actualités politiques ou « sur le vif » sont souvent réalisées dans un contexte où de nombreux éléments sont imposés au photographe : le sujet, la lumière, le décor, le moment. Les juges vérifient donc avec une attention particulière quels sont les véritables choix personnels du photographe. À défaut, ils peuvent considérer que la photographie relève du savoir-faire technique et non d’une création originale.'],
  ['h2', 'Ce que montre la jurisprudence récente'],
  ['p', 'L’analyse des décisions rendues en 2024, 2025 et 2026 révèle une tendance claire : dans plusieurs affaires, les juridictions refusent de reconnaître l’originalité de photographies de presse. Les juges relèvent notamment que le cadrage est classique, que la lumière est imposée par les lieux, que le sujet ne laisse que peu de liberté, et que les descriptions fournies par l’AFP demeurent trop générales. Les tribunaux attendent désormais une démonstration précise des choix créatifs ayant conduit à chaque photographie.'],
  ['h2', 'Certaines photographies restent néanmoins protégées'],
  ['p', 'La jurisprudence n’est pas uniforme. Certaines photographies sont reconnues comme protégeables lorsque le photographe démontre précisément la mise en scène, le jeu de lumière, la composition, le cadrage, la perspective ou l’atmosphère recherchée. Dans une décision rendue par le tribunal judiciaire de Bordeaux, un cliché représentant un escalier monumental a ainsi été jugé original en raison des choix esthétiques précis réalisés par son auteur.'],
  ['h2', 'Pourquoi cette distinction est décisive'],
  ['p', 'Cette question détermine souvent la suite du dossier. Si la photographie bénéficie de la protection du droit d’auteur, une action en contrefaçon peut être envisagée. En revanche, si cette protection fait défaut, le litige peut se déplacer vers d’autres fondements, notamment le **parasitisme**, lorsque l’utilisation non autorisée permet de tirer profit des investissements réalisés par une agence de presse. L’originalité constitue donc souvent la première question que le tribunal devra trancher.'],
  ['h2', 'Photographie protégée ou non : les critères en pratique'],
  ['p', 'Le tableau suivant résume les indices qui, en pratique, orientent le juge vers — ou contre — la protection d’une photographie de presse.'],
  ['table', [
    ['Plutôt protégée', 'Plutôt non protégée'],
    [
      ['Mise en scène ou cadrage travaillés, angle recherché', 'Cadrage classique, imposé par l’événement'],
      ['Jeu de lumière et composition maîtrisés', 'Lumière et décor imposés par les lieux'],
      ['Moment du déclenchement choisi, intention visible', 'Captation « sur le vif » d’un fait d’actualité'],
      ['Choix créatifs précisément décrits par l’auteur', 'Description générale, sans démonstration des choix'],
    ],
  ]],
  ['p', 'Ces indices ne sont pas des règles absolues : ils s’apprécient **ensemble**, au cas par cas. Un seul élément ne suffit ni à protéger, ni à écarter la protection.'],
  ['key', 'Le simple fait qu’un cliché soit diffusé par PicRights AFP ne suffit plus. Chaque photographie est appréciée individuellement. La véritable question devient : cette photographie révèle-t-elle réellement des choix libres et créatifs traduisant la personnalité de son auteur ?'],
  ['link', ['/cas-pratiques/', 'Voir des cas pratiques de contestation d’originalité']],
]

const faq = [
  ['Toutes les photographies AFP sont-elles protégées ?', 'Non. La protection dépend toujours des caractéristiques propres à chaque photographie, indépendamment du nom de l’agence.'],
  ['Une photographie de presse est-elle automatiquement originale ?', 'Non. Les tribunaux apprécient chaque cliché individuellement et refusent fréquemment la protection à des photographies prises « sur le vif ».'],
  ['Une photographie non protégée signifie-t-elle qu’il n’existe aucun risque ?', 'Pas nécessairement. Selon les circonstances, d’autres fondements, notamment le parasitisme, peuvent être invoqués.'],
  ['Qui doit prouver l’originalité de la photographie ?', 'C’est au demandeur qui invoque le droit d’auteur de démontrer, précisément, les choix créatifs qui rendent la photographie originale. Une affirmation générale ne suffit pas devant le juge.'],
  ['Une photographie retouchée est-elle davantage protégée ?', 'Le traitement de l’image peut compter parmi les choix créatifs, mais il ne suffit pas à lui seul : c’est l’ensemble de la démarche du photographe qui est apprécié.'],
]

export default function Page() {
  return <AfpArticleLayout slug="originalite" lead={lead} blocks={blocks} faq={faq} />
}
