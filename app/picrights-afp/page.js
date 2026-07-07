import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'
import Blocks from '../components/guide/Blocks'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import JsonLd, { faqPage } from '../components/JsonLd'
import { href } from '../components/guide/afpArticles'

export const metadata = {
  title: 'PicRights AFP : que faire ? Guide complet par un avocat (2026)',
  description: 'PicRights AFP vous réclame une indemnisation pour une photographie ? Découvrez ce que disent les tribunaux en 2025-2026 avant de payer quoi que ce soit.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/' },
}

const sections = [
  {
    id: 'pourquoi', kicker: 'Le courrier', title: 'Pourquoi PicRights AFP vous réclame-t-il de l’argent ?', slug: 'faut-il-payer', cta: 'Faut-il payer PicRights AFP ?',
    summary: [
      ['p', 'Une réclamation PicRights AFP est généralement adressée lorsqu’une photographie est présentée comme ayant été utilisée sans autorisation sur un site internet. Le courrier poursuit deux objectifs : faire cesser l’utilisation litigieuse et obtenir une indemnisation.'],
      ['p', 'À ce stade, il s’agit d’une **demande amiable**. Aucun tribunal ne s’est encore prononcé — recevoir ce courrier ne signifie pas que vous êtes responsable, ni que la somme demandée est due.'],
    ],
  },
  {
    id: 'payer', kicker: 'La première question', title: 'Faut-il payer PicRights AFP ?', slug: 'faut-il-payer', cta: 'Faut-il payer PicRights AFP ?',
    summary: [
      ['p', 'Pas automatiquement. Une demande de paiement PicRights AFP ne constitue ni une décision de justice, ni une condamnation. Avant tout versement, quatre questions doivent être examinées :'],
      ['ul', ['la photographie est-elle réellement protégée par le droit d’auteur ?', 'les droits invoqués sont-ils démontrés ?', 'votre utilisation est-elle juridiquement caractérisée ?', 'le montant demandé est-il cohérent ?']],
    ],
  },
  {
    id: 'originalite', kicker: 'Droit d’auteur', title: 'Une photographie AFP est-elle automatiquement protégée ?', slug: 'originalite', cta: 'Photographies PicRights AFP : quand sont-elles protégées ?',
    summary: [
      ['p', 'Non. La protection ne dépend pas du nom de l’agence, mais de la photographie elle-même. Les tribunaux recherchent si le cliché révèle de véritables choix créatifs de son auteur.'],
      ['p', 'La jurisprudence récente refuse d’ailleurs fréquemment la protection à des photographies de presse « prises sur le vif », faute de démonstration de choix personnels suffisants. Chaque cliché est apprécié **individuellement**.'],
    ],
  },
  {
    id: 'calcul', kicker: 'L’indemnisation', title: 'Comment sont calculées les sommes réclamées ?', slug: 'calcul-indemnites', cta: 'Comment PicRights AFP calcule ses demandes',
    summary: [
      ['p', 'Le montant figurant dans une réclamation PicRights AFP correspond à la position du demandeur : généralement le prix d’une licence rétroactive, majoré de divers postes de préjudice. Ce n’est pas un barème officiel.'],
      ['p', 'En cas de procédure, le tribunal procède à sa **propre évaluation** et réduit régulièrement les sommes lorsqu’elles sont insuffisamment justifiées ou reposent sur des majorations forfaitaires.'],
    ],
  },
  {
    id: 'proces', kicker: 'Le risque judiciaire', title: 'PicRights AFP va-t-il engager un procès ?', slug: 'proces', cta: 'PicRights AFP : risques d’un procès',
    summary: [
      ['p', 'Une procédure est toujours possible, mais elle n’est jamais automatique. Si un procès est engagé, le demandeur devra démontrer que la photographie est protégée, qu’il détient les droits invoqués, que l’utilisation est établie et que le préjudice est réel.'],
      ['p', 'La jurisprudence montre que les juges ne condamnent jamais mécaniquement : deux dossiers proches peuvent aboutir à des solutions différentes.'],
    ],
  },
  {
    id: 'ignorer', kicker: 'Le silence', title: 'Peut-on ignorer un courrier PicRights AFP ?', slug: 'ignorer', cta: 'Peut-on ignorer un courrier PicRights AFP ?',
    summary: [
      ['p', 'Aucun texte n’impose de répondre à une mise en demeure PicRights AFP. En revanche, le silence n’empêche pas l’ouverture d’une procédure et ne vaut jamais reconnaissance de responsabilité.'],
      ['p', 'Le véritable enjeu n’est donc pas de savoir s’il faut répondre, mais de déterminer si la réclamation est juridiquement fondée avant de choisir la stratégie.'],
    ],
  },
  {
    id: 'jurisprudence', kicker: 'Les décisions', title: 'Que dit la jurisprudence PicRights AFP ?', slug: 'jurisprudence', cta: 'Jurisprudence PicRights AFP 2025-2026',
    summary: [
      ['p', 'Les décisions rendues en 2025-2026 montrent une constante : les juges examinent systématiquement la protection de la photographie, la preuve, la titularité des droits et le préjudice réellement démontré.'],
      ['p', 'Plusieurs jugements récents refusent la protection du droit d’auteur à des photographies de presse revendiquées par l’AFP. La seule utilisation d’un cliché ne conduit jamais à une condamnation automatique.'],
    ],
  },
]

