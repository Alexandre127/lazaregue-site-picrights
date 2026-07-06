// Rendu d'un contenu d'article à partir d'un tableau de blocs simples.
// Formats : ['h2', txt] ['h3', txt] ['lead', txt] ['p', txt]
//           ['ul', [items]] ['note', txt] ['key', txt] ['steps', [[titre, txt], ...]]
//           ['link', [href, label]]
// Le gras **texte** est interprété dans les paragraphes et items.
import Link from 'next/link'

function inline(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} style={{ fontWeight: 600, color: 'var(--text)' }}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  )
}

export default function Blocks({ items }) {
  return (
    <>
      {items.map((b, i) => {
        const [type, val] = b
        switch (type) {
          case 'h2':
            return <h2 key={i} style={{ fontSize: 19, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, margin: '28px 0 10px' }}>{val}</h2>
          case 'h3':
            return <h3 key={i} style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '20px 0 8px' }}>{val}</h3>
          case 'lead':
            return <p key={i} style={{ fontSize: 16, color: 'var(--secondary)', lineHeight: 1.7, margin: '0 0 16px' }}>{inline(val)}</p>
          case 'p':
            return <p key={i} style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75, margin: '0 0 13px' }}>{inline(val)}</p>
          case 'ul':
            return (
              <ul key={i} style={{ margin: '0 0 14px', padding: 0, listStyle: 'none' }}>
                {val.map((li, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--secondary)', lineHeight: 1.6, marginBottom: 7 }}>
                    <span style={{ color: 'var(--blue)', flexShrink: 0 }}>→</span><span>{inline(li)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'steps':
            return (
              <div key={i} style={{ margin: '0 0 16px' }}>
                {val.map(([t, d], j) => (
                  <div key={j} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--navy)', color: '#fff', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{j + 1}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{t}</div>
                      <div style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.6 }}>{inline(d)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )
          case 'note':
            return <div key={i} style={{ background: 'var(--amber-soft)', border: '0.5px solid #EF9F27', borderRadius: 8, padding: '12px 14px', margin: '4px 0 16px', fontSize: 13.5, color: 'var(--amber)', lineHeight: 1.6 }}>{inline(val)}</div>
          case 'key':
            return <div key={i} style={{ background: '#F8FBFE', border: '1px solid var(--blue)', borderRadius: 8, padding: '14px 16px', margin: '4px 0 16px', fontSize: 14.5, color: 'var(--navy)', fontWeight: 500, lineHeight: 1.6 }}>{inline(val)}</div>
          case 'link':
            return <p key={i} style={{ margin: '2px 0 16px' }}><Link href={val[0]} style={{ color: 'var(--blue)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>{val[1]} →</Link></p>
          default:
            return null
        }
      })}
    </>
  )
}
