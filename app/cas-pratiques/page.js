import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Cas pratiques — mises en demeure photographiques traitées',
  description: 'Dossiers réels traités par Lazarègue Avocats : PicRights, Copytrack, Getty Images. Contexte, réclamation, arguments, suivi.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/cas-pratiques/' },
}

const cas = [
  { tag: 'PicRights', titre: 'PicRights réclamait 980 € pour une photographie de produit utilisée sur un site e-commerce.', detail: 'Photo de catalogue · 2023', href: '/cas-pratiques/picrights-photo-produit-980' },
  { tag: 'Copytrack', titre: 'Copytrack réclamait 1 400 € pour une photographie immobilière publiée sur un portail d\'annonces.', detail: 'Photo immobilière · 2023', href: '/cas-pratiques/copytrack-photo-immobiliere-1400' },
  { tag: 'Getty Images', titre: 'Getty Images réclamait 2 200 € pour une photographie de ville illustrant un article de blog.', detail: 'Photo touristique · 2024', href: '/cas-pratiques/getty-images-photo-ville-2200' },
]

export default function CasPratiques() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 24px' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Cas pratiques
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Cas pratiques</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>Dossiers anonymisés traités par le cabinet. Chaque cas présente le contexte, la réclamation reçue, les questions juridiques et la stratégie retenue.</p>
        {cas.map((c, i) => (
          <Link key={i} id={c.tag.toLowerCase().replace(/ /g, '-')} href={c.href} style={{ display: 'block', scrollMarginTop: 70, background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '16px 18px', marginBottom: 12, textDecoration: 'none' }}>
            <span style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '2px 8px', borderRadius: 10, marginBottom: 8 }}>{c.tag}</span>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 6, lineHeight: 1.4 }}>{c.titre}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
              <span>{c.detail}</span><span style={{ color: 'var(--blue)' }}>Lire le cas →</span>
            </div>
          </Link>
        ))}
      </div>
      <CtaBanner />
      <div style={{ padding: '16px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
        <Link href="/picrights" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide PicRights</Link>
        <Link href="/notre-methode" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Notre méthode</Link>
      </div>
    </div>
  )
}
