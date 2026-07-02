import Link from 'next/link'
import ConfierTunnel from '../../components/ConfierTunnel'

export const metadata = {
  title: 'Confier mon dossier — Prise en charge de votre mise en demeure',
  description: 'Déposez votre mise en demeure PicRights, Copytrack ou Getty Images, signez la convention et réglez le forfait 200 € HT. Prise en charge par un avocat sous 48h.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/litige-afp-picrights/confier/' },
  robots: { index: false, follow: true },
}

export default function ConfierPage() {
  return (
    <>
      <div style={{ borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '18px 24px 0' }}>
          <Link href="/litige-afp-picrights/" style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'none' }}>← Retour</Link>
        </div>
      </div>
      <ConfierTunnel />
    </>
  )
}
