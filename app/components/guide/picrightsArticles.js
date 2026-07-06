// Index des articles du cluster PicRights. La page pilier résume chaque thème
// et renvoie vers l'article ; chaque article renvoie vers le pilier.
export const PILLAR = { href: '/picrights/', title: 'Guide complet PicRights' }

export const ARTICLES = [
  { slug: 'picrights-europe-gmbh', crumb: 'Qui est PicRights', title: 'PicRights Europe GmbH : qui est cette société et comment elle fonctionne' },
  { slug: 'courrier-picrights-que-faire', crumb: 'Courrier reçu', title: 'J’ai reçu un courrier PicRights : que faire ?' },
  { slug: 'faut-il-payer-picrights', crumb: 'Faut-il payer', title: 'Faut-il payer PicRights ?' },
  { slug: 'contester-picrights', crumb: 'Contester', title: 'Comment contester une réclamation PicRights : les moyens de défense' },
  { slug: 'originalite-photographie', crumb: 'Originalité', title: 'Quand une photographie est-elle réellement protégée par le droit d’auteur ?' },
  { slug: 'montant-reclame-picrights', crumb: 'Le montant', title: 'Comment est calculé le montant réclamé par PicRights ?' },
  { slug: 'peut-on-ignorer-picrights', crumb: 'Ignorer la demande', title: 'Peut-on ignorer une réclamation PicRights ?' },
  { slug: 'negocier-picrights', crumb: 'Négocier', title: 'Comment négocier avec PicRights ?' },
  { slug: 'jurisprudence-picrights', crumb: 'Jurisprudence', title: 'Les décisions de justice concernant PicRights' },
  { slug: 'picrights-afp', crumb: 'PicRights & AFP', title: 'PicRights et l’AFP : comment réagir ?' },
]

export const bySlug = (slug) => ARTICLES.find((a) => a.slug === slug)
export const href = (slug) => `/picrights/${slug}/`
