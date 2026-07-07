// Index des articles du cluster PicRights AFP (URLs en /picrights-afp/<slug>/).
export const ARTICLES = [
  { slug: 'faut-il-payer', crumb: 'Faut-il payer', title: 'PicRights AFP : faut-il payer ? Ce qu’il faut vérifier avant' },
  { slug: 'originalite', crumb: 'Originalité', title: 'PicRights AFP : une photographie est-elle automatiquement protégée ?' },
  { slug: 'jurisprudence', crumb: 'Jurisprudence', title: 'Jurisprudence PicRights AFP : décisions 2025-2026 analysées' },
  { slug: 'proces', crumb: 'Procès', title: 'PicRights AFP procès : risquez-vous vraiment une assignation ?' },
  { slug: 'ignorer', crumb: 'Ignorer', title: 'PicRights AFP : peut-on ignorer la mise en demeure ?' },
  { slug: 'calcul-indemnites', crumb: 'Le calcul', title: 'PicRights AFP : comment sont calculées les sommes réclamées ?' },
]

export const bySlug = (slug) => ARTICLES.find((a) => a.slug === slug)
export const href = (slug) => `/picrights-afp/${slug}/`

export const RELATED = {
  'faut-il-payer': ['originalite', 'calcul-indemnites', 'proces'],
  'originalite': ['jurisprudence', 'faut-il-payer', 'proces'],
  'jurisprudence': ['originalite', 'proces', 'calcul-indemnites'],
  'proces': ['ignorer', 'jurisprudence', 'faut-il-payer'],
  'ignorer': ['proces', 'faut-il-payer', 'jurisprudence'],
  'calcul-indemnites': ['faut-il-payer', 'jurisprudence', 'originalite'],
}

export const relatedOf = (slug) => (RELATED[slug] || []).map(bySlug).filter(Boolean)
