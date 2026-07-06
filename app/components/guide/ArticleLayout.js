import Link from 'next/link'
import CtaBanner from '../CtaBanner'
import Blocks from './Blocks'
import { ARTICLES, bySlug, href } from './picrightsArticles'

// Gabarit d'un article approfondi du guide PicRights.
// Rappelle toujours la page pilier (« Consulter le guide complet »).
export default function ArticleLayout({ slug, lead, blocks, faq }) {
  const meta = bySlug(slug)
  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 4)
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' } }

  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}
          <Link href="/picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guide PicRights</Link>{' → '}{meta?.crumb}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Article du guide PicRights</div>
        <h1 style={{ fontSize: 25, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 14 }}>{meta?.title}</h1>
        {lead && <p style={{ fontSize: 16, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 8 }}>{lead}</p>}
      </div>

      <div style={{ padding: '18px 0' }}>
        <Blocks items={blocks} />
      </div>

      {faq && faq.length > 0 && (
        <div style={{ padding: '8px 0 20px', borderTop: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '14px 0 8px' }}>Questions fréquentes</div>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
              <summary style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                {q}<span style={{ color: 'var(--muted)' }}>↓</span>
              </summary>
              <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.7, paddingBottom: 14 }}>{a}</p>
            </details>
          ))}
        </div>
      )}

      {/* Renvoi vers la page pilier */}
      <div style={{ background: 'var(--navy)', borderRadius: 12, padding: '24px 26px', margin: '20px 0 28px' }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: 'white', marginBottom: 8, lineHeight: 1.5 }}>Vous souhaitez comprendre l’ensemble du fonctionnement de PicRights ?</div>
        <Link href="/picrights/" style={{ color: '#7ec8e3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>→ Consulter le guide complet PicRights</Link>
      </div>

      <CtaBanner title="Vous avez reçu un courrier PicRights ?" subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />

      <div style={{ padding: '4px 0 24px' }}>
        <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>Poursuivre le guide</div>
        {others.map((a) => (
          <Link key={a.slug} href={href(a.slug)} style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '11px 14px', marginBottom: 8, textDecoration: 'none' }}>
            <span style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)' }}>{a.title}</span>
            <span style={{ color: 'var(--blue)', fontSize: 12 }}> →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
