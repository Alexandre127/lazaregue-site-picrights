import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Quand une photographie est-elle réellement protégée par le droit d’auteur ?',
  description: 'Toutes les photographies ne sont pas protégées : seules les photographies originales le sont. Critères d’originalité, cas des photos de presse et de la captation d’événements, appréciation du juge.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/originalite-photographie/' },
}

const lead = 'Beaucoup pensent qu’une photographie est automatiquement protégée. En réalité, le droit d’auteur ne protège que les photographies originales. C’est souvent le cœur du débat dans une réclamation PicRights.'

const blocks = [
  ['h2', 'Le principe : l’originalité'],
  ['p', 'En droit français, une photographie n’est protégée que si elle révèle **l’empreinte de la personnalité de son auteur**. Autrement dit, elle doit traduire des choix libres et créatifs, et non résulter uniquement de contraintes techniques.'],
  ['p', 'L’originalité ne dépend pas du prix de la photographie, de la notoriété du photographe ni du prestige de l’agence. Elle dépend uniquement des choix de création.'],
  ['h2', 'Les critères examinés par le juge'],
  ['ul', ['le choix du cadrage', 'la lumière', 'la composition', 'la mise en scène', 'le choix du moment']],
  ['p', 'Le juge recherche la trace de décisions esthétiques personnelles. À l’inverse, une photographie essentiellement documentaire ou technique peut ne pas atteindre ce seuil.'],
  ['h2', 'Les photographies de presse ne sont pas automatiquement originales'],
  ['p', 'Il n’existe aucune présomption d’originalité en faveur des photographies de presse. Certaines résultent d’un véritable travail artistique ; d’autres relèvent principalement de la captation factuelle d’un événement, par exemple :'],
  ['ul', ['conférence de presse', 'remise de prix', 'réunion officielle', 'manifestation publique', 'portrait institutionnel']],
  ['p', 'Dans ces hypothèses, le débat porte souvent sur l’existence, ou non, d’un véritable apport créatif.'],
  ['note', 'Cela ne signifie pas que les photographies de presse seraient dépourvues de protection : chaque cliché s’apprécie individuellement, et l’appréciation appartient toujours au juge.'],
  ['key', 'Vérifier l’originalité réelle de la photographie en cause est l’un des premiers réflexes d’une défense sérieuse : sans œuvre protégée, il n’y a rien à devoir.'],
]

const faq = [
  ['Une photographie trouvée sur Google est-elle libre de droits ?', 'Non. Google est un moteur de recherche : il ne délivre aucune autorisation d’utilisation. La présence d’une image dans les résultats ne dit rien de ses droits.'],
  ['Qui décide si une photo est originale ?', 'En cas de litige, c’est le juge qui apprécie l’originalité, au regard des choix créatifs démontrés par le demandeur.'],
]

export default function Page() {
  return <ArticleLayout slug="originalite-photographie" lead={lead} blocks={blocks} faq={faq} />
}
