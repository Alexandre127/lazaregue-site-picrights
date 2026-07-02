import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'PicRights : mise en demeure, faut-il payer ? Guide complet',
  description: 'Vous avez reçu un courrier PicRights ? Découvrez qui est PicRights, pourquoi ils vous écrivent, si vous devez payer, et comment réagir. Avocat spécialisé.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/' },
}

export default function PicRights() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }

  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → PicRights
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 12 }}>Guide complet</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>PicRights : vous avez reçu un courrier.<br />Que faire ?</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 24 }}>PicRights Europe GmbH envoie chaque année des milliers de mises en demeure en France au nom de l'AFP et d'autres agences photographiques. Voici ce que vous devez savoir avant de répondre.</p>
        <CtaBanner title="Vous avez reçu un courrier PicRights ?" subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />
      </div>

      <div style={s.block}>
        <div style={s.label}>Qui est PicRights ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>PicRights Europe GmbH : une société de recouvrement de droits</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>PicRights est une société basée en Suisse, spécialisée dans la détection et le recouvrement de droits photographiques pour le compte d'agences comme l'AFP, AP, Reuters et d'autres partenaires. Elle utilise des logiciels de reconnaissance d'images pour scanner les sites internet et identifier les utilisations non autorisées.</p>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7 }}>Lorsqu'elle détecte une utilisation, elle adresse une mise en demeure au propriétaire du site avec une demande d'indemnisation. Ces demandes peuvent aller de quelques centaines à plusieurs milliers d'euros.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Faut-il payer PicRights ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Non, pas sans vérification préalable</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>Payer sans analyse juridique revient à reconnaître une créance dont le bien-fondé n'a pas été vérifié. Or, plusieurs éléments peuvent remettre en cause le fondement de la réclamation :</p>
        {['L\'originalité de la photographie en cause (toutes les photos ne sont pas automatiquement protégées)', 'La réalité des droits invoqués par PicRights sur cette photographie', 'Le mandat donné par l\'agence à PicRights pour agir en son nom', 'La cohérence du montant réclamé avec les grilles tarifaires usuelles'].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: 8 }}>
            <span style={{ color: 'var(--blue)', flexShrink: 0 }}>→</span>{t}
          </div>
        ))}
      </div>

      <div style={s.block}>
        <div style={s.label}>PicRights : arnaque ou réclamation légitime ?</div>
        <h2 style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Une pratique légale, mais des réclamations souvent contestables</h2>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>PicRights n'est pas une arnaque au sens juridique du terme : la société agit légalement dans le cadre du droit d'auteur. En revanche, les réclamations qu'elle adresse sont souvent discutables car :</p>
        {['Les photographies concernées sont fréquemment des images techniques ou documentaires dont l\'originalité est discutable', 'Les montants réclamés peuvent excéder ce que les tribunaux accordent habituellement', 'Le mandat de PicRights pour agir au nom de l\'AFP ou d\'autres agences peut être contesté'].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: 8 }}>
            <span style={{ color: 'var(--blue)', flexShrink: 0 }}>•</span>{t}
          </div>
        ))}
        <div style={{ background: 'var(--amber-soft)', border: '0.5px solid #EF9F27', borderRadius: 8, padding: '12px 14px', marginTop: 12, fontSize: 13, color: 'var(--amber)' }}>
          ⚠ Chaque dossier est différent. Seule une analyse juridique personnalisée permet de déterminer si et comment contester la réclamation.
        </div>
      </div>

      <div style={s.block}>
        <div style={s.label}>Erreurs à ne pas commettre</div>
        {['Payer immédiatement sans vérification', 'Répondre seul sans connaître les arguments juridiques', 'Ignorer la mise en demeure', 'Admettre avoir utilisé la photo sans y être obligé'].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#5e2424', background: '#FCEBEB', borderRadius: 8, padding: '8px 12px', marginBottom: 8 }}>
            <span style={{ color: '#A32D2D' }}>✕</span>{t}
          </div>
        ))}
      </div>

      <CtaBanner title="Nous connaissons PicRights et ses méthodes" subtitle="Plus de 300 dossiers traités. Chaque dossier examiné personnellement par un avocat." />

      <div style={s.block}>
        <div style={s.label}>Questions fréquentes sur PicRights</div>
        {[
          ['PicRights peut-il me poursuivre en justice ?', 'Oui, c\'est possible si la phase amiable échoue. Cependant, la procédure judiciaire reste l\'issue la moins fréquente, surtout face à une réponse juridique argumentée.'],
          ['Que se passe-t-il si je ne réponds pas ?', 'L\'absence de réponse peut faciliter une procédure judiciaire et être interprétée comme une reconnaissance implicite. Il est impératif de répondre.'],
          ['PicRights AFP : est-ce la même chose ?', 'PicRights agit souvent au nom de l\'AFP. Le courrier mentionne généralement l\'agence mandante. Les arguments juridiques applicables sont les mêmes.'],
        ].map(([q, a], i) => (
          <details key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
            <summary style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
              {q}<span style={{ color: 'var(--muted)' }}>↓</span>
            </summary>
            <p style={{ fontSize: 13, color: 'var(--secondary)', lineHeight: 1.65, paddingBottom: 14 }}>{a}</p>
          </details>
        ))}
      </div>

      <div style={s.block}>
        <div style={s.label}>Jurisprudence PicRights</div>
        <Link href="/picrights/jurisprudence" style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '12px 14px', textDecoration: 'none', marginBottom: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)' }}>Décisions de justice impliquant PicRights</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>CA Paris · TJ Paris · Cass. 1re civ. — originalité, mandat, montant →</div>
        </Link>
        <Link href="/picrights/cas-pratiques" style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '12px 14px', textDecoration: 'none' }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)' }}>Cas pratiques PicRights</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Dossiers réels traités par le cabinet →</div>
        </Link>
      </div>

      <div style={{ padding: '24px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/copytrack" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide Copytrack</Link>
        <Link href="/getty-images" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide Getty Images</Link>
        <Link href="/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
        <Link href="/notre-methode" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Notre méthode</Link>
      </div>
    </div>
  )
}
