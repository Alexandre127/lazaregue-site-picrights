import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Copytrack : mise en demeure, faut-il payer ? Guide complet',
  description: 'Vous avez reçu un courrier Copytrack ? Découvrez qui est Copytrack, si vous devez payer et comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/copytrack/' },
}

export default function Copytrack() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Copytrack
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Guide complet</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>Copytrack : vous avez reçu un courrier.<br />Que faire ?</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>Copytrack GmbH est une société allemande spécialisée dans la détection et le recouvrement de droits photographiques. Voici ce que vous devez savoir avant de répondre ou de payer.</p>
        <CtaBanner title="Vous avez reçu un courrier Copytrack ?" subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />
      </div>

      <div style={s.block}>
        <div style={s.label}>Qui est Copytrack ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Une plateforme allemande de gestion de droits photographiques</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7 }}>Copytrack utilise la reconnaissance d'image par intelligence artificielle pour détecter les utilisations non autorisées de photographies sur internet. Lorsqu'une correspondance est identifiée, elle contacte le responsable du site pour réclamer une indemnisation au nom du photographe ou de l'agence.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Faut-il payer Copytrack ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Pas sans vérification juridique préalable</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>Avant tout paiement, plusieurs points doivent être vérifiés :</p>
        {['L\'originalité réelle de la photographie en cause', 'La validité du mandat de Copytrack pour agir au nom du photographe', 'La cohérence du montant réclamé', 'L\'absence de prescription de la créance'].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: 8 }}>
            <span style={{ color: 'var(--blue)' }}>→</span>{t}
          </div>
        ))}
      </div>

      <CtaBanner />

      <div style={{ padding: '24px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/picrights" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide PicRights</Link>
        <Link href="/getty-images" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide Getty Images</Link>
        <Link href="/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
        <Link href="/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Confier mon dossier</Link>
      </div>
    </div>
  )
}
