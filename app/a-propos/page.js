/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'
import Portrait from '../components/Portrait'
import AvisClients from '../components/AvisClients'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import JsonLd from '../components/JsonLd'

export const metadata = {
  title: 'À propos — Maître Alexandre Lazarègue, avocat au Barreau de Paris',
  description: 'Maître Alexandre Lazarègue, avocat au Barreau de Paris (toque 1798), fondateur du cabinet Lazarègue Avocats en 2016. Cabinet dédié au droit des nouvelles technologies et aux réclamations photographiques.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/a-propos/' },
}

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexandre Lazarègue',
  jobTitle: 'Avocat au Barreau de Paris',
  url: 'https://lazaregue-avocats.fr/a-propos/',
  image: 'https://lazaregue-avocats.fr/dossiers/alexandre-lazaregue.jpg',
  telephone: '+33181706200',
  email: 'contact@lazaregue-avocats.fr',
  worksFor: { '@type': 'Organization', name: 'Lazarègue Avocats', url: 'https://lazaregue-avocats.fr' },
  address: { '@type': 'PostalAddress', streetAddress: '18 rue de Tilsitt', postalCode: '75017', addressLocality: 'Paris', addressCountry: 'FR' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Titre professionnel',
    name: 'Avocat au Barreau de Paris (toque 1798)',
  },
  knowsAbout: ['Droit des nouvelles technologies', 'Droit d\'auteur photographique', 'Propriété intellectuelle', 'Protection des données (RGPD)'],
}

export default function APropos() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' },
    label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 },
    p: { fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75, margin: '0 0 13px' },
  }
  return (
    <div style={s.page}>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: 'https://lazaregue-avocats.fr/litige-afp-picrights/' },
        { name: 'À propos', url: 'https://lazaregue-avocats.fr/a-propos/' },
      ]} />
      <JsonLd data={person} />

      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link> → À propos
        </nav>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
          <Portrait src="/dossiers/alexandre-lazaregue.jpg" alt="Maître Alexandre Lazarègue, avocat au Barreau de Paris" initials="AL" />
          <div style={{ minWidth: 240, flex: 1 }}>
            <h1 style={{ fontSize: 25, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 6 }}>Maître Alexandre Lazarègue</h1>
            <div style={{ fontSize: 14, color: 'var(--blue-mid)', marginBottom: 6 }}>Avocat au Barreau de Paris — toque 1798</div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>Fondateur du cabinet Lazarègue Avocats (2016)</div>
          </div>
        </div>
      </div>

      <div style={s.block}>
        <div style={s.label}>Le cabinet</div>
        <p style={s.p}>Alexandre Lazarègue est avocat au Barreau de Paris et fondateur du cabinet <strong>Lazarègue Avocats</strong>, créé en 2016. Le cabinet est dédié au <strong>droit des nouvelles technologies</strong> : droit d'auteur numérique, propriété intellectuelle, protection des données personnelles et contentieux liés à Internet.</p>
        <p style={{ ...s.p, marginBottom: 0 }}>Depuis près de dix ans, Maître Lazarègue traite les <strong>réclamations liées aux droits d'auteur photographiques</strong> — les courriers de PicRights, de l'AFP, de Reuters, de Getty Images, de Copytrack et des autres agences — pour les entreprises, associations, collectivités et éditeurs de sites internet.</p>
      </div>

      <div style={s.block}>
        <div style={s.label}>Une pratique spécialisée</div>
        <p style={s.p}>Ces dossiers combinent plusieurs domaines : droit d'auteur, preuve numérique, procédure civile et évaluation du préjudice. Cette combinaison explique que deux réclamations apparemment identiques puissent conduire à des issues très différentes.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {['Droit d\'auteur photographique', 'Propriété intellectuelle', 'Droit des nouvelles technologies', 'RGPD & données personnelles'].map((t) => (
            <span key={t} style={{ fontSize: 12, fontWeight: 500, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '4px 10px', borderRadius: 20 }}>{t}</span>
          ))}
        </div>
      </div>

      <AvisClients />

      <div style={s.block}>
        <div style={s.label}>Contact</div>
        <div style={{ fontSize: 14, color: 'var(--secondary)', lineHeight: 1.9 }}>
          <div>Téléphone : <a href="tel:+33181706200" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>01 81 70 62 00</a></div>
          <div>Courriel : <strong style={{ color: 'var(--text)' }}>contact@lazaregue-avocats.fr</strong></div>
          <div>Cabinet : 18 rue de Tilsitt, 75017 Paris</div>
        </div>
      </div>

      <CtaBanner title="Confier votre réclamation à un avocat spécialisé" subtitle="Chaque dossier examiné personnellement — forfait 200 € HT, prise en charge sous 48h." />

      <div style={{ padding: '4px 0 32px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {[['Notre méthode', '/notre-methode/'], ['Guide PicRights', '/picrights/'], ['Mentions légales', '/mentions-legales/'], ['Accueil', '/litige-afp-picrights/']].map(([l, h]) => (
          <Link key={h} href={h} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{l}</Link>
        ))}
      </div>
    </div>
  )
}
