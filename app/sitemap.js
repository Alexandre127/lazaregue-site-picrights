import { ARTICLES } from './components/guide/picrightsArticles'

export default function sitemap() {
  const base = 'https://lazaregue-avocats.fr'
  const now = new Date()
  const urls = [
    { url: `${base}/litige-afp-picrights/`, lastModified: now, priority: 1.0 },
    { url: `${base}/agences/`, lastModified: now, priority: 0.9 },
    { url: `${base}/picrights/`, lastModified: now, priority: 0.9 },
    { url: `${base}/afp/`, lastModified: now, priority: 0.9 },
    { url: `${base}/reuters/`, lastModified: now, priority: 0.85 },
    { url: `${base}/ap/`, lastModified: now, priority: 0.85 },
    { url: `${base}/pa-images/`, lastModified: now, priority: 0.8 },
    { url: `${base}/maxppp/`, lastModified: now, priority: 0.8 },
    { url: `${base}/paris-match/`, lastModified: now, priority: 0.8 },
    ...ARTICLES.map((a) => ({ url: `${base}/picrights/${a.slug}/`, lastModified: now, priority: 0.75 })),
    { url: `${base}/copytrack/`, lastModified: now, priority: 0.9 },
    { url: `${base}/getty-images/`, lastModified: now, priority: 0.8 },
    { url: `${base}/rights-control/`, lastModified: now, priority: 0.7 },
    { url: `${base}/jurisprudence/`, lastModified: now, priority: 0.8 },
    { url: `${base}/cas-pratiques/`, lastModified: now, priority: 0.8 },
    { url: `${base}/notre-methode/`, lastModified: now, priority: 0.7 },
    { url: `${base}/a-propos/`, lastModified: now, priority: 0.6 },
    { url: `${base}/confidentialite/`, lastModified: now, priority: 0.4 },
    { url: `${base}/mentions-legales/`, lastModified: now, priority: 0.3 },
  ]
  return urls
}
