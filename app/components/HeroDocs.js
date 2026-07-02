// Pile de dossiers réels (scans de pièces reçues par les clients) qui défilent
// en boucle dans le hero.
//
// Confidentialité : ces scans sont fournis anonymisés — le destinataire (client)
// est masqué. Ne visualisent que les agences adverses (AFP, PicRights, Lagardère…),
// ce qui est l'objet du site. Ajouter ici uniquement des pièces validées.
//
// Animation en CSS pur (pas de JavaScript) : rendu OK même sans hydratation,
// donc à travers le proxy Netlify -> Vercel. Respecte prefers-reduced-motion.
// Les images sont servies depuis /dossiers/ (proxifié vers Vercel côté Netlify).

const docs = [
  { src: '/dossiers/picrights-afp.jpg', alt: 'Mise en demeure PicRights au nom de l’AFP (destinataire masqué)' },
  { src: '/dossiers/picrights-lagardere.jpg', alt: 'Mise en demeure PicRights au nom de Lagardère (destinataire masqué)' },
  { src: '/dossiers/accord-afp.jpg', alt: 'Accord transactionnel avec l’Agence France-Presse (informations masquées)' },
  { src: '/dossiers/attestation-afp.jpg', alt: 'Attestation de titularité de droits de l’AFP' },
]

export default function HeroDocs() {
  const total = docs.length
  const cycle = total * 3.4 // ~3,4 s par document

  return (
    <div style={{ marginTop: 20 }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes heroDocCycle {
  0%    { opacity: 0; transform: translateY(12px) scale(.96); }
  3%    { opacity: 1; transform: translateY(0)    scale(1);   }
  ${(100 / total).toFixed(2)}% { opacity: 1; transform: translateY(0) scale(1); }
  ${(100 / total + 3).toFixed(2)}% { opacity: 0; transform: translateY(-12px) scale(.96); }
  100%  { opacity: 0; }
}
.hero-doc-card {
  position: absolute; inset: 0;
  opacity: 0;
  animation: heroDocCycle ${cycle}s infinite ease-in-out;
  will-change: opacity, transform;
}
@media (prefers-reduced-motion: reduce) {
  .hero-doc-card { animation: none; opacity: 0; }
  .hero-doc-card:first-child { opacity: 1; }
}
`,
        }}
      />

      {/* Zone d'affichage : les cartes sont empilées en absolu */}
      <div style={{ position: 'relative', width: 250, height: 320 }}>
        {/* Effet "pile de dossiers" derrière */}
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(11px, 11px) rotate(2deg)', background: '#efece2', borderRadius: 6, opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(6px, 6px) rotate(1deg)', background: '#f5f2e9', borderRadius: 6, opacity: 0.7 }} />

        {docs.map((d, i) => (
          <div
            key={d.src}
            className="hero-doc-card"
            style={{ animationDelay: `${(i * cycle) / total}s` }}
          >
            <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 6, boxShadow: '0 8px 22px rgba(0,0,0,0.32)', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.src}
                alt={d.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
              {/* Léger dégradé bas pour l'intégration visuelle */}
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
