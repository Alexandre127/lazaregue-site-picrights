import Link from 'next/link'
import { HeroModules, SectionAssignation } from '../components/HeroAnalyseur'
import AuthorPhoto from '../components/AuthorPhoto'
import ExemplesCourriers from '../components/ExemplesCourriers'
import ComparaisonsOriginalite from '../components/ComparaisonsOriginalite'
import { COMPARAISONS } from '../components/comparaisons-data'
import JsonLd, { faqPage } from '../components/JsonLd'

const imageObjects = COMPARAISONS.map((c) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: `https://lazaregue-avocats.fr${c.src}`,
  caption: c.legende,
  creditText: 'Lazarègue Avocats — illustration générée',
  creator: { '@type': 'Organization', name: 'Lazarègue Avocats' },
  copyrightNotice: 'Illustration pédagogique, personnages fictifs',
}))

// Profils et publications de l'auteur — signal d'entité (E-E-A-T) pour Google et les LLM.
const authorSameAs = [
  'https://www.linkedin.com/in/alexandre-lazarègue',
  'https://consultation.avocat.fr/avocat-paris/alexandre-lazaregue-43609.html',
  'https://www.avocatparis.org/annuaire?page=0&result=30&nom=lazaregue',
  'https://www.village-justice.com/articles/images-droit-auteur-stop-aux-abus,33003.html',
  'https://www.village-justice.com/articles/non-une-photographie-est-pas-une-oeuvre-originale,38914.html',
  'https://www.lesechos.fr/idees-debats/cercle/opinion-images-et-droit-dauteur-stop-aux-abus-1147515',
]

const legalService = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'Attorney'],
  name: 'Lazarègue Avocats — Défense contre les réclamations photographiques',
  url: 'https://lazaregue-avocats.fr/litige-afp-picrights/',
  image: 'https://lazaregue-avocats.fr/dossiers/logo.png',
  description: 'Cabinet d\'avocats spécialisé dans la défense contre les réclamations photographiques (PicRights, AFP, Reuters, Getty Images, Copytrack, Rights Control).',
  areaServed: 'FR',
  serviceType: 'Droit de la propriété intellectuelle — photographies',
  priceRange: 'À partir de 200 € HT',
  address: { '@type': 'PostalAddress', streetAddress: '18 rue de Tilsitt', postalCode: '75017', addressLocality: 'Paris', addressCountry: 'FR' },
  knowsAbout: ['droit d\'auteur', 'propriété intellectuelle', 'photographie de presse', 'PicRights', 'AFP', 'Reuters', 'Getty Images', 'Copytrack', 'copyright trolling'],
  founder: {
    '@type': 'Person',
    name: 'Alexandre Lazarègue',
    jobTitle: 'Avocat au Barreau de Paris',
    url: 'https://lazaregue-avocats.fr/a-propos/',
    sameAs: authorSameAs,
  },
  email: 'contact@lazaregue-avocats.fr',
  telephone: '+33 1 81 70 62 00',
  openingHours: 'Mo-Fr 09:00-18:00',
  identifier: { '@type': 'PropertyValue', propertyID: 'SIREN', value: '823894142' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lazaregue-avocats.fr/' },
    { '@type': 'ListItem', position: 2, name: 'Mise en demeure PicRights, AFP, Reuters', item: 'https://lazaregue-avocats.fr/litige-afp-picrights/' },
  ],
}

const article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Courrier PicRights : faut-il payer ? Guide complet 2026',
  description: 'Vous avez reçu une mise en demeure PicRights, AFP, Reuters ou d\'une autre agence de presse ? Avant de payer, ce guide explique comment vérifier si la réclamation est juridiquement fondée.',
  author: { '@type': 'Person', name: 'Alexandre Lazarègue', url: 'https://lazaregue-avocats.fr/a-propos/', sameAs: authorSameAs },
  publisher: { '@type': 'Organization', name: 'Lazarègue Avocats', logo: { '@type': 'ImageObject', url: 'https://lazaregue-avocats.fr/dossiers/logo.png' } },
  datePublished: '2026-07-02',
  dateModified: '2026-07-08',
  mainEntityOfPage: 'https://lazaregue-avocats.fr/litige-afp-picrights/',
}

export const metadata = {
  title: 'Mise en demeure PicRights, AFP, Reuters, AP — Prise en charge par un avocat',
  description: 'Vous avez reçu une mise en demeure de PicRights, AFP, PA Images, Reuters, AP, MaxPPP, Paris Match ou Rights Control ? Avocat spécialisé. Examen complet et réponse sous 48h — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/litige-afp-picrights/' },
}

