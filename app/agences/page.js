import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Agences et sociétés de recouvrement photographique — Guides',
  description: 'PicRights, AFP, PA Images, Reuters, Associated Press, MaxPPP, Paris Match, Rights Control : qui réclame, faut-il payer, comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/agences/' },
}

const agences = [
  { name: 'PicRights', kind: 'Société de recouvrement', href: '/picrights/', desc: 'Détection par IA et recouvrement pour le compte d\'agences (AFP, AP, Reuters…).' },
  { name: 'Rights Control', kind: 'Société de recouvrement', href: '/rights-control/', desc: 'Recouvrement de droits photographiques pour le compte de titulaires.' },
  { name: 'AFP', kind: 'Agence de presse', href: '/picrights-afp/', desc: 'Agence France-Presse — photographies de presse réclamées via mandataires.' },
  { name: 'Reuters', kind: 'Agence de presse', href: '/reuters/', desc: 'Agence internationale — images très diffusées et fréquemment réclamées.' },
  { name: 'Associated Press (AP)', kind: 'Agence de presse', href: '/ap/', desc: 'Agence de presse américaine de référence.' },
  { name: 'PA Images', kind: 'Banque d\'images de presse', href: '/pa-images/', desc: 'Banque d\'images de la Press Association (Royaume-Uni).' },
  { name: 'MaxPPP', kind: 'Agence photographique', href: '/maxppp/', desc: 'Agence française de diffusion photographique.' },
  { name: 'Paris Match', kind: 'Fonds photographique', href: '/paris-match/', desc: 'Fonds photographique de presse magazine.' },
]

export default function Agences() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}Agences
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>Agences et sociétés de recouvrement</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>
          Vous avez reçu une réclamation pour une photographie ? Retrouvez ci-dessous les principaux organismes concernés. Dans tous les cas, nous prenons votre dossier en charge — forfait 200 € HT.
        </p>
        <CtaBanner />
      </div>

      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {agences.map((a) => (
          <Link key={a.name} href={a.href} style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '14px 16px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{a.name}</div>
              <div style={{ fontSize: 10, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>{a.kind}</div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--secondary)', marginTop: 5, lineHeight: 1.5 }}>{a.desc}</div>
            <div style={{ fontSize: 12, color: 'var(--blue)', marginTop: 6 }}>Lire le guide →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
