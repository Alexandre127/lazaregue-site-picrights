/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export const metadata = {
  title: 'Mentions légales — Lazarègue Avocats',
  description: 'Mentions légales du site lazaregue-avocats.fr : éditeur, directeur de la publication, hébergement, profession réglementée, assurance, médiation de la consommation.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/mentions-legales/' },
}

export default function MentionsLegales() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' },
    label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 },
    p: { fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, margin: '0 0 12px' },
    li: { display: 'flex', gap: 10, fontSize: 14, color: 'var(--secondary)', lineHeight: 1.6, marginBottom: 6 },
  }
  const dt = (k, v) => (
    <div style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--secondary)', lineHeight: 1.6, marginBottom: 6 }}>
      <span style={{ minWidth: 190, color: 'var(--muted)', flexShrink: 0 }}>{k}</span>
      <span style={{ color: 'var(--text)' }}>{v}</span>
    </div>
  )

  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → Mentions légales
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>Mentions légales</h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 8 }}>Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les informations suivantes sont portées à la connaissance des utilisateurs du site <strong>lazaregue-avocats.fr</strong>.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Éditeur du site</div>
        <p style={s.p}>Le site est édité par <strong>Maître Alexandre Lazarègue</strong>, avocat inscrit au Barreau de Paris, exerçant à titre individuel (entrepreneur individuel).</p>
        {dt('Nom commercial', 'Lazarègue Avocats')}
        {dt('Adresse professionnelle', '18 rue de Tilsitt, 75017 Paris, France')}
        {dt('SIREN', '823 894 142')}
        {dt('SIRET (siège)', '823 894 142 00038')}
        {dt('Code APE', '6910Z — Activités juridiques')}
        {dt('TVA intracommunautaire', 'FR24 823 894 142')}
        {dt('Courriel', 'contact@lazaregue-avocats.fr')}
      </div>

      <div style={s.block}>
        <div style={s.label}>Directeur de la publication</div>
        <p style={s.p}>Le directeur de la publication est <strong>Maître Alexandre Lazarègue</strong>, en sa qualité d'éditeur du site.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Hébergement</div>
        <p style={s.p}>Le site et ses pages de service sont hébergés par :</p>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>Netlify, Inc.</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis — netlify.com</div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>Vercel Inc.</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com</div>
        </div>
      </div>

      <div style={s.block}>
        <div style={s.label}>Profession réglementée</div>
        <p style={s.p}>Maître Alexandre Lazarègue exerce la profession d'avocat, réglementée, sous le titre d'<strong>avocat</strong> délivré en France. Il est inscrit au <strong>Barreau de Paris</strong>.</p>
        <p style={s.p}>Il est soumis aux règles professionnelles de la profession, notamment au Règlement Intérieur National (RIN) et au Règlement Intérieur du Barreau de Paris (RIBP), consultables sur <span style={{ color: 'var(--text)' }}>cnb.avocat.fr</span> et <span style={{ color: 'var(--text)' }}>avocatparis.org</span>.</p>
        <p style={{ ...s.p, marginBottom: 0 }}>Autorité de surveillance : Ordre des avocats au Barreau de Paris — 11 place Dauphine, 75001 Paris.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Assurance responsabilité civile professionnelle</div>
        <p style={{ ...s.p, marginBottom: 0 }}>En sa qualité d'avocat au Barreau de Paris, Maître Alexandre Lazarègue est couvert par l'assurance de responsabilité civile professionnelle et la garantie financière souscrites collectivement par l'Ordre des avocats de Paris, conformément à la loi n° 71-1130 du 31 décembre 1971. La couverture géographique correspond au territoire français.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Médiation de la consommation</div>
        <p style={{ ...s.p, marginBottom: 0 }}>Conformément aux articles L.611-1 et suivants du Code de la consommation, tout client consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant au cabinet : <strong>Médiateur de la consommation de la profession d'avocat</strong>, 180 boulevard Haussmann, 75008 Paris — mediateur-consommation-avocat.fr. Le recours à la médiation suppose qu'une réclamation écrite préalable ait été adressée au cabinet.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Propriété intellectuelle</div>
        <p style={{ ...s.p, marginBottom: 0 }}>L'ensemble des contenus du site (textes, structure, éléments graphiques, la méthodologie d'analyse dite « Grille Lazarègue » et les outils d'analyse) est protégé au titre du droit d'auteur et du droit des bases de données. Toute reproduction, représentation ou réutilisation, totale ou partielle, sans autorisation écrite préalable, est interdite et constitue une contrefaçon.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Données personnelles</div>
        <p style={{ ...s.p, marginBottom: 0 }}>Le traitement des données personnelles (finalités, non-conservation des documents et images analysés, sous-traitants, durée, droits) est détaillé dans notre <Link href="/confidentialite/" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>politique de confidentialité & RGPD</Link>.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Paiement en ligne</div>
        <p style={{ ...s.p, marginBottom: 0 }}>Les paiements des honoraires effectués en ligne sont traités de manière sécurisée par le prestataire Stripe. Aucune donnée bancaire n'est conservée par le cabinet. Une convention d'honoraires et une facture sont systématiquement établies.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Contact</div>
        <p style={{ ...s.p, marginBottom: 0 }}>Pour toute question relative au site ou au cabinet : <strong>contact@lazaregue-avocats.fr</strong> — 18 rue de Tilsitt, 75017 Paris.</p>
      </div>

      <div style={{ padding: '20px 0 32px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link href="/confidentialite/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Confidentialité & RGPD</Link>
        <Link href="/litige-afp-picrights/" style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>Accueil</Link>
      </div>
    </div>
  )
}
