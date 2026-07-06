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
