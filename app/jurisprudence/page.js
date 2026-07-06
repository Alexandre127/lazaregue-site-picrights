import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Jurisprudence — originalité photographique, droit d\'auteur',
  description: 'Bibliothèque de jurisprudence commentée sur l\'originalité photographique, le mandat, le préjudice. Décisions CA Paris, Cass. 1re civ., TJ Paris.',
}

const decisions = [
  { ref: 'Cass. 1re civ.', date: '10 juil. 2014', titre: 'Critère de l\'originalité photographique', resume: 'La protection suppose des choix esthétiques révélant la personnalité de l\'auteur — non la simple maîtrise technique.', tag: 'Originalité refusée', cat: 'originalite' },
  { ref: 'CA Paris', date: '17 sept. 2019', titre: 'Photo de produit — absence de créativité', resume: 'Photographie à fins commerciales sans mise en scène particulière : protection du CPI non applicable.', tag: 'Originalité refusée', cat: 'originalite' },
  { ref: 'CA Paris', date: '2 févr. 2018', titre: 'Photographie de mode — originalité retenue', resume: 'Mise en scène délibérée et choix d\'éclairage documentés : protection accordée malgré la contestation.', tag: 'Originalité retenue', cat: 'originalite' },
]

export default function Jurisprudence() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 24px' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Jurisprudence
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Jurisprudence commentée</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65 }}>Bibliothèque de décisions de justice sur l'originalité photographique, le mandat, le préjudice et la prescription. Classées par thème.</p>
      </div>

      <div id="originalite" style={{ scrollMarginTop: 70, display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {['Originalité retenue', 'Originalité refusée', 'Mandat', 'Préjudice', 'Montant', 'Prescription'].map(t => (
          <span key={t} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 20, padding: '5px 12px', cursor: 'pointer' }}>{t}</span>
        ))}
      </div>

      {decisions.map((d, i) => (
        <div key={i} style={{ background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '16px 18px', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0 }}>
              <span style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 8px', borderRadius: 10, marginBottom: 4, whiteSpace: 'nowrap' }}>{d.ref}</span>
              <span style={{ fontSize: 11, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{d.date}</span>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 5 }}>{d.titre}</div>
              <div style={{ fontSize: 12, color: 'var(--secondary)', lineHeight: 1.5, marginBottom: 8 }}>{d.resume}</div>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 10, background: d.tag.includes('refusée') || d.tag.includes('rejetée') ? 'var(--green-soft)' : '#FCEBEB', color: d.tag.includes('refusée') || d.tag.includes('rejetée') ? 'var(--green)' : '#A32D2D' }}>{d.tag}</span>
            </div>
          </div>
        </div>
      ))}

      <div style={{ background: 'var(--amber-soft)', border: '0.5px solid #EF9F27', borderRadius: 8, padding: '12px 14px', margin: '16px 0', fontSize: 13, color: 'var(--amber)' }}>
        Cette bibliothèque illustre la diversité des issues possibles. Chaque photographie doit être examinée individuellement — c'est l'objet de notre intervention.
      </div>

      <CtaBanner />

      <div style={{ padding: '16px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/picrights/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence PicRights</Link>
        <Link href="/cas-pratiques" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Cas pratiques</Link>
        <Link href="/notre-methode" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Notre méthode</Link>
      </div>
    </div>
  )
}
