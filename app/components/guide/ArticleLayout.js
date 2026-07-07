import Link from 'next/link'
import CtaBanner from '../CtaBanner'
import BreadcrumbJsonLd from '../BreadcrumbJsonLd'
import JsonLd, { faqPage } from '../JsonLd'
import Blocks from './Blocks'
import { ARTICLES, bySlug, href, relatedOf } from './picrightsArticles'

const BASE = 'https://lazaregue-avocats.fr'
const MAJ = 'juillet 2026'

// Gabarit d'un article approfondi du guide PicRights.
// Rappelle toujours la page pilier (« Consulter le guide complet »).
export default function ArticleLayout({ slug, lead, blocks, faq, extra }) {
  const meta = bySlug(slug)
  const related = relatedOf(slug).filter((a) => a.slug !== slug)
  const relatedSlugs = new Set(related.map((a) => a.slug))
  const rest = ARTICLES.filter((a) => a.slug !== slug && !relatedSlugs.has(a.slug))
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' } }

  return (
    <div style={s.page}>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: `${BASE}/litige-afp-picrights/` },
        { name: 'Guide PicRights', url: `${BASE}/picrights/` },
        { name: meta?.crumb || meta?.title, url: `${BASE}/picrights/${slug}/` },
      ]} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: meta?.title,
        description: lead,
        author: { '@type': 'Person', name: 'Alexandre Lazarègue', jobTitle: 'Avocat au Barreau de Paris' },
        publisher: { '@type': 'Organization', name: 'Lazarègue Avocats', url: BASE },
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
        mainEntityOfPage: `${BASE}/picrights/${slug}/`,
      }} />
      {faq && faq.length > 0 && <JsonLd data={faqPage(faq)} />}
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}
          <Link href="/picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guide PicRights</Link>{' → '}{meta?.crumb}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Article du guide PicRights</div>
        <h1 style={{ fontSize: 25, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>{meta?.title}</h1>
        <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 14 }}>Par <strong style={{ color: 'var(--secondary)', fontWeight: 600 }}>Maître Alexandre Lazarègue</strong>, avocat au Barreau de Paris · Mis à jour en {MAJ}</div>
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

      {extra}

      {/* Encadré analyse — porte d'entrée vers l'outil interactif */}
      <div style={{ background: '#F8FBFE', border: '1px solid var(--blue)', borderRadius: 12, padding: '18px 20px', margin: '20px 0' }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>Vous avez reçu un courrier PicRights ?</div>
        <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.6, margin: '0 0 12px' }}>Déposez la photographie et la réclamation : notre analyseur réalise une première lecture juridique de votre dossier avant toute décision.</p>
        <Link href="/litige-afp-picrights/#analyseur" style={{ display: 'inline-block', background: 'var(--navy)', color: 'white', fontWeight: 600, fontSize: 13, padding: '9px 18px', borderRadius: 8, textDecoration: 'none' }}>
          Analyser mon dossier gratuitement →
        </Link>
      </div>

      {/* Renvoi vers la page pilier */}
      <div style={{ background: 'var(--navy)', borderRadius: 12, padding: '24px 26px', margin: '0 0 28px' }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: 'white', marginBottom: 8, lineHeight: 1.5 }}>Vous souhaitez comprendre l’ensemble du fonctionnement de PicRights ?</div>
        <Link href="/picrights/" style={{ color: '#7ec8e3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>→ Consulter le guide complet PicRights</Link>
      </div>

      <CtaBanner title="Faire examiner votre réclamation par un avocat" subtitle="Chaque dossier examiné personnellement — forfait 200 € HT, prise en charge sous 48h." />

      {related.length > 0 && (
        <div style={{ padding: '4px 0 8px' }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>Sur le même sujet</div>
          {related.map((a) => (
            <Link key={a.slug} href={href(a.slug)} style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '11px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <span style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)' }}>{a.title}</span>
              <span style={{ color: 'var(--blue)', fontSize: 12 }}> →</span>
            </Link>
          ))}
        </div>
      )}

      <div style={{ padding: '12px 0 28px', borderTop: '0.5px solid var(--border)' }}>
        <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '14px 0 10px' }}>Tous les articles du guide PicRights</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Link href="/picrights/" style={{ fontSize: 12, fontWeight: 500, color: 'var(--blue-mid)', background: 'var(--blue-light)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide complet PicRights</Link>
          {rest.map((a) => (
            <Link key={a.slug} href={href(a.slug)} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{a.crumb}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
