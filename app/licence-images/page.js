import Link from 'next/link'

export const metadata = {
  title: 'Licence et conditions d’utilisation des illustrations',
  description: 'Conditions d’utilisation des illustrations publiées sur le site du cabinet Lazarègue Avocats — dont certaines ont été générées à l’aide d’outils d’intelligence artificielle. Reproduction soumise à autorisation écrite préalable.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/licence-images/' },
  robots: { index: true, follow: true },
}

export default function LicenceImages() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '40px 24px 8px' },
    h2: { fontSize: 17, fontWeight: 600, color: 'var(--text)', margin: '26px 0 8px', lineHeight: 1.3 },
    p: { fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75, marginBottom: 12 },
  }
  return (
    <div style={s.page}>
      <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
        <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → Licence des illustrations'}
      </nav>

      <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 10 }}>Licence et conditions d’utilisation des illustrations</h1>
      <p style={{ fontSize: 15.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 6 }}>
        La présente page précise les conditions d’utilisation des illustrations publiées sur le site <strong>lazaregue-avocats.fr</strong>.
      </p>

      <h2 style={s.h2}>Origine des illustrations</h2>
      <p style={s.p}>
        Certaines illustrations figurant sur ce site ont été <strong>générées à l’aide d’outils d’intelligence artificielle</strong>, notamment Gemini, pour le compte du cabinet Lazarègue Avocats. Elles sont publiées à des fins purement <strong>illustratives et pédagogiques</strong>, afin d’accompagner les contenus éditoriaux du cabinet.
      </p>

      <h2 style={s.h2}>Utilisation réservée</h2>
      <p style={s.p}>
        Toute <strong>reproduction, diffusion, adaptation, modification ou réutilisation</strong> de ces illustrations, en tout ou en partie, sur quelque support que ce soit, est <strong>interdite sans autorisation écrite préalable</strong> du cabinet.
      </p>
      <p style={s.p}>
        Aucune licence d’exploitation n’est concédée par la simple mise en ligne de ces images : leur présence sur le site ne vaut pas autorisation d’usage par des tiers.
      </p>

      <h2 style={s.h2}>Demande d’autorisation ou de licence</h2>
      <p style={s.p}>
        Pour toute demande d’autorisation d’utilisation ou de licence, vous pouvez contacter le cabinet par courriel à l’adresse <a href="mailto:contact@lazaregue-avocats.fr" style={{ color: 'var(--blue)', textDecoration: 'none' }}>contact@lazaregue-avocats.fr</a> ou par téléphone au <a href="tel:+33181706200" style={{ color: 'var(--blue)', textDecoration: 'none' }}>01 81 70 62 00</a>. Chaque demande est examinée au cas par cas.
      </p>

      <h2 style={s.h2}>Portée de la présente page</h2>
      <p style={s.p}>
        La présente page a pour seul objet de préciser les conditions d’utilisation des illustrations du site et le point de contact du cabinet. Elle <strong>ne constitue pas une garantie générale</strong> quant au régime juridique ou à la protégeabilité, par le droit d’auteur ou tout autre droit, de chaque illustration prise individuellement. Elle ne constitue pas davantage une consultation juridique.
      </p>

      <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginTop: 24, paddingTop: 16, borderTop: '0.5px solid var(--border)' }}>
        © {new Date().getFullYear()} Maître Alexandre Lazarègue — Avocat au Barreau de Paris · 18 rue de Tilsitt, 75017 Paris.
      </p>
    </div>
  )
}
