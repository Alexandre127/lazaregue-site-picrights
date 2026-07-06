import Link from 'next/link'

export const metadata = {
  title: 'Confidentialité & protection des données (RGPD)',
  description: 'Politique de confidentialité du cabinet Lazarègue Avocats : finalités, sous-traitants, non-conservation des images et documents analysés, droits RGPD.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/confidentialite/' },
  robots: { index: true, follow: true },
}

export default function Confidentialite() {
  const s = {
    page: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
    h2: { fontSize: 17, fontWeight: 600, color: 'var(--text)', margin: '26px 0 8px' },
    p: { fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, margin: '0 0 10px' },
    li: { fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 6 },
  }
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}Confidentialité
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 8 }}>Confidentialité & protection des données</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Conforme au RGPD (règlement UE 2016/679) et au secret professionnel de l&apos;avocat.</p>
      </div>

      <h2 style={s.h2}>Responsable de traitement</h2>
      <p style={s.p}>Lazarègue Avocats, avocat au Barreau de Paris — 18 rue de Tilsitt, 75017 Paris. Contact : <a href="mailto:contact@lazaregue-avocats.fr" style={{ color: 'var(--blue)' }}>contact@lazaregue-avocats.fr</a>.</p>

      <h2 style={s.h2}>Analyseur d&apos;originalité (dépôt d&apos;une photographie)</h2>
      <p style={s.p}>La photographie que vous déposez est transmise, uniquement pour la durée de l&apos;analyse, à notre sous-traitant technique <strong>Anthropic (modèle « Claude »)</strong>, aux seules fins de produire une analyse préliminaire automatisée. <strong>L&apos;image n&apos;est pas conservée</strong> : elle est traitée en mémoire puis supprimée, et n&apos;est associée à aucun compte. Aucune inscription n&apos;est requise. Cette analyse ne constitue pas une consultation juridique.</p>

      <h2 style={s.h2}>Devis instantané (dépôt d&apos;un courrier)</h2>
      <p style={s.p}>Le document déposé (mise en demeure, courrier ou assignation) est analysé de la même manière par Anthropic, pour en extraire <strong>uniquement</strong> les informations nécessaires au devis (nature du document, organisme demandeur, nombre de photographies, montant réclamé). Les données personnelles du destinataire ne sont pas restituées. <strong>Le document n&apos;est pas conservé.</strong></p>

      <h2 style={s.h2}>Confier un dossier (dépôt & paiement)</h2>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={s.li}>Vos données d&apos;identité, coordonnées et les pièces déposées sont utilisées exclusivement pour le traitement de votre dossier et stockées de manière <strong>chiffrée</strong> (Vercel Blob).</li>
        <li style={s.li}>Le paiement est traité par <strong>Stripe</strong> ; le cabinet ne conserve <strong>aucune donnée bancaire</strong>.</li>
        <li style={s.li}>Les e-mails (confirmation, facture, notification) sont acheminés par <strong>Resend</strong>.</li>
      </ul>

      <h2 style={s.h2}>Transmission d&apos;une assignation</h2>
      <p style={s.p}>Le document et vos coordonnées sont transmis directement par e-mail chiffré à un avocat du cabinet, aux seules fins d&apos;établir un devis. Ils ne sont pas stockés sur le site.</p>

      <h2 style={s.h2}>Sous-traitants</h2>
      <ul style={{ paddingLeft: 18, margin: '0 0 10px' }}>
        <li style={s.li}><strong>Anthropic</strong> — analyse automatisée des images et documents (États-Unis ; transfert encadré par les garanties appropriées).</li>
        <li style={s.li}><strong>Stripe</strong> — paiement sécurisé.</li>
        <li style={s.li}><strong>Resend</strong> — envoi des e-mails (Union européenne).</li>
        <li style={s.li}><strong>Vercel</strong> — hébergement et stockage chiffré des pièces.</li>
      </ul>

      <h2 style={s.h2}>Durée de conservation</h2>
      <p style={s.p}>Les images et documents soumis aux outils d&apos;analyse ne sont pas conservés. Les pièces d&apos;un dossier confié sont conservées le temps de la mission puis selon les obligations légales et déontologiques applicables à l&apos;avocat.</p>

      <h2 style={s.h2}>Vos droits</h2>
      <p style={s.p}>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition sur vos données. Pour l&apos;exercer, écrivez à <a href="mailto:contact@lazaregue-avocats.fr" style={{ color: 'var(--blue)' }}>contact@lazaregue-avocats.fr</a>. Vous pouvez également saisir la CNIL. Les échanges avec le cabinet sont couverts par le secret professionnel.</p>

      <div style={{ padding: '24px 0 8px' }}>
        <Link href="/litige-afp-picrights/" style={{ fontSize: 12, color: 'var(--blue)', textDecoration: 'none' }}>← Retour à l&apos;accueil</Link>
      </div>
    </div>
  )
}
