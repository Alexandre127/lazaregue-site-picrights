'use client'
import { useState } from 'react'
import { COMPARAISONS } from './comparaisons-data'

export default function ComparaisonsOriginalite() {
  const [zoom, setZoom] = useState(null)
  return (
    <div style={{ padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>Le critère décisif</div>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', margin: '0 0 10px', lineHeight: 1.3 }}>Œuvre originale ou simple photographie ? Cinq comparaisons</h2>
      <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 16 }}>
        Tout se joue sur l’<strong>originalité</strong> : une photographie n’est protégée que si elle porte l’empreinte de la personnalité de son auteur. À gauche, des choix créatifs assumés ; à droite, une image visuellement proche mais purement fonctionnelle — souvent non protégeable. Cliquez pour agrandir.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {COMPARAISONS.map((c) => (
          <figure key={c.src} style={{ margin: 0 }}>
            <button onClick={() => setZoom(c)} style={{ display: 'block', width: '100%', padding: 0, border: '0.5px solid var(--border)', borderRadius: 8, overflow: 'hidden', cursor: 'zoom-in', background: 'none' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.alt} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </button>
            <figcaption style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>{c.legende} — <span style={{ fontStyle: 'italic' }}>illustration générée</span></figcaption>
          </figure>
        ))}
      </div>

      {zoom && (
        <div onClick={() => setZoom(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(12,18,32,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, overflow: 'auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom.src} alt={zoom.alt} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '100%', maxHeight: '92vh', height: 'auto', borderRadius: 6, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
        </div>
      )}
    </div>
  )
}