const faqItems = [
  { q: 'Est-ce que je dois payer maintenant ?', a: 'Non, rien ne vous oblige à payer dans l’immédiat. Une mise en demeure n’est pas une décision de justice : elle n’a de valeur que si la réclamation est juridiquement fondée. Tant que l’originalité de la photographie, la titularité des droits et la réalité du préjudice n’ont pas été vérifiées, payer revient à régler une somme peut-être non due. La première étape est la vérification, pas le paiement.' },
  { q: 'Vais-je devoir payer d\'autres honoraires ?', a: 'Non. La phase amiable est prise en charge pour un forfait unique de 200 € HT (jusqu’à 2 photographies), indépendant du montant réclamé. Aucun honoraire supplémentaire n’intervient sans votre accord écrit préalable. Si le dossier devait basculer en contentieux, un devis distinct vous serait soumis avant tout engagement.' },
  { q: 'Est-ce que je risque un procès ?', a: 'C’est possible, mais statistiquement rare. Ce type de réclamation repose sur le paiement amiable, pas sur le contentieux : très peu de dossiers aboutissent à une assignation. Le risque réel dépend de votre situation concrète — nombre de photographies, nature de votre activité, réponses déjà envoyées — ce qu’une vérification permet d’évaluer précisément.' },
  { q: 'Qu\'est-ce qu\'une photographie « originale » en droit ?', a: 'Une photographie n’est protégée par le droit d’auteur que si elle porte l’empreinte de la personnalité de son auteur — des choix créatifs libres de cadrage, de lumière, d’angle ou de mise en scène (CJUE, Painer, 1er décembre 2011). La seule maîtrise technique ne suffit pas. Un cliché « pris sur le vif », imposé par le lieu et le moment, est souvent contestable ; sans originalité, il n’existe aucun droit d’auteur à faire valoir.' },
  { q: 'Et si, après examen, la réclamation est fondée ?', a: 'Si la vérification confirme que la photographie est protégée, que les droits sont valablement détenus et que le préjudice est réel, une discussion amiable est engagée pour limiter le montant. C’est l’issue la moins fréquente, mais elle est traitée avec la même rigueur — l’objectif reste que vous ne payiez que ce qui est réellement dû.' },
  { q: 'Un cabinet d\'avocats a déjà pris le relais de PicRights ou de l\'AFP — est-ce trop tard ?', a: 'Non. L’intervention d’un avocat mandaté par le demandeur ne change pas la question de fond : la réclamation est-elle juridiquement fondée ? Un courrier d’avocat adverse se conteste comme une mise en demeure, sur les mêmes points — originalité, titularité, preuve, montant. Il n’est pas trop tard tant qu’aucune décision de justice n’a été rendue.' },
  { q: 'J\'ai reçu une assignation devant le tribunal judiciaire — que faire ?', a: 'Une assignation change tout. Elle impose de constituer avocat avant l’audience, dans des délais impératifs. Ne laissez pas passer le délai. Transmettez le document sans tarder pour un examen prioritaire et un devis de défense contentieuse sous 24 h — une situation distincte de la phase amiable.' },
  { q: 'PicRights est-elle une arnaque ?', a: 'Non, ces sociétés exercent légalement une activité de gestion de droits pour le compte d’agences. La vraie question n’est pas la légalité de leur existence, mais le bien-fondé de chaque réclamation prise individuellement. Beaucoup de demandes reposent sur des photographies dont l’originalité est discutable ou sur des preuves fragiles — d’où l’intérêt de vérifier plutôt que de présumer, dans un sens comme dans l’autre.' },
  { q: 'Qu\'est-ce que le copyright trolling ?', a: 'C’est l’envoi massif et automatisé de mises en demeure visant un paiement amiable rapide plutôt qu’une action en justice. Le modèle repose sur le volume et sur l’asymétrie d’information entre l’émetteur et un destinataire non-juriste. Le comprendre aide à réagir posément : une réclamation de masse ne préjuge jamais de l’issue d’un dossier examiné individuellement.' },
  { q: 'PicRights peut-elle me poursuivre si je n\'habite pas en France ?', a: 'La compétence juridictionnelle et le droit applicable dépendent de plusieurs facteurs — lieu du dommage, public visé par le site, domicile. Une réclamation transfrontalière soulève des questions supplémentaires que le demandeur doit précisément justifier. C’est un point à examiner au cas par cas, non à trancher d’avance.' },
  { q: 'Que faire si PicRights me réclame plus de 3 000 € ?', a: 'Un montant élevé n’est pas un montant justifié. En droit d’auteur, l’indemnisation répare un préjudice réel, qu’il appartient au demandeur de démontrer — le barème commercial d’une agence n’a pas force de loi. Les juridictions réduisent régulièrement les sommes insuffisamment étayées. Plus le montant est important, plus il mérite d’être vérifié.' },
  { q: 'Puis-je me défendre seul sans avocat ?', a: 'C’est juridiquement possible, mais risqué sur un point précis. La moindre reconnaissance maladroite — même une explication de bonne foi — peut consolider un dossier autrement fragile. L’analyse de l’originalité suppose aussi d’examiner techniquement la photographie. Un regard professionnel évite les erreurs irréversibles dans la rédaction de votre réponse.' },
  { q: 'PicRights a-t-elle déjà gagné des procès ?', a: 'Des décisions favorables aux demandeurs existent, mais restent rares au regard du volume de courriers envoyés, et les montants obtenus sont souvent modestes. À l’inverse, plusieurs décisions récentes rejettent la demande faute d’originalité démontrée ou de preuve suffisante. Chaque affaire dépend de ses faits propres.' },
  { q: 'Combien de temps dure la phase amiable ?', a: 'Cela varie selon la réactivité du demandeur, mais l’essentiel se joue dans les premiers échanges. Une fois la contestation envoyée en votre nom, le dossier suit son cours ; beaucoup s’éteignent faute de suite donnée par le demandeur. Vous êtes tenu informé à chaque étape.' },
  { q: 'PicRights peut-elle relancer plusieurs fois ?', a: 'Oui, les relances sont fréquentes et largement automatisées. Leur multiplication ne renforce pas juridiquement la demande : elle traduit surtout l’insistance du modèle. Une contestation formelle, unique et argumentée, a plus de valeur que de répondre à chaque relance.' },
  { q: 'Que se passe-t-il si je paye partiellement ?', a: 'Un paiement, même partiel, peut être interprété comme une reconnaissance de la réclamation et affaiblir votre position. Mieux vaut ne rien verser avant d’avoir fait vérifier le bien-fondé de la demande. Si un paiement s’avère justifié, il s’inscrira dans un accord clair et définitif.' },
  { q: 'Mon assurance protection juridique couvre-t-elle ce type de litige ?', a: 'Souvent oui, au moins partiellement. Vérifiez votre contrat (garantie « propriété intellectuelle » ou « litiges internet ») et déclarez le sinistre sans tarder. Selon les clauses, les honoraires d’avocat peuvent être pris en charge en tout ou partie — un point utile à examiner dès réception du courrier.' },
  { q: 'Une photo trouvée sur un site « libre de droits » peut-elle faire l\'objet d\'une réclamation ?', a: 'Oui, cela arrive. « Libre de droits » ne signifie pas « sans droits » : une image mal étiquetée, une licence expirée ou un référencement erroné peuvent générer une réclamation. Si vous avez utilisé la photo de bonne foi via une plateforme, conservez toutes les preuves — facture, licence, capture : elles pèsent dans l’analyse.' },
  { q: 'PicRights m\'a contacté il y a 2 ans, peuvent-ils encore agir ?', a: 'En matière de contrefaçon, l’action se prescrit en principe par cinq ans à compter du jour où le titulaire a connu ou aurait dû connaître les faits. Un délai écoulé ne rend pas la demande caduque à lui seul, mais l’ancienneté et l’inaction peuvent nourrir la défense. La date des faits et celle du premier contact méritent d’être précisément établies.' },
  { q: 'Mon agence web est-elle responsable si c\'est elle qui a intégré la photo ?', a: 'La responsabilité contractuelle de votre prestataire peut être engagée s’il a fourni ou intégré l’image sans vérifier les droits, selon votre contrat. Cela ne vous exonère pas nécessairement vis-à-vis du demandeur, mais peut ouvrir un recours de votre côté. Rassemblez le devis, le cahier des charges et les échanges avec l’agence.' },
]

