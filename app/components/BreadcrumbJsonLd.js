// Fil d'Ariane structuré (schema.org BreadcrumbList) pour le SEO.
// Google l'utilise pour afficher le chemin dans les résultats de recherche.
export default function BreadcrumbJsonLd({ items }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
