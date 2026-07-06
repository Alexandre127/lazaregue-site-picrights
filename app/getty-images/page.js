import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Getty Images : mise en demeure, faut-il payer ? Guide complet',
  description: 'Vous avez reçu un courrier Getty Images ? Que faire, doit-on payer ? Avocat spécialisé en contentieux photographiques — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/getty-images/' },
}

export default function GettyImages() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Getty Images
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Guide complet</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>Getty Images : vous avez reçu un courrier.<br />Que faire ?</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>Getty Images est l'une des plus grandes banques d'images au monde. Ses réclamations peuvent atteindre plusieurs milliers d'euros. Voici ce que vous devez savoir avant de répondre.</p>
        <CtaBanner title="Vous avez reçu un courrier Getty Images ?" subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />
      </div>

      <div style={s.block}>
        <div style={s.label}>Getty Images en France</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Des réclamations directes ou via des cabinets mandataires</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7 }}>Getty Images peut agir directement ou mandater des cabinets d'avocats pour recouvrer les droits. Les montants réclamés sont généralement plus élevés que ceux de PicRights ou Copytrack, et peuvent atteindre 2 000 à 5 000 € par image.</p>
      </div>

      <CtaBanner />

      <div style={{ padding: '24px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/picrights" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide PicRights</Link>
        <Link href="/copytrack" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide Copytrack</Link>
        <Link href="/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
      </div>
    </div>
  )
}
