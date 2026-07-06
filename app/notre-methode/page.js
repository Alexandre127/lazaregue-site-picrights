import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'

export const metadata = {
  title: 'Notre méthode — comment nous traitons une mise en demeure photographique',
  description: 'Découvrez comment Lazarègue Avocats analyse et traite les mises en demeure de PicRights, Copytrack et Getty Images. Méthode exclusive, traitement personnalisé.',
}

export default function NotreMethode() {
  const s = { page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' }, block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' }, label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 } }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Notre méthode
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Notre méthode</h1>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 8 }}>Depuis plusieurs années, nous intervenons exclusivement sur les mises en demeure photographiques. Voici comment nous traitons chaque dossier — sans révéler nos arguments détaillés.</p>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Chaque dossier est traité personnellement par un avocat. Aucun courrier standard n'est envoyé.</p>
      </div>

      <div id="grille" style={{ ...s.block, scrollMarginTop: 70 }}>
        <div style={s.label}>Ce que nous vérifions systématiquement</div>
        {[
          ['1. L\'originalité de la photographie', 'Toutes les photographies ne sont pas automatiquement protégées par le droit d\'auteur. Nous examinons si la photographie en cause révèle des choix créatifs personnels identifiables de son auteur — ou si elle est essentiellement technique et documentaire.'],
          ['2. Les droits invoqués', 'Nous vérifions que le demandeur détient réellement les droits sur la photographie en cause, et que ces droits couvrent l\'utilisation qui vous est reprochée.'],
          ['3. Le mandat du demandeur', 'Lorsque la réclamation émane d\'une société tierce (PicRights, Copytrack, etc.) agissant au nom d\'une agence, nous vérifions la réalité et l\'étendue du mandat.'],
          ['4. La cohérence du montant réclamé', 'Nous vérifions que le montant réclamé est conforme aux grilles tarifaires usuelles et à ce que les tribunaux accordent habituellement dans des situations similaires.'],
        ].map(([titre, desc], i) => (
          <div key={i} style={{ background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '14px 16px', marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }}>{titre}</div>
            <div style={{ fontSize: 13, color: 'var(--secondary)', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      <div style={s.block}>
        <div style={s.label}>La logique de notre analyse</div>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 12 }}>Notre intervention ne consiste pas à contester systématiquement. Elle consiste à examiner si la réclamation est fondée, puis à définir la réponse la plus avantageuse pour vous.</p>
        <p style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7 }}>Selon les conclusions de cet examen, la réponse peut consister en une contestation de la réclamation, une demande de justificatifs, une négociation du montant, ou toute autre réponse juridiquement pertinente.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Ce que vous ne verrez jamais</div>
        {['Un courrier standard envoyé sans analyse personnalisée de votre dossier', 'Une promesse de résultat garantie — chaque dossier est différent', 'Des frais supplémentaires engagés sans votre accord'].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#5e2424', background: '#FCEBEB', borderRadius: 8, padding: '8px 12px', marginBottom: 8 }}>
            <span style={{ color: '#A32D2D' }}>✕</span>{t}
          </div>
        ))}
      </div>

      <CtaBanner title="Confier votre dossier à notre cabinet" subtitle="Plus de 300 mises en demeure traitées. Forfait 200 € HT — prise en charge sous 48h." />

      <div style={{ padding: '16px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/jurisprudence" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Jurisprudence</Link>
        <Link href="/cas-pratiques" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Cas pratiques</Link>
        <Link href="/picrights" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Guide PicRights</Link>
      </div>
    </div>
  )
}
