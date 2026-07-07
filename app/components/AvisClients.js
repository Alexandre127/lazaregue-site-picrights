// Avis clients — uniquement des avis relatifs aux litiges de droit d'auteur /
// contrefaçon de photographie (cohérents avec le sujet du site).
// Affichés en CONTENU, sans balisage AggregateRating/Review (règle Google :
// pas de balisage d'avis auto-hébergés sur sa propre fiche).
const REVIEWS = [
  { name: 'Saher', text: 'J’ai eu une excellente expérience avec ce cabinet dans un litige de contrefaçon de photographie. Grâce à leur maîtrise du sujet, ils ont pu éteindre le contentieux rapidement. Les arguments solides et bien développés ont conduit la partie adverse à mettre un terme à ses revendications. Je recommande vivement pour leur professionnalisme et leur réactivité.' },
  { name: 'GARDEFA (association)', text: 'J’ai fait appel à ce cabinet spécialisé en propriété intellectuelle pour défendre mes droits d’auteur dans un litige complexe. Leur expertise approfondie du droit d’auteur et des arguments juridiques solides ont permis de mettre un terme aux revendications de la partie adverse. Résultat : une solution favorable obtenue rapidement.' },
  { name: 'Cadmium Candy', text: 'Maître Lazarègue nous a aidés dans un conflit avec une agence de presse que je ne citerai pas mais que tout le monde connaît. Je recommande vivement pour toute assistance juridique. Sa compétence est exemplaire. Merci pour votre excellent travail.' },
]

export default function AvisClients({ title = 'Avis clients' }) {
  return (
    <div style={{ padding: '22px 0', borderBottom: '0.5px solid var(--border)' }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
        <span style={{ fontSize: 18, color: '#E8A33D', letterSpacing: 1 }}>★★★★★</span>
        <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 600 }}>5,0 / 5</span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>· 17 avis Google</span>
      </div>
      {REVIEWS.map((r) => (
        <div key={r.name} style={{ background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '14px 16px', marginBottom: 10 }}>
          <div style={{ fontSize: 13, color: '#E8A33D', letterSpacing: 1, marginBottom: 6 }}>★★★★★</div>
          <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.6, margin: '0 0 8px', fontStyle: 'italic' }}>« {r.text} »</p>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{r.name} — avis Google</div>
        </div>
      ))}
      <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>Avis clients relatifs à des litiges de droit d’auteur, vérifiables sur notre fiche Google.</div>
    </div>
  )
}
