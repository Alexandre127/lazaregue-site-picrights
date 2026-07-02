export default function sitemap() {
  const base = 'https://www.lazaregue-avocats.fr'
  const now = new Date()
  const urls = [
    { url: `${base}/litige-afp-picrights/`, lastModified: now, priority: 1.0 },
    { url: `${base}/picrights/`, lastModified: now, priority: 0.9 },
    { url: `${base}/picrights/faut-il-payer/`, lastModified: now, priority: 0.8 },
    { url: `${base}/picrights/comment-reagir/`, lastModified: now, priority: 0.8 },
    { url: `${base}/picrights/jurisprudence/`, lastModified: now, priority: 0.7 },
    { url: `${base}/picrights/cas-pratiques/`, lastModified: now, priority: 0.7 },
    { url: `${base}/copytrack/`, lastModified: now, priority: 0.9 },
    { url: `${base}/getty-images/`, lastModified: now, priority: 0.8 },
    { url: `${base}/rights-control/`, lastModified: now, priority: 0.7 },
    { url: `${base}/jurisprudence/`, lastModified: now, priority: 0.8 },
    { url: `${base}/cas-pratiques/`, lastModified: now, priority: 0.8 },
    { url: `${base}/notre-methode/`, lastModified: now, priority: 0.7 },
  ]
  return urls
}