const faq = [
  ['Faut-il payer PicRights AFP ?', 'Pas automatiquement. Une réclamation PicRights AFP est une demande amiable, pas une décision de justice. Avant tout paiement, il convient de vérifier si la photographie est originale au sens du droit d’auteur, si les droits invoqués sont démontrés, si les preuves produites sont suffisantes et si le montant réclamé est juridiquement justifié.'],
  ['PicRights AFP peut-il engager un procès ?', 'Oui, mais ce n’est pas automatique. Si un procès est engagé, le demandeur devra démontrer devant le tribunal que la photographie est protégée par le droit d’auteur, qu’il détient les droits invoqués, que l’utilisation est établie et que le préjudice est démontré.'],
  ['Peut-on ignorer un courrier PicRights AFP ?', 'Il n’existe aucune obligation légale de répondre à une mise en demeure PicRights AFP. En revanche, le silence n’empêche pas l’ouverture d’une procédure judiciaire. Une analyse juridique réalisée dès la réception du courrier permet de définir la stratégie la plus adaptée.'],
  ['Une photographie AFP est-elle automatiquement protégée par le droit d’auteur ?', 'Non. Les tribunaux français ont refusé en 2025-2026 la protection du droit d’auteur à de nombreuses photographies de presse AFP, considérant qu’elles ne traduisaient pas de choix créatifs suffisants. Chaque photographie est appréciée individuellement, indépendamment du nom de l’agence.'],
  ['Comment PicRights AFP calcule-t-il les sommes réclamées ?', 'Les montants réclamés par PicRights AFP reposent généralement sur le prix d’une licence rétroactive, majoré de divers postes de préjudice. Ces montants ne constituent pas un barème officiel : en cas de procédure, le tribunal procède à sa propre évaluation et réduit régulièrement les sommes demandées.'],
]

