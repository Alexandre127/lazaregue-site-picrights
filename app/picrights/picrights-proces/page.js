import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights procès : risquez-vous une procédure judiciaire ?',
  description: 'PicRights peut-elle engager un procès ? Découvrez dans quels cas une assignation est possible et ce que le demandeur devra démontrer au tribunal.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/picrights-proces/' },
}

const lead = 'Après une réclamation PicRights, beaucoup effectuent la même recherche : « PicRights va-t-elle vraiment engager un procès ? » Les courriers évoquent parfois une mise en demeure, un cabinet d’avocats, une procédure, des dommages et intérêts. La réponse est plus nuancée qu’il n’y paraît.'

const blocks = [
  ['h2', 'Le risque d’un procès est-il réel ?'],
  ['p', 'Il faut d’abord distinguer plusieurs intervenants. Dans la majorité des dossiers, PicRights intervient dans la **phase amiable** : détecter certaines utilisations, adresser une première réclamation, rechercher une résolution amiable. Si aucun accord n’est trouvé, le dossier peut ensuite être transmis à un cabinet d’avocats mandaté par le titulaire des droits, et une procédure peut alors être engagée.'],
  ['key', 'Recevoir une réclamation PicRights ne signifie pas qu’un procès est déjà engagé — ni qu’il est inévitable.'],
  ['h2', 'À quel moment un procès devient-il possible ?'],
  ['steps', [
    ['Détection de la photographie', 'un dossier est ouvert à la suite d’une correspondance détectée.'],
    ['Réclamation amiable', 'une première demande est adressée au propriétaire du site.'],
    ['Échanges entre les parties', 'relances, éventuelles explications, discussions.'],
    ['Éventuelle intervention d’un cabinet d’avocats', 'lorsque la phase amiable n’aboutit pas.'],
    ['Assignation devant le tribunal', 'seulement si aucun accord n’est trouvé — toutes les réclamations ne suivent pas cette évolution.'],
  ]],
  ['h2', 'Que devra démontrer le demandeur devant le tribunal ?'],
  ['p', 'Une assignation ne garantit pas le succès du demandeur. Devant le tribunal, plusieurs éléments devront être démontrés :'],
  ['ul', ['que la photographie est protégée par le droit d’auteur', 'que le demandeur est titulaire des droits invoqués', 'que l’utilisation reprochée est établie', 'que le préjudice est démontré', 'que le montant demandé est justifié']],
  ['p', 'Le juge procède à un examen complet et ne se contente jamais de reprendre les affirmations figurant dans la mise en demeure.'],
  ['h2', 'Les tribunaux condamnent-ils automatiquement ?'],
  ['p', 'Non. Les décisions rendues en droit d’auteur montrent que les juridictions examinent chaque dossier individuellement : certaines actions aboutissent, d’autres sont partiellement accueillies, certaines sont intégralement rejetées. La seule existence d’une mise en demeure ne permet jamais de prévoir l’issue d’une procédure.'],
  ['h2', 'Faut-il attendre une assignation pour consulter un avocat ?'],
  ['p', 'En règle générale, non. La phase amiable est souvent le moment où les positions juridiques sont exposées pour la première fois. Une analyse à ce stade permet d’examiner la photographie, de vérifier les droits invoqués, d’analyser les preuves et de définir la stratégie. Attendre une assignation réduit généralement les possibilités d’action.'],
  ['h2', 'Notre approche'],
  ['p', 'Notre intervention ne consiste pas à attendre un procès. Notre première mission est de déterminer si la réclamation apparaît juridiquement fondée. Lorsque certains éléments sont discutables, la stratégie consiste à le faire valoir dès la phase amiable — l’objectif étant de traiter le dossier avant qu’une procédure ne devienne nécessaire.'],
  ['h2', 'Les erreurs les plus fréquentes'],
  ['ul', ['**Penser qu’un procès est inévitable** : la phase amiable existe précisément pour permettre l’échange avant toute procédure', '**Attendre le dernier moment** : les premières réponses amiables peuvent déjà avoir une incidence sur la suite', '**Répondre sans avoir analysé le dossier** : cela peut compliquer inutilement la défense ultérieure']],
]

const faq = [
  ['PicRights assigne-t-elle systématiquement ?', 'Non. Une réclamation amiable n’entraîne pas automatiquement une procédure judiciaire.'],
  ['Un cabinet d’avocats est déjà intervenu. Est-il trop tard ?', 'Non. L’intervention d’un cabinet s’inscrit encore, dans la plupart des cas, dans la phase amiable.'],
  ['Que se passe-t-il si je reçois une assignation ?', 'À partir de ce stade, des délais procéduraux s’imposent et une défense contentieuse spécifique devient nécessaire.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-proces" lead={lead} blocks={blocks} faq={faq} />
}
