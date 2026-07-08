'use client'
import { useEffect, useRef, useState } from 'react'

// Avatar auteur : affiche la photo si le fichier existe, sinon un monogramme « AL ».
// Détecte l'échec de chargement au montage (le 404 survient avant l'hydratation,
// donc onError seul ne suffit pas) pour ne jamais laisser d'image cassée.
export default function AuthorPhoto({ src = '/dossiers/photo-lazaregue.jpg', size = 56, alt = 'Alexandre Lazarègue', ring = 'rgba(255,255,255,0.18)', bg = 'var(--navy)' }) {
  const [broken, setBroken] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setBroken(true)
  }, [])

  const box = {
    width: size, height: size, borderRadius: '50%', flexShrink: 0,
    objectFit: 'cover', display: 'block', border: `1px solid ${ring}`,
  }
  if (broken) {
    return (
      <div style={{ ...box, background: bg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: Math.round(size * 0.34), fontWeight: 600 }}>
        AL
      </div>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={imgRef} src={src} alt={alt} style={box} onError={() => setBroken(true)} />
}