export default function PicRightsAfpPillar() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '22px 0', borderBottom: '0.5px solid var(--border)' },
    kicker: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 8 },
  }

  return (
    <div style={s.page}>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: 'https://lazaregue-avocats.fr/litige-afp-picrights/' },
        { name: 'Guides', url: 'https://lazaregue-avocats.fr/agences/' },
        { name: 'PicRights AFP', url: 'https://lazaregue-avocats.fr/picrights-afp/' },
      ]} />
      <JsonLd data={faqPage(faq)} />

      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}
          <Link href="/agences/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>{' → PicRights AFP'}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 14 }}>Guide complet · par un avocat</div>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 8 }}>Vous avez reçu un courrier PicRights AFP ?</h1>
        <div style={{ fontSize: 17, color: 'var(--blue-mid)', marginBottom: 16 }}>Ce que vous devez vérifier avant toute décision</div>
        <p style={{ fontSize: 16, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>Recevoir un courrier de <strong>PicRights AFP</strong> réclamant plusieurs centaines, voire plusieurs milliers d’euros pour l’utilisation d’une photographie est souvent déstabilisant. La première chose à comprendre est simple : une réclamation PicRights AFP n’est pas une condamnation.</p>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 20 }}>Avant toute décision, il convient de vérifier si cette demande est juridiquement fondée. Ce guide, rédigé par un avocat au Barreau de Paris, répond aux principales questions que se posent les entreprises, associations, collectivités et éditeurs de sites confrontés à une réclamation PicRights AFP.</p>
        <CtaBanner title="Vérifiez gratuitement votre dossier PicRights AFP" subtitle="Déposez la photographie et le courrier : notre analyseur applique la Grille Lazarègue® avant toute décision." />
      </div>

      {/* Sommaire */}
      <div style={{ padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
        <div style={s.kicker}>Ce guide répond à</div>
        <ol style={{ margin: 0, paddingLeft: 18, columns: 2, columnGap: 24 }}>
          {sections.map((sec) => (
            <li key={sec.id} style={{ fontSize: 13.5, lineHeight: 1.5, marginBottom: 6, breakInside: 'avoid' }}>
              <a href={`#${sec.id}`} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>{sec.title}</a>
            </li>
          ))}
        </ol>
      </div>

      {sections.map((sec) => (
        <div key={sec.id} id={sec.id} style={{ ...s.block, scrollMarginTop: 66 }}>
          <div style={s.kicker}>{sec.kicker}</div>
          <h2 style={{ fontSize: 21, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 12 }}>{sec.title}</h2>
          <Blocks items={sec.summary} />
          <Link href={href(sec.slug)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', marginTop: 4 }}>
            {sec.cta} →
          </Link>
        </div>
      ))}

      {/* Notre méthode */}
      <div style={s.block}>
        <div style={s.kicker}>Notre méthode</div>
        <h2 style={{ fontSize: 21, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 12 }}>Comment nous analysons une réclamation PicRights AFP</h2>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75, marginBottom: 12 }}>Notre intervention ne consiste pas à négocier systématiquement une réduction. Notre première mission consiste à déterminer si la réclamation PicRights AFP est juridiquement fondée — en examinant successivement la photographie, les droits invoqués, les preuves produites et le montant demandé.</p>
        <Link href="/notre-methode/" style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none' }}>Notre méthode d’analyse des réclamations PicRights AFP →</Link>
      </div>

      {/* FAQ */}
      <div style={s.block}>
        <div style={s.kicker}>Questions fréquentes</div>
        {faq.map(([q, a], i) => (
          <details key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
            <summary style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              {q}<span style={{ color: 'var(--muted)' }}>↓</span>
            </summary>
            <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.7, paddingBottom: 14 }}>{a}</p>
          </details>
        ))}
      </div>

      {/* Conclusion */}
      <div style={s.block}>
        <div style={s.kicker}>En résumé</div>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75 }}>Recevoir une réclamation <strong>PicRights AFP</strong> ne signifie pas que vous devez automatiquement payer. Avant toute décision, il faut vérifier si la photographie est protégée, si les droits invoqués sont démontrés, si les preuves sont suffisantes et si le montant est justifié. C’est seulement après cette analyse qu’il devient possible de définir la stratégie la plus adaptée.</p>
      </div>

      <CtaBanner title="Faire analyser ma réclamation PicRights AFP" subtitle="Chaque dossier examiné personnellement par un avocat — forfait 200 € HT, prise en charge sous 48h." />

      <div style={{ padding: '20px 0 32px' }}>
        <div style={s.kicker}>Nos autres guides</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[['Guide PicRights', '/picrights/'], ['Guide Reuters', '/reuters/'], ['Guide Getty Images', '/getty-images/'], ['Toutes les agences', '/agences/'], ['Jurisprudence', '/jurisprudence/'], ['Notre méthode', '/notre-methode/']].map(([label, url]) => (
            <Link key={url} href={url} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
