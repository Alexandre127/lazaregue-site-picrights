import Link from 'next/link'
import CtaBanner from './CtaBanner'

const DEFAULT_CHECKS = [
  'L\'originalité réelle de la photographie en cause, au sens du droit d\'auteur',
  'La titularité effective des droits et la validité du mandat de celui qui réclame',
  'La cohérence et la justification du montant réclamé',
  'L\'absence de prescription de la créance',
]

// Gabarit réutilisable pour les pages « agence » du menu.
export default function AgencyPage({ name, kind, intro, whoTitle, whoText, checks = DEFAULT_CHECKS }) {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' },
    label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 },
  }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>
          {' → '}
          <Link href="/agences/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Agences</Link>
          {' → '}{name}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>{kind}</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>{name} : vous avez reçu un courrier.<br />Que faire ?</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>{intro}</p>
        <CtaBanner title={`Vous avez reçu un courrier ${name} ?`} subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />
      </div>

      <div style={s.block}>
        <div style={s.label}>Qui est {name} ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>{whoTitle}</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7 }}>{whoText}</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Faut-il payer {name} ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Pas sans vérification juridique préalable</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>Avant tout paiement, plusieurs points doivent être vérifiés :</p>
        {checks.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: 8 }}>
            <span style={{ color: 'var(--blue)' }}>→</span>{t}
          </div>
        ))}
      </div>

      <CtaBanner />

      <div style={{ padding: '24px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/agences/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Toutes les agences</Link>
        <Link href="/jurisprudence/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
        <Link href="/litige-afp-picrights/confier/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Confier mon dossier</Link>
      </div>
    </div>
  )
}
