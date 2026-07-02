// Pile de « dossiers » stylisés qui défilent en boucle dans le hero.
//
// IMPORTANT : contenu 100 % fictif. Aucun nom, référence ni montant réel de
// dossier client (secret professionnel / RGPD). Les zones sensibles sont
// représentées par des barres caviardées, comme sur une pièce anonymisée.
//
// Animation en CSS pur (pas de JavaScript) : le rendu fonctionne même sans
// hydratation, donc à travers le proxy Netlify -> Vercel. Respecte aussi
// prefers-reduced-motion.

const docs = [
  { wordmark: 'AFP', mark: '#A32D2D', sub: 'Agence France-Presse', kind: 'MISE EN DEMEURE', stamp: 'AFP' },
  { wordmark: 'RIGHTS CONTROL', mark: '#111', sub: 'Réclamation droits photo', kind: 'USAGE NON AUTORISÉ', stamp: 'RC' },
  { wordmark: 'PicRights', mark: '#A32D2D', sub: 'Copyright enforcement', kind: 'RÉCLAMATION', stamp: 'PicRights' },
  { wordmark: 'COPYTRACK', mark: '#0C447C', sub: 'Demande de règlement', kind: 'DEMANDE DE PAIEMENT', stamp: 'Copytrack' },
  { wordmark: 'gettyimages', mark: '#111', sub: 'Licence non autorisée', kind: 'MISE EN DEMEURE', stamp: 'Getty' },
]

const bar = (w, dark) => ({
  height: dark ? 8 : 6,
  borderRadius: 2,
  background: dark ? '#2c2c2a' : '#d8d6cc',
  width: w,
})

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
  2.5%  { opacity: 1; transform: translateY(0)    scale(1);   }
  ${(100 / total).toFixed(2)}% { opacity: 1; transform: translateY(0) scale(1); }
  ${(100 / total + 2.5).toFixed(2)}% { opacity: 0; transform: translateY(-12px) scale(.96); }
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
      <div style={{ position: 'relative', width: 260, height: 196 }}>
        {/* Effet "pile de dossiers" derrière */}
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(10px, 10px) rotate(2deg)', background: '#efece2', borderRadius: 6, opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(5px, 5px) rotate(1deg)', background: '#f5f2e9', borderRadius: 6, opacity: 0.7 }} />

        {docs.map((d, i) => (
          <div
            key={d.wordmark}
            className="hero-doc-card"
            style={{ animationDelay: `${(i * cycle) / total}s` }}
          >
            <div style={{ position: 'absolute', inset: 0, background: '#fdfcf9', borderRadius: 6, padding: '13px 16px', boxShadow: '0 6px 18px rgba(0,0,0,0.28)', overflow: 'hidden' }}>
              {/* En-tête agence */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 9 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.02em', color: d.mark, lineHeight: 1 }}>{d.wordmark}</div>
                  <div style={{ fontSize: 8, color: '#8a887e', marginTop: 3 }}>{d.sub}</div>
                </div>
                {/* Tampon */}
                <div style={{ fontSize: 8, fontWeight: 700, color: '#A32D2D', border: '1.4px solid #A32D2D', borderRadius: 3, padding: '2px 6px', transform: 'rotate(8deg)', opacity: 0.75, whiteSpace: 'nowrap' }}>{d.stamp}</div>
              </div>

              <div style={{ height: 1, background: '#e7e4d8', margin: '2px 0 9px' }} />

              {/* Nature du courrier */}
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', color: '#5e2424', marginBottom: 9 }}>{d.kind}</div>

              {/* Corps caviardé */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={bar('58%')} />
                <div style={bar('80%')} />
                <div style={bar('45%', true)} />
                <div style={bar('72%')} />
              </div>

              {/* Ligne indemnité (montant caviardé) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 11 }}>
                <div style={{ fontSize: 8, color: '#8a887e' }}>Indemnité réclamée</div>
                <div style={{ height: 11, width: 58, borderRadius: 2, background: '#2c2c2a' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
