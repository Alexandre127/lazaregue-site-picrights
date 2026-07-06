import { ImageResponse } from 'next/og'

// Image de partage social (Open Graph + Twitter) générée dynamiquement.
// S'applique à toutes les pages (fichier à la racine de app/).
export const alt = 'Lazarègue Avocats — Défense contre les réclamations photographiques'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#16233d', color: '#ffffff', padding: '70px 80px', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: 25, letterSpacing: 4, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>PicRights · AFP · Reuters · Getty · Copytrack</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.12 }}>Une mise en demeure pour une photographie ?</div>
          <div style={{ fontSize: 34, color: '#7ec8e3', marginTop: 20 }}>Avant de payer, vérifiez si elle est réellement protégée.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 26 }}>
          <div style={{ fontWeight: 700 }}>Lazarègue Avocats</div>
          <div style={{ color: 'rgba(255,255,255,0.6)' }}>Barreau de Paris · dès 200 € HT</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
