import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Les décisions de justice concernant PicRights et les photos de presse',
  description: 'Que disent les tribunaux dans les litiges photographiques ? Originalité tantôt retenue tantôt refusée, valeur des captures d’écran, montants revus à la baisse : une jurisprudence marquée par la diversité des issues.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/jurisprudence-picrights/' },
}

const lead = 'Il n’existe pas de réponse unique : la jurisprudence relative aux réclamations photographiques illustre surtout la diversité des issues. Comprendre ces grandes lignes aide à mesurer ce qui se joue réellement dans un dossier.'

const blocks = [
  ['h2', 'L’originalité : tantôt retenue, tantôt refusée'],
  ['p', 'Le débat central porte souvent sur l’originalité. Les décisions montrent que la protection est accordée lorsque des choix créatifs sont démontrés (mise en scène, éclairage, composition documentés), et refusée lorsque la photographie apparaît essentiellement technique ou documentaire. Aucune catégorie d’images n’est protégée « par principe ».'],
  ['h2', 'La preuve : la valeur des captures d’écran'],
  ['p', 'Les juridictions rappellent régulièrement qu’une capture d’écran réalisée par une partie elle-même n’offre pas les mêmes garanties qu’un constat effectué dans des conditions techniques contrôlées. Sa force probante dépend des circonstances et des éléments complémentaires produits — elle n’est ni systématiquement écartée, ni systématiquement suffisante.'],
  ['h2', 'Le montant : des condamnations souvent éloignées des demandes'],
  ['p', 'Les décisions révèlent des écarts importants entre les sommes initialement réclamées et les montants effectivement accordés. Le juge apprécie le préjudice réellement démontré, ce qui laisse une marge de discussion sur le quantum.'],
  ['note', 'Chaque affaire s’apprécie individuellement. Une décision favorable dans un dossier ne préjuge pas de l’issue d’un autre : les faits, les preuves et la photographie changent tout.'],
  ['h2', 'Consulter la bibliothèque'],
  ['p', 'Nous tenons une bibliothèque de jurisprudence commentée, classée par thème (originalité, mandat, préjudice, procédure), pour illustrer la diversité des solutions.'],
  ['link', ['/jurisprudence/', 'Consulter toute la jurisprudence commentée']],
]

export default function Page() {
  return <ArticleLayout slug="jurisprudence-picrights" lead={lead} blocks={blocks} />
}
