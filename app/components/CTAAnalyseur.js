import Link from 'next/link'

// Encadré CTA vers l'analyseur d'originalité, réutilisable par agence.
// Placé juste avant le CTA « Confier mon dossier » des sous-pages.
export default function CTAAnalyseur({ agence = 'PicRights' }) {
  return (
    <div style={{ background: '#f1eee7', borderLeft: '4px solid #2f5d8a', borderRadius: 6, padding: '16px 20px', margin: '20px 0' }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>Vous avez reçu un courrier {agence} ?</div>
      <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.6, margin: '0 0 12px' }}>Déposez gratuitement la photographie reprochée. Notre moteur identifie en 30 secondes les éléments susceptibles de remettre en cause son originalité.</p>
      <Link href="/litige-afp-picrights/#analyseur" style={{ display: 'inline-block', background: 'var(--navy)', color: 'white', fontWeight: 600, fontSize: 13, padding: '9px 18px', borderRadius: 8, textDecoration: 'none' }}>
        Analyser ma photographie gratuitement →
      </Link>
    </div>
  )
}
