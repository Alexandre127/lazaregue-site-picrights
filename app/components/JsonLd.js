// Injecte un bloc de données structurées schema.org (JSON-LD).
// Passer un objet JS (ou un tableau d'objets) déjà conforme schema.org.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper : construit un FAQPage à partir d'un tableau [ [question, réponse], ... ]
export function faqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
