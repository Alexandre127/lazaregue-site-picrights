'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/picrights', label: 'PicRights' },
  { href: '/copytrack', label: 'Copytrack' },
  { href: '/getty-images', label: 'Getty Images' },
  { href: '/jurisprudence', label: 'Jurisprudence' },
  { href: '/cas-pratiques', label: 'Cas pratiques' },
  { href: '/notre-methode', label: 'Notre méthode' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ background: 'var(--surface)', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Lazarègue Avocats</div>
          <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Barreau de Paris</div>
        </div>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 12, color: 'var(--muted)', padding: '5px 10px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/#forfait" style={{ fontSize: 12, fontWeight: 600, color: 'white', background: 'var(--navy)', padding: '7px 14px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: 8 }}>
            Confier mon dossier
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }} className="burger" aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--surface)', borderTop: '0.5px solid var(--border)', padding: '12px 24px' }} className="mobile-menu">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontSize: 14, color: 'var(--text)', padding: '10px 0', borderBottom: '0.5px solid var(--border)', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/#forfait" onClick={() => setOpen(false)} style={{ display: 'block', marginTop: 12, textAlign: 'center', fontSize: 14, fontWeight: 600, color: 'white', background: 'var(--navy)', padding: '11px', borderRadius: 8, textDecoration: 'none' }}>
            Confier mon dossier
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
