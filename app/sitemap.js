export default function sitemap() {
  const base = 'https://lazaregue-avocats.fr'
  const now = new Date()
  return [
    // Consolidation PicRights : une seule page de contenu + l'action collective.
    { url: `${base}/litige-afp-picrights/`, lastModified: now, priority: 1.0 },
    { url: `${base}/action-collective/`, lastModified: now, priority: 0.8 },
    // Pages légales / conformité — conservées (obligation déontologique + licence images).
    { url: `${base}/mentions-legales/`, lastModified: now, priority: 0.3 },
    { url: `${base}/confidentialite/`, lastModified: now, priority: 0.3 },
    { url: `${base}/licence-images/`, lastModified: now, priority: 0.3 },
  ]
}
