import Link from 'next/link'

const cols = [
  {
    titre: 'Guides',
    liens: [
      ['PicRights', '/litige-afp-picrights/'],
      ['AFP', '/picrights-afp/'],
      ['Reuters', '/reuters/'],
      ['Getty Images', '/getty-images/'],
      ['Copytrack', '/copytrack/'],
      ['Toutes les agences', '/agences/'],
    ],
  },
  {
    titre: 'Ressources',
    liens: [
      ['Jurisprudence', '/jurisprudence/'],
      ['Cas pratiques', '/cas-pratiques/'],
      ['Notre méthode', '/notre-methode/'],
      ['À propos', '/a-propos/'],
      ['Confier mon dossier', '/litige-afp-picrights/confier/'],
    ],
  },
  {
    titre: 'Légal',
    liens: [
      ['Mentions légales', '/mentions-legales/'],
      ['Confidentialité & RGPD', '/confidentialite/'],
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '0.5px solid var(--border)', background: 'var(--surface)', marginTop: 48 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Lazarègue Avocats</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55, marginBottom: 10 }}>Maître Alexandre Lazarègue<br />Avocat au Barreau de Paris</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55, marginBottom: 10 }}>18 rue de Tilsitt, 75017 Paris<br />Défense contre les réclamations photographiques</div>
          <a href="tel:+33181706200" style={{ fontSize: 11, color: 'var(--muted)', textDecoration: 'none' }}>01 81 70 62 00</a>
        </div>
        {cols.map((col) => (
          <div key={col.titre}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>{col.titre}</div>
            {col.liens.map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', fontSize: 12, color: 'var(--muted)', marginBottom: 6, textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '0.5px solid var(--border)', padding: '14px 24px', textAlign: 'center', fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>
        © {year} Maître Alexandre Lazarègue — Avocat au Barreau de Paris · SIREN 823 894 142 · Secret professionnel garanti
      </div>
    </footer>
  )
}
