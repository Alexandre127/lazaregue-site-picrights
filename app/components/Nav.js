'use client'
import Link from 'next/link'
import { useState } from 'react'

// Menu organisé selon l'intention de recherche du visiteur, pas selon nos contenus :
// comprendre (Guides) · voir les décisions (Jurisprudence) · voir des exemples
// (Cas pratiques) · comprendre notre différence (Notre méthode) · agir (Confier).
// Chaque lien pointe vers une destination réelle (page ou ancre existante).
const menu = [
  { label: 'Accueil', href: '/litige-afp-picrights/' },
  {
    label: 'Guides',
    children: [
      { label: 'PicRights', href: '/picrights/' },
      { label: 'AFP', href: '/picrights-afp/' },
      { label: 'Reuters', href: '/reuters/' },
      { label: 'Getty Images', href: '/getty-images/' },
      { label: 'Copytrack', href: '/copytrack/' },
      { label: 'Toutes les agences', href: '/agences/', divider: true },
    ],
  },
  {
    label: 'Jurisprudence',
    children: [
      { label: 'Toute la jurisprudence', href: '/jurisprudence/' },
      { label: 'Originalité des photographies', href: '/jurisprudence/#originalite' },
    ],
  },
  {
    label: 'Cas pratiques',
    children: [
      { label: 'Tous les dossiers', href: '/cas-pratiques/' },
      { label: 'PicRights', href: '/cas-pratiques/#picrights' },
      { label: 'Copytrack', href: '/cas-pratiques/#copytrack' },
      { label: 'Getty Images', href: '/cas-pratiques/#getty-images' },
    ],
  },
  {
    label: 'Notre méthode',
    children: [
      { label: 'Notre méthode', href: '/notre-methode/' },
      { label: 'Grille Lazarègue®', href: '/notre-methode/#grille' },
      { label: 'Analyse automatique', href: '/litige-afp-picrights/#analyseur' },
      { label: 'Questions fréquentes', href: '/litige-afp-picrights/#faq' },
    ],
  },
]

const linkStyle = { fontSize: 12, color: 'var(--muted)', padding: '6px 10px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hover, setHover] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  const close = () => { setMobileOpen(false); setMobileExpanded(null) }

  return (
    <nav style={{ background: 'var(--surface)', borderBottom: '0.5px solid var(--border)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <Link href="/litige-afp-picrights/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ display: 'block', width: 26, height: 24, overflow: 'hidden', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dossiers/logo.png" alt="Lazarègue Avocats" style={{ width: 64, marginLeft: -19, marginTop: -5, display: 'block', maxWidth: 'none' }} />
          </span>
          <div style={{ whiteSpace: 'nowrap', lineHeight: 1.15 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Lazarègue Avocats</div>
            <div style={{ fontSize: 9.5, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Barreau de Paris</div>
          </div>
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="desktop-nav">
          {menu.map(item => item.children ? (
            <div key={item.label} style={{ position: 'relative' }} onMouseEnter={() => setHover(item.label)} onMouseLeave={() => setHover(null)}>
              <button style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 5, color: hover === item.label ? 'var(--text)' : 'var(--muted)' }} aria-expanded={hover === item.label}>
                {item.label}<span style={{ fontSize: 7, opacity: 0.6 }}>▼</span>
              </button>
              {hover === item.label && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 8, padding: 6, minWidth: 220, boxShadow: '0 10px 28px rgba(0,0,0,0.12)', zIndex: 60 }}>
                  {item.children.map(c => (
                    <Link key={c.href} href={c.href} style={{ display: 'block', fontSize: 12.5, color: 'var(--text)', padding: '8px 10px', borderRadius: 6, textDecoration: 'none', borderTop: c.divider ? '0.5px solid var(--border)' : 'none', marginTop: c.divider ? 5 : 0, paddingTop: c.divider ? 12 : 8 }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} style={{ ...linkStyle, color: 'var(--muted)' }}>{item.label}</Link>
          ))}
          <Link href="/litige-afp-picrights/confier/" style={{ fontSize: 12, fontWeight: 600, color: 'white', background: 'var(--navy)', padding: '7px 14px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: 8 }}>
            Confier mon dossier
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }} className="burger" aria-label="Menu">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'var(--surface)', borderTop: '0.5px solid var(--border)', padding: '8px 24px 14px' }} className="mobile-menu">
          {menu.map(item => item.children ? (
            <div key={item.label}>
              <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', borderBottom: '0.5px solid var(--border)', padding: '12px 0', fontSize: 14, color: 'var(--text)', cursor: 'pointer', fontFamily: 'inherit' }}>
                {item.label}<span style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1 }}>{mobileExpanded === item.label ? '−' : '+'}</span>
              </button>
              {mobileExpanded === item.label && (
                <div style={{ padding: '4px 0 8px 12px', borderBottom: '0.5px solid var(--border)' }}>
                  {item.children.map(c => (
                    <Link key={c.href} href={c.href} onClick={close} style={{ display: 'block', fontSize: 13, color: 'var(--secondary)', padding: '8px 0', textDecoration: 'none' }}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} onClick={close} style={{ display: 'block', fontSize: 14, color: 'var(--text)', padding: '12px 0', borderBottom: '0.5px solid var(--border)', textDecoration: 'none' }}>{item.label}</Link>
          ))}
          <Link href="/litige-afp-picrights/confier/" onClick={close} style={{ display: 'block', marginTop: 14, textAlign: 'center', fontSize: 14, fontWeight: 600, color: 'white', background: 'var(--navy)', padding: '11px', borderRadius: 8, textDecoration: 'none' }}>
            Confier mon dossier
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