export default function Home() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '20px 0', borderBottom: '0.5px solid var(--border)' },
    label: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 },
    h2: { fontSize: 16, fontWeight: 500, color: 'var(--text)', marginBottom: 12 },
    small: { fontSize: 12, color: 'var(--secondary)', lineHeight: 1.55 },
  }

  return (
    <>
      <JsonLd data={legalService} />
      <JsonLd data={faqPage(faqItems.map((f) => [f.q, f.a]))} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={article} />
      <JsonLd data={imageObjects} />
      {/* HERO — deux modules interactifs (analyseur + devis) */}
      <div id="analyseur" style={{ background: 'var(--navy)', scrollMarginTop: 56 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 24px 56px' }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', marginBottom: 14 }}>
            PicRights · AFP · Reuters · AP · PA Images · MaxPPP · Paris Match · Rights Control
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 500, color: 'white', lineHeight: 1.25, marginBottom: 10, maxWidth: 820 }}>
            Courrier PicRights : faut-il payer ? <span style={{ color: '#7ec8e3' }}>Guide complet 2026</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: 660, marginBottom: 14 }}>
            Vous avez reçu une mise en demeure PicRights, AFP, Reuters ou d'une autre agence de presse ? Avant de payer quoi que ce soit, lisez ce guide.
          </p>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.62)', lineHeight: 1.6, marginBottom: 16 }}>
            <strong style={{ color: 'white', fontWeight: 600 }}>300+</strong> mises en demeure analysées · <strong style={{ color: 'white', fontWeight: 600 }}>800 000 €+</strong> de réclamations examinées · Contentieux photographique uniquement
          </div>

          {/* ENCADRÉ AUTEUR — E-E-A-T, sous les statistiques */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', maxWidth: 660, background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.14)', borderRadius: 10, padding: '14px 16px', marginBottom: 26 }}>
            <AuthorPhoto />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>Alexandre Lazarègue</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Avocat au Barreau de Paris</div>
              <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                Depuis plusieurs années, j'interviens exclusivement dans les contentieux liés aux réclamations photographiques — PicRights, AFP, Reuters, AP et autres agences. Chaque dossier est analysé personnellement selon la Grille Lazarègue® avant toute prise de position.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 640, marginBottom: 30 }}>
            Une réponse maladroite peut vous coûter plusieurs milliers d'euros. Deux façons d'agir, dès maintenant.
          </p>

          <HeroModules />

          <div style={{ marginTop: 14, fontSize: 11.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
            Images et documents analysés en mémoire par notre sous-traitant technique (Anthropic / Claude), puis non conservés. <Link href="/confidentialite/" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'underline' }}>Confidentialité & RGPD</Link>
          </div>
        </div>
      </div>

      <div style={s.page}>

        {/* COÛT INACTION */}
        <div style={s.block}>
          <div style={s.label}>Ce que coûte une mauvaise décision</div>
          {['Payer sans avoir vérifié si la réclamation est juridiquement fondée.', 'Répondre maladroitement et reconnaître involontairement sa responsabilité.', 'Ignorer la mise en demeure et faciliter une procédure judiciaire.'].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#5e2424', background: '#FCEBEB', borderRadius: 8, padding: '10px 14px', marginBottom: 8, lineHeight: 1.5 }}>
              <span style={{ color: '#A32D2D', flexShrink: 0, fontWeight: 700 }}>✕</span>{t}
            </div>
          ))}
        </div>

        {/* PREUVE SOCIALE */}
        <div style={s.block}>
          <div style={s.label}>Pourquoi les entreprises nous confient ce type de dossier</div>
          <div style={{ background: '#F8F7F3', borderRadius: 10, padding: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10, marginBottom: 14 }}>
              {[['300+', 'mises en demeure examinées'], ['800 000 €+', 'de réclamations analysées'], ['Exclusif', 'contentieux photographiques uniquement']].map(([n, l]) => (
                <div key={n} style={{ background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>{n}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--secondary)', marginBottom: 8 }}>Nous intervenons régulièrement contre :</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['PicRights', 'AFP', 'PA Images', 'Reuters', 'AP', 'MaxPPP', 'Paris Match', 'Rights Control'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 500, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '4px 10px', borderRadius: 20 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* VIDÉO */}
        <div style={s.block}>
          <div style={s.label}>L'avocat vous explique</div>
          <div style={{ background: 'var(--navy)', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 16px 14px' }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/dossiers/interview-poster.jpg"
                style={{ width: '100%', maxWidth: 264, aspectRatio: '202 / 360', objectFit: 'cover', borderRadius: 8, background: '#000', display: 'block', boxShadow: '0 8px 22px rgba(0,0,0,0.35)' }}
              >
                <source src="/dossiers/interview-avocat.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture de cette vidéo.
              </video>
            </div>
            <div style={{ padding: '10px 16px', borderTop: '0.5px solid rgba(255,255,255,0.1)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Interview média :</strong> pourquoi certaines réclamations peuvent être sérieusement contestées, et ce que vous risquez réellement.
            </div>
          </div>
        </div>

        {/* CE QUE DISENT LES TRIBUNAUX 2025-2026 */}
        <div style={s.block}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', margin: '0 0 10px', lineHeight: 1.3 }}>Ce que disent les tribunaux français en 2025-2026</h2>
          <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>
            En droit d’auteur, ce n’est jamais à vous de prouver votre innocence : c’est au demandeur — PicRights, l’AFP, Reuters… — de démontrer que la photographie est <strong>originale</strong>, qu’il <strong>détient les droits</strong> invoqués, que l’<strong>utilisation</strong> est établie et que le <strong>préjudice</strong> est réel. Les décisions récentes le confirment : de nombreuses réclamations se soldent par un rejet ou une forte réduction lorsque cette démonstration fait défaut.
          </p>
          {[
            ['CJUE, 1er déc. 2011 (Painer, C-145/10)', 'Quand une photographie est-elle protégée ?', 'Une photo n’est protégée que si elle reflète des choix libres et créatifs de son auteur — la seule maîtrise technique ne suffit pas. Une image « prise sur le vif » est souvent contestable.'],
            ['CJUE, 16 juil. 2009 (Infopaq, C-5/08)', 'Qu’est-ce que l’« originalité » ?', 'L’œuvre doit être une « création intellectuelle propre à son auteur » : un critère exigeant, jamais rempli du seul fait qu’une photographie existe.'],
            ['CJUE, 12 sept. 2019 (Cofemel, C-683/17)', 'La valeur de la photo change-t-elle quelque chose ?', 'L’originalité ne dépend ni de la beauté ni de la valeur commerciale, mais des seuls choix créatifs. Le montant réclamé ne prouve donc rien.'],
            ['Cour d’appel de Paris, 9 juin 2009 (AFP)', 'Les droits invoqués sont-ils réellement acquis ?', 'Les cessions de droits s’interprètent strictement : sans cession suffisamment précise, même une agence peut être en tort. Le demandeur doit prouver qu’il détient vraiment les droits.'],
            ['TJ Paris, 18 févr. 2026 (n° 24/12841)', 'Une photo de presse est-elle protégée d’office ?', 'Protection refusée faute de choix créatifs démontrés. Être diffusée par l’AFP ne veut pas dire être protégée.'],
            ['TJ Paris, 27 mars 2026 (n° 24/12313)', 'Décrire la photo suffit-il à prouver l’originalité ?', 'Non : le juge exige la démonstration concrète des choix créatifs, pas une simple description de l’image.'],
            ['TJ Paris, 19 nov. 2025 (n° 25/05168)', 'Un cadrage classique rend-il la photo originale ?', 'Cadrage banal et lumière imposée par les lieux : l’originalité est écartée.'],
            ['Tribunal judiciaire de Bordeaux (escalier monumental)', 'Quand la protection est-elle, au contraire, retenue ?', 'Lorsque l’auteur démontre précisément mise en scène, lumière, composition et perspective, la protection est accordée. L’analyse reste au cas par cas.'],
            ['Tendance 2024-2026 (plusieurs TJ) — la preuve', 'Une capture d’écran suffit-elle à prouver l’utilisation ?', 'Une simple capture, non corroborée, a une valeur probatoire limitée face à un constat de commissaire de justice. La preuve de l’utilisation doit être solide.'],
            ['Tendance 2024-2026 (plusieurs TJ) — le montant', 'Le montant réclamé est-il dû tel quel ?', 'Les juges réduisent régulièrement les sommes insuffisamment justifiées ; et lorsque le droit d’auteur est écarté, ils examinent parfois le parasitisme.'],
          ].map(([ref, q, e], i) => (
            <div key={i} style={{ background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '12px 14px', marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--blue-mid)', marginBottom: 3 }}>{ref}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 3, lineHeight: 1.4 }}>{q}</div>
              <div style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.55 }}>{e}</div>
            </div>
          ))}
          <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 4, lineHeight: 1.55 }}>
            Chaque affaire dépend de ses faits propres. Ces enseignements ne valent pas consultation : ils montrent qu’une réclamation ne préjuge jamais de l’issue — d’où l’intérêt de faire vérifier votre dossier avant de payer.
          </div>
        </div>

        {/* AFFAIRES PLAIDÉES PAR LE CABINET */}
        <div style={s.block}>
          <div style={s.label}>Des affaires plaidées par le cabinet</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '0 0 6px', lineHeight: 1.35 }}>Devant le tribunal, le droit d’auteur écarté faute d’originalité</h3>
          <p style={{ fontSize: 13, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>
            Dans plusieurs affaires — voici trois exemples, contre des demandeurs différents — le cabinet a obtenu le rejet de la demande de contrefaçon, faute pour le titulaire d’avoir démontré l’originalité de la photographie.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            <div style={{ borderLeft: '3px solid var(--blue-mid)', background: '#F1F5FA', borderRadius: '0 8px 8px 0', padding: '14px 16px' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6, lineHeight: 1.35 }}>Une photographie de presse « prise sur le vif »</div>
              <p style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 8px' }}>
                L’AFP réclamait <strong>3 500 €</strong> pour l’usage d’une photographie. Le tribunal a <strong>écarté le droit d’auteur</strong>, faute d’originalité démontrée — « il appartient à celui qui se prévaut d’un droit d’auteur d’en expliciter les contours ». Aucune indemnité n’a été allouée sur ce fondement.
              </p>
              <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                TJ Paris, 27 juin 2024, n° 22/02990. <a href="https://www.doctrine.fr/d/TJ/Paris/2024/TJPF2FD447B4B5E569F6A38" target="_blank" rel="noopener nofollow" style={{ color: 'var(--blue)', textDecoration: 'none' }}>Lire →</a>
              </div>
            </div>
            <div style={{ borderLeft: '3px solid var(--blue-mid)', background: '#F1F5FA', borderRadius: '0 8px 8px 0', padding: '14px 16px' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6, lineHeight: 1.35 }}>Deux clichés d’actualité (un pape, un défilé Dior)</div>
              <p style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 8px' }}>
                L’AFP et Paris Match invoquaient le droit d’auteur sur deux photographies d’événements très médiatisés. Le tribunal l’a <strong>écarté pour les deux clichés</strong>, faute d’originalité démontrée, et a <strong>entièrement débouté Paris Match</strong> de ses demandes.
              </p>
              <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                TJ Paris, 27 mars 2026, n° 24/07491.
              </div>
            </div>
            <div style={{ borderLeft: '3px solid var(--blue-mid)', background: '#F1F5FA', borderRadius: '0 8px 8px 0', padding: '14px 16px' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6, lineHeight: 1.35 }}>Une photographie de plat réclamée par une agence de recouvrement</div>
              <p style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 8px' }}>
                Une société de recouvrement de droits (Rights Control) réclamait plus de <strong>4 000 €</strong> à un exploitant de camping pour une photographie de petit-déjeuner. Le tribunal a <strong>débouté la société de son action en contrefaçon</strong>, la photographie étant jugée dépourvue d’originalité.
              </p>
              <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                TJ Rennes, 9 mars 2026, n° 23/05206.
              </div>
            </div>
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 10, lineHeight: 1.55 }}>
            Chaque affaire dépend de ses faits propres ; ces décisions ne préjugent pas de l’issue d’un autre litige.
          </div>

          {/* DANS LA PRESSE */}
          <div style={{ marginTop: 16, borderTop: '0.5px solid var(--border)', paddingTop: 14 }}>
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 8 }}>Dans la presse</div>
            <p style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 8px' }}>
              Ces contentieux et les positions défendues par le cabinet ont été évoqués dans <strong>l’Informé</strong> (Marc Rees) :
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.7 }}>
              <li><a href="https://www.linforme.com/medias-culture/article/l-afp-paris-match-le-droit-d-auteur-de-la-photo-de-presse-de-nouveau-en-question_3676.html" target="_blank" rel="noopener nofollow" style={{ color: 'var(--blue)', textDecoration: 'none' }}>L’AFP, Paris Match… le droit d’auteur de la photo de presse de nouveau en question</a> <span style={{ color: 'var(--muted)' }}>(févr. 2026)</span></li>
              <li><a href="https://www.linforme.com/medias-culture/article/le-droit-d-auteur-des-photographes-de-presse-encore-fragilise_3903.html" target="_blank" rel="noopener nofollow" style={{ color: 'var(--blue)', textDecoration: 'none' }}>Le droit d’auteur des photographes de presse encore fragilisé</a> <span style={{ color: 'var(--muted)' }}>(avr. 2026)</span></li>
            </ul>
          </div>
        </div>

        {/* COMPARAISONS VISUELLES ORIGINALITÉ */}
        <ComparaisonsOriginalite />

        {/* EXEMPLES DE COURRIERS ANONYMISÉS */}
        <ExemplesCourriers />

        {/* PRISE EN CHARGE */}
        <div style={s.block}>
          <div style={s.label}>Votre dossier est pris en charge sous 48 heures</div>
          <div style={{ background: '#F8FBFE', border: '1.5px solid var(--blue)', borderRadius: 10, padding: '16px 18px' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>⏱ Ce que le cabinet fait pour vous dès réception</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, fontStyle: 'italic' }}>Chaque dossier est traité personnellement par un avocat. Notre démarche commence toujours par la vérification, jamais par la négociation.</div>
            {[['Vérification de la protection de la photographie', 'porte-t-elle réellement l\'empreinte d\'une création originale — seule condition d\'une protection par le droit d\'auteur ?'], ['Vérification des droits invoqués', 'le demandeur démontre-t-il qu\'il détient effectivement les droits qu\'il fait valoir, et le mandat pour les réclamer ?'], ['Vérification du bien-fondé du montant', 'la somme réclamée repose-t-elle sur une base juridique, ou sur un simple barème commercial ?'], ['Contestation juridique', 'lorsque ces conditions ne sont pas réunies, nous contestons la réclamation et demandons son abandon — courrier rédigé et envoyé en votre nom.'], ['Solution amiable, à défaut seulement', 'ce n\'est que si l\'examen confirme le bien-fondé de la demande qu\'une discussion sur le montant est engagée.']].map(([title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 18, fontSize: 10, fontWeight: 600, color: 'var(--blue)', flexShrink: 0, paddingTop: 2 }}>{i + 1}</div>
                <div style={{ fontSize: 12, color: 'var(--secondary)', lineHeight: 1.5 }}><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{title}</strong> — {desc}</div>
              </div>
            ))}
            <div style={{ fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', borderRadius: 8, padding: '8px 12px', marginTop: 4 }}>
              Vous n'avez rien à rédiger. Vous n'avez rien à négocier.
            </div>
          </div>
        </div>

        {/* SCHÉMA — de la mise en demeure à l'abandon */}
        <div style={s.block}>
          <div style={s.label}>De la mise en demeure à l&apos;abandon de la réclamation</div>
          <div style={{ background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '16px 16px 14px' }}>
            {[['1', 'Mise en demeure reçue', 'le point de départ — vous êtes ici.'], ['2', 'Vérification juridique', 'photographie réellement protégée ? droits du demandeur démontrés ? montant justifié ?'], ['3', 'Contestation', 'lorsque ces conditions ne sont pas réunies, nous contestons la réclamation en votre nom.']].map(([n, t, d]) => (
              <div key={n}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--navy)', color: '#fff', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)' }}>{t}</div>
                    <div style={{ fontSize: 12, color: 'var(--secondary)', lineHeight: 1.5, marginTop: 2 }}>{d}</div>
                  </div>
                </div>
                <div style={{ width: 1, height: 14, background: '#c7c5ba', margin: '2px 0 2px 11px' }} />
              </div>
            ))}
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--green)' }}>Abandon de la réclamation</div>
                <div style={{ fontSize: 12, color: 'var(--secondary)', lineHeight: 1.5, marginTop: 2 }}>l&apos;issue recherchée en priorité lorsque la demande n&apos;est pas juridiquement fondée.</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: 'var(--muted)', background: '#fff', border: '0.5px dashed var(--border)', borderRadius: 8, padding: '10px 14px', lineHeight: 1.55 }}>
            <strong style={{ color: 'var(--secondary)', fontWeight: 600 }}>Branche secondaire —</strong> uniquement si la vérification confirme que la réclamation est fondée : discussion amiable pour en limiter le coût, puis assignation éventuelle. C&apos;est l&apos;issue la moins fréquente.
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" style={{ ...s.block, scrollMarginTop: 56 }}>
          <div style={s.label}>Ce que vous vous demandez</div>
          {faqItems.map((item, i) => (
            <details key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
              <summary style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {item.q}<span style={{ color: 'var(--muted)', fontSize: 12 }}>↓</span>
              </summary>
              <div style={{ fontSize: 13, color: 'var(--secondary)', lineHeight: 1.65, paddingBottom: 14 }}><strong style={{ color: 'var(--text)' }}>En bref —</strong> {item.a}</div>
            </details>
          ))}
        </div>

        {/* CE QUE VOUS ACHETEZ RÉELLEMENT */}
        <div style={s.block}>
          <div style={s.label}>Ce que vous achetez réellement</div>
          <div style={{ background: 'var(--navy)', borderRadius: 10, padding: '18px 20px' }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.92)', lineHeight: 1.6, margin: '0 0 10px' }}>Vous ne payez pas un avocat pour négocier automatiquement une indemnité avec PicRights ou l&apos;AFP.</p>
            <p style={{ fontSize: 14, color: 'white', fontWeight: 500, lineHeight: 1.6, margin: '0 0 10px' }}>Vous payez un avocat pour déterminer si cette réclamation est juridiquement fondée — et, lorsqu&apos;elle ne l&apos;est pas, pour obtenir son abandon.</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>Notre objectif premier n&apos;est pas de vous faire payer moins, mais de démontrer que vous ne devez rien lorsque les conditions juridiques ne sont pas réunies.</p>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)', marginTop: 14, paddingTop: 12, borderTop: '0.5px solid rgba(255,255,255,0.14)', lineHeight: 1.5 }}>Aucune promesse de résultat, aucun pourcentage, aucune garantie — chaque dossier dépend de son examen juridique.</div>
          </div>
        </div>

        {/* FORFAIT */}
        <div id="forfait" style={s.block}>
          <div style={s.label}>Ce que comprend le forfait</div>
          <div style={{ border: '1.5px solid var(--blue)', borderRadius: 12, padding: 20, background: '#F8FBFE' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>Phase amiable — prise en charge complète</div>
              <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--navy)' }}>200 € <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--muted)' }}>HT</span></div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>Forfait unique, <strong>indépendant du montant réclamé</strong> : que l&apos;on vous demande 800 € ou 5 000 €, notre intervention coûte le même prix — et vise d&apos;abord à établir si vous devez réellement cette somme.</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', marginBottom: 8 }}>Ce qui est inclus</div>
            {['Un avocat prend votre dossier en charge sous 48h', 'Vérification complète du bien-fondé de la réclamation', 'Contestation et envoi du courrier en votre nom', 'Suivi jusqu\'à clôture de la phase amiable', 'Convention d\'honoraires et facture incluses'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--secondary)', marginBottom: 7 }}>
                <span style={{ color: 'var(--blue)', flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
            <div style={{ fontSize: 12, color: 'var(--blue-mid)', background: 'var(--blue-light)', borderRadius: 8, padding: '10px 14px', margin: '12px 0', lineHeight: 1.55 }}>
              Le forfait couvre la vérification complète du bien-fondé de la réclamation et la contestation lorsqu'elle n'est pas démontrée. Une discussion amiable n'intervient qu'à défaut, si l'examen confirme que la demande est fondée.
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', background: '#F8F7F3', borderRadius: 8, padding: '8px 12px', marginBottom: 16 }}>
              Que la demande porte sur 900 € ou 4 500 €, vous connaissez dès le départ le coût de notre intervention.
            </div>
            <Link href="/litige-afp-picrights/confier/" style={{ display: 'block', width: '100%', padding: 13, background: 'var(--navy)', color: 'white', borderRadius: 8, textDecoration: 'none', textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
              Faire analyser ma mise en demeure
            </Link>
            <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 8 }}>Au-delà de la phase amiable, aucun frais sans votre accord.</div>
          </div>
        </div>

        {/* CAS PRATIQUES */}
        <div style={s.block}>
          <div style={s.label}>Cas pratiques — dossiers traités par le cabinet</div>
          {[['PicRights', 'PicRights réclamait 980 € pour une photographie de produit utilisée sur un site e-commerce.', 'Photographie de catalogue · 2023', '/cas-pratiques/'],
            ['AFP', 'L\'AFP réclamait 1 400 € pour une photographie de presse reprise sur un site d\'actualité.', 'Photo de presse · 2023', '/cas-pratiques/'],
            ['Reuters', 'Reuters réclamait 2 200 € pour une photographie d\'agence illustrant un article de blog.', 'Photo d\'agence · 2024', '/cas-pratiques/']].map(([tag, title, detail, href]) => (
            <Link key={tag} href={href} style={{ display: 'block', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 8, padding: '14px 16px', marginBottom: 10, textDecoration: 'none' }}>
              <div style={{ display: 'inline-block', fontSize: 10, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '2px 8px', borderRadius: 10, marginBottom: 7 }}>{tag}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4, lineHeight: 1.4 }}>{title}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
                <span>{detail}</span><span style={{ color: 'var(--blue)' }}>Lire →</span>
              </div>
            </Link>
          ))}
          <Link href="/cas-pratiques" style={{ fontSize: 12, color: 'var(--blue)', textDecoration: 'none' }}>Voir tous les cas pratiques →</Link>
        </div>

        {/* FIN DE PHASE */}
        <div style={{ ...s.block, background: '#F8F7F3', margin: '0 -24px', padding: '20px 24px', borderRadius: 0 }}>
          <div style={s.label}>À la fin de la phase amiable</div>
          {['La réclamation peut avoir été abandonnée.', 'Un accord peut avoir été trouvé.', 'Si une procédure devient nécessaire, vous connaissez vos options avant toute nouvelle décision.'].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: 8, lineHeight: 1.5 }}>
              <span style={{ color: 'var(--green)', flexShrink: 0 }}>✓</span>{t}
            </div>
          ))}
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginTop: 12 }}>Dans tous les cas, vous n'aurez jamais eu à gérer seul cette mise en demeure.</div>
        </div>

        {/* CTA FINAL */}
        <div style={{ textAlign: 'center', padding: '36px 0 24px' }}>
          <h2 style={{ fontSize: 18, fontWeight: 500, color: 'var(--text)', marginBottom: 8 }}>Prêt à confier votre mise en demeure ?</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Convention d'honoraires et facture incluses · Prise en charge sous 48h</p>
          <Link href="/litige-afp-picrights/confier/" style={{ display: 'inline-block', padding: '13px 32px', background: 'var(--navy)', color: 'white', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600, marginBottom: 10 }}>
            Confier mon dossier au cabinet
          </Link>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>Paiement Stripe sécurisé · Secret professionnel garanti · Barreau de Paris</div>
        </div>

        {/* RESSOURCES SEO */}
        <div style={{ borderTop: '0.5px solid var(--border)', padding: '20px 0' }}>
          <div style={s.label}>Pour aller plus loin</div>
          <Link href="/picrights/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', marginBottom: 12 }}>
            Lire le guide complet PicRights →
          </Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[['Faut-il payer PicRights ?', '/picrights/faut-il-payer-picrights/'], ['Guide : mise en demeure AFP', '/picrights-afp/'], ['Guide : mise en demeure Reuters', '/reuters/'], ['Toutes les agences', '/agences/'], ['Jurisprudence commentée', '/jurisprudence/'], ['Tous les cas pratiques', '/cas-pratiques/'], ['Notre méthode', '/notre-methode/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
        </div>

        {/* TRUST */}
        <div style={{ borderTop: '0.5px solid var(--border)', padding: '16px 0', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {['🏛 Barreau de Paris', '🔒 Secret professionnel', '📄 Conforme CNB', '🛡 Données chiffrées', '💳 Stripe sécurisé'].map(t => (
            <span key={t} style={{ fontSize: 11, color: 'var(--muted)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SECTION ASSIGNATION — hors circuit de paiement, avant le footer */}
      <SectionAssignation />

      {/* SIGNATURE AUTEUR — avant le footer */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 24px 8px' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#F8F7F3', border: '0.5px solid var(--border)', borderRadius: 10, padding: '16px 18px' }}>
          <AuthorPhoto size={48} ring="var(--border)" />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Maître Alexandre Lazarègue</div>
            <div style={{ fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.5 }}>Avocat au Barreau de Paris — spécialisé en défense contre les réclamations photographiques. <Link href="/a-propos/" style={{ color: 'var(--blue)', textDecoration: 'none' }}>À propos →</Link></div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4 }}>Dernière mise à jour de cette page : juillet 2026</div>
          </div>
        </div>
      </div>
    </>
  )
}
