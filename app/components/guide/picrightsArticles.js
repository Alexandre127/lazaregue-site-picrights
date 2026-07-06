// Index des articles du cluster PicRights. La page pilier résume chaque thème
// et renvoie vers l'article ; chaque article renvoie vers le pilier.
export const PILLAR = { href: '/picrights/', title: 'Guide complet PicRights' }

export const ARTICLES = [
  { slug: 'faut-il-payer-picrights', crumb: 'Faut-il payer', title: 'Faut-il payer PicRights ? Les 6 vérifications indispensables avant toute décision' },
  { slug: 'avis-sur-picrights', crumb: 'Avis', title: 'Avis sur PicRights : faut-il s’inquiéter après une réclamation ?' },
  { slug: 'picrights-afp', crumb: 'PicRights & AFP', title: 'PicRights AFP : pourquoi avez-vous reçu une réclamation au nom de l’AFP ?' },
  { slug: 'picrights-europe-gmbh', crumb: 'Qui est PicRights', title: 'PicRights Europe GmbH : pourquoi cette société apparaît-elle sur votre réclamation ?' },
  { slug: 'jurisprudence-picrights', crumb: 'Jurisprudence', title: 'Jurisprudence PicRights : ce que disent réellement les tribunaux' },
  { slug: 'picrights-proces', crumb: 'Procès', title: 'PicRights procès : risquez-vous réellement une procédure judiciaire ?' },
  { slug: 'peut-on-ignorer-picrights', crumb: 'Ignorer la demande', title: 'Peut-on ignorer une réclamation PicRights ?' },
  { slug: 'picrights-arnaque', crumb: 'Arnaque ?', title: 'PicRights est-elle une arnaque ? Ce qu’il faut réellement vérifier' },
  { slug: 'courrier-picrights-que-faire', crumb: 'Courrier reçu', title: 'J’ai reçu un courrier PicRights : que faire ?' },
  { slug: 'contester-picrights', crumb: 'Contester', title: 'Comment contester une réclamation PicRights : les moyens de défense' },
  { slug: 'originalite-photographie', crumb: 'Originalité', title: 'Quand une photographie est-elle réellement protégée par le droit d’auteur ?' },
  { slug: 'montant-reclame-picrights', crumb: 'Le montant', title: 'Comment est calculé le montant réclamé par PicRights ?' },
  { slug: 'negocier-picrights', crumb: 'Négocier', title: 'Comment négocier avec PicRights ?' },
]

export const bySlug = (slug) => ARTICLES.find((a) => a.slug === slug)
export const href = (slug) => `/picrights/${slug}/`

// Maillage interne : pour chaque article, les 3 articles les plus pertinents
// (mis en avant). Les autres articles du cluster restent liés en pied de page,
// de sorte que chaque page pointe vers toutes les autres (maillage complet).
export const RELATED = {
  'faut-il-payer-picrights': ['originalite-photographie', 'montant-reclame-picrights', 'contester-picrights'],
  'avis-sur-picrights': ['picrights-arnaque', 'faut-il-payer-picrights', 'picrights-europe-gmbh'],
  'picrights-afp': ['picrights-europe-gmbh', 'originalite-photographie', 'jurisprudence-picrights'],
  'picrights-europe-gmbh': ['courrier-picrights-que-faire', 'avis-sur-picrights', 'picrights-afp'],
  'jurisprudence-picrights': ['originalite-photographie', 'montant-reclame-picrights', 'contester-picrights'],
  'picrights-proces': ['peut-on-ignorer-picrights', 'negocier-picrights', 'jurisprudence-picrights'],
  'peut-on-ignorer-picrights': ['picrights-proces', 'faut-il-payer-picrights', 'negocier-picrights'],
  'picrights-arnaque': ['avis-sur-picrights', 'faut-il-payer-picrights', 'picrights-proces'],
  'courrier-picrights-que-faire': ['faut-il-payer-picrights', 'picrights-europe-gmbh', 'contester-picrights'],
  'contester-picrights': ['originalite-photographie', 'montant-reclame-picrights', 'jurisprudence-picrights'],
  'originalite-photographie': ['contester-picrights', 'jurisprudence-picrights', 'faut-il-payer-picrights'],
  'montant-reclame-picrights': ['contester-picrights', 'jurisprudence-picrights', 'negocier-picrights'],
  'negocier-picrights': ['faut-il-payer-picrights', 'montant-reclame-picrights', 'peut-on-ignorer-picrights'],
}

export const relatedOf = (slug) => (RELATED[slug] || []).map(bySlug).filter(Boolean)
