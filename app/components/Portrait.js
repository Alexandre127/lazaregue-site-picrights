'use client'
import { useState } from 'react'

// Affiche la photo si elle existe, sinon un monogramme élégant (repli).
export default function Portrait({ src, alt, initials = 'AL' }) {
  const [err, setErr] = useState(false)
  const box = { width: 132, height: 132, borderRadius: '50%', flexShrink: 0, objectFit: 'cover', border: '1px solid var(--border)', background: 'var(--navy)' }
  if (err) {
    return (
      <div style={{ ...box, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 40, fontWeight: 500, letterSpacing: 1 }}>{initials}</div>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={() => setErr(true)} style={box} />
}
