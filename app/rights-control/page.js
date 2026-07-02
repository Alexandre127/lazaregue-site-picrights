import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Rights Control : mise en demeure — guide et conseils',
  description: 'Vous avez reçu un courrier Rights Control ? Avocat spécialisé en contentieux photographiques. Forfait 200 € HT — prise en charge sous 48h.',
}

export default function RightsControl() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Rights Control
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>Rights Control : mise en demeure photographique</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>Rights Control est une agence de gestion de droits photographiques. Ses réclamations suivent la même logique que PicRights et Copytrack — et les mêmes arguments juridiques peuvent s'appliquer.</p>
        <CtaBanner />
      </div>
      <div style={{ padding: '24px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/picrights" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide PicRights</Link>
        <Link href="/copytrack" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide Copytrack</Link>
        <Link href="/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Confier mon dossier</Link>
      </div>
    </div>
  )
}
