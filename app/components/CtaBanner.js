import Link from 'next/link'

export default function CtaBanner({ title = "Vous avez reçu une mise en demeure ?", subtitle = "Nous prenons en charge votre dossier sous 48h — forfait 200 € HT." }) {
  return (
    <div style={{ background: 'var(--navy)', borderRadius: 12, padding: '28px 32px', margin: '32px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 500, color: 'white', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{subtitle}</div>
      </div>
      <Link href="/litige-afp-picrights/confier/" style={{ flexShrink: 0, background: 'white', color: 'var(--navy)', fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>
        Confier mon dossier →
      </Link>
    </div>
  )
}
