import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Peut-on ignorer une réclamation PicRights ? Ce qui se passe vraiment',
  description: 'Que se passe-t-il si vous ne répondez pas à PicRights ? Ignorer n’entraîne pas automatiquement un procès. Les trois scénarios possibles, faut-il supprimer la photo, et pourquoi une réponse mesurée est préférable.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/peut-on-ignorer-picrights/' },
}

const lead = 'C’est l’une des questions les plus recherchées après « faut-il payer ? ». La réponse est nuancée : ignorer une réclamation n’entraîne pas automatiquement une procédure judiciaire, mais ce n’est pas pour autant la stratégie la plus prudente.'

const blocks = [
  ['h2', 'Trois scénarios possibles'],
  ['steps', [
    ['Le dossier s’arrête', 'Dans certains cas, aucun nouvel échange n’intervient. Cela ne signifie pas que la demande était infondée — simplement qu’aucune procédure n’est engagée.'],
    ['De nouvelles relances', 'Le plus souvent, plusieurs relances interviennent : nouveau courriel, nouvelle demande de paiement, relance plus insistante, parfois une mise en demeure émanant d’un avocat. Il s’agit encore d’une phase amiable.'],
    ['Une assignation', 'Si aucun accord n’est trouvé, une procédure judiciaire peut être engagée. À ce stade seulement, le tribunal examinera la titularité des droits, l’originalité, la réalité de l’utilisation, les preuves et le préjudice.'],
  ]],
  ['p', 'C’est uniquement au dernier stade qu’un juge tranchera le litige. Jusque-là, rien n’est acquis pour le demandeur.'],
  ['h2', 'Faut-il supprimer immédiatement la photographie ?'],
  ['p', 'Dans la majorité des situations, il est prudent de faire cesser rapidement l’utilisation litigieuse lorsque la photographie est toujours en ligne. Cette démarche permet notamment :'],
  ['ul', ['d’éviter la poursuite de la diffusion', 'de limiter l’aggravation éventuelle du préjudice invoqué', 'de montrer votre volonté de coopérer']],
  ['note', 'Attention : supprimer une photographie ne met pas automatiquement fin au litige. Une demande d’indemnisation peut être maintenue pour une utilisation passée.'],
  ['h2', 'Pourquoi une réponse mesurée est préférable au silence'],
  ['p', 'Une absence totale de réponse peut compliquer la suite des échanges et n’empêche pas les relances. À l’inverse, une réponse construite — après analyse — permet de poser le débat sur le bon terrain : preuve, titularité, originalité, montant.'],
  ['key', 'Ni payer par réflexe, ni ignorer par principe : la bonne réponse dépend de l’analyse du dossier.'],
]

const faq = [
  ['Puis-je ignorer totalement le courrier ?', 'Ce n’est généralement pas la stratégie la plus prudente. Une analyse préalable permet de déterminer la réponse la plus adaptée.'],
  ['Supprimer la photo suffit-il à clore le dossier ?', 'Pas toujours. Le retrait de l’image ne met pas automatiquement fin au litige : une indemnisation peut être réclamée pour l’utilisation passée.'],
]

export default function Page() {
  return <ArticleLayout slug="peut-on-ignorer-picrights" lead={lead} blocks={blocks} faq={faq} />
}
