import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid var(--border)', background: 'var(--surface)', marginTop: 48 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Lazarègue Avocats</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>Barreau de Paris · Réclamations photographiques</div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>Secret professionnel garanti<br />Conforme CNB</div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Organismes</div>
          {[['PicRights', '/picrights'], ['Copytrack', '/copytrack'], ['Getty Images', '/getty-images'], ['Rights Control', '/rights-control']].map(([l, h]) => (
            <Link key={h} href={h} style={{ display: 'block', fontSize: 12, color: 'var(--muted)', marginBottom: 6, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Ressources</div>
          {[['Jurisprudence', '/jurisprudence'], ['Cas pratiques', '/cas-pratiques'], ['Notre méthode', '/notre-methode']].map(([l, h]) => (
            <Link key={h} href={h} style={{ display: 'block', fontSize: 12, color: 'var(--muted)', marginBottom: 6, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Légal</div>
          {[['Confidentialité & RGPD', '/confidentialite/'], ['Contact', 'mailto:contact@lazaregue-avocats.fr']].map(([l, h]) => (
            <Link key={h} href={h} style={{ display: 'block', fontSize: 12, color: 'var(--muted)', marginBottom: 6, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '0.5px solid var(--border)', padding: '12px 24px', textAlign: 'center', fontSize: 11, color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Lazarègue Avocats · Tous droits réservés
      </div>
    </footer>
  )
}
