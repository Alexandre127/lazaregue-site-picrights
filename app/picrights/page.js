import Link from 'next/link'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'
import JsonLd, { faqPage } from '../components/JsonLd'
import Blocks from '../components/guide/Blocks'
import { href } from '../components/guide/picrightsArticles'

export const metadata = {
  title: 'PicRights : tout comprendre — qui, comment et vos recours | Avocat',
  description: 'Le centre de ressources PicRights : qui est cette société, comment fonctionne la réclamation, ce que disent les tribunaux et vos recours. Chaque sujet renvoie vers un article dédié — et vers l’analyse de votre dossier.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/' },
}

const sections = [
  {
    id: 'qui', kicker: 'La société', title: 'Qu’est-ce que PicRights ?', slug: 'picrights-europe-gmbh', cta: 'PicRights Europe GmbH : qui est cette société ?',
    summary: [
      ['p', 'PicRights Europe GmbH est une société spécialisée dans la détection des utilisations supposées non autorisées de photographies sur Internet. Elle agit **pour le compte** de nombreux titulaires de droits — agences de presse, banques d’images, photographes, éditeurs — mais n’est généralement **pas elle-même titulaire** des droits qu’elle invoque.'],
      ['p', 'Son rôle consiste à analyser automatiquement le web, identifier des images ressemblant à celles de ses clients, envoyer des demandes amiables de régularisation, puis transmettre certains dossiers à des cabinets d’avocats lorsqu’aucun accord n’est trouvé.'],
      ['key', 'Recevoir un courrier PicRights ne signifie pas que vous êtes condamné : il s’agit d’une demande amiable, ni d’une décision de justice, ni de la preuve définitive d’une contrefaçon.'],
    ],
  },
  {
    id: 'courrier', kicker: 'Le courrier', title: 'Pourquoi avez-vous reçu cette réclamation ?', slug: 'courrier-picrights-que-faire', cta: 'J’ai reçu un courrier PicRights : que faire ?',
    summary: [
      ['p', 'Dans la majorité des dossiers, quelques situations reviennent : une licence insuffisante ou expirée, un site conçu par une agence web ayant inséré une image sans autorisation suffisante, une ancienne version du site toujours invoquée, ou une simple erreur de détection.'],
      ['ul', ['Licence limitée, mauvais usage commercial ou licence expirée', 'Site créé par un prestataire, à votre insu', 'Photographie retirée depuis longtemps mais encore invoquée', 'Correspondance visuelle qui n’est pas nécessairement la même image']],
      ['p', 'Aucune technologie n’est infaillible : une correspondance algorithmique ne démontre pas, à elle seule, l’existence d’une contrefaçon. C’est pourquoi une analyse juridique reste indispensable avant toute décision.'],
    ],
  },
  {
    id: 'payer', kicker: 'La première question', title: 'Faut-il payer immédiatement ?', slug: 'faut-il-payer-picrights', cta: 'Faut-il payer PicRights ? Les 6 vérifications',
    summary: [
      ['p', 'Non. Une réclamation PicRights ne doit jamais conduire à un paiement automatique. Cela ne signifie pas que toute demande est infondée — mais payer sans analyse revient à **reconnaître une créance dont le bien-fondé n’a pas été vérifié**.'],
      ['p', 'À ce stade, aucun juge n’a été saisi et aucune condamnation n’existe. En matière civile, c’est à celui qui réclame une indemnisation de démontrer qu’il est titulaire des droits, que la photographie est protégeable, qu’elle a été reproduite et qu’un préjudice existe. La charge de la preuve ne repose pas sur vous.'],
    ],
  },
  {
    id: 'contester', kicker: 'La défense', title: 'Comment vérifier si la demande est fondée ?', slug: 'contester-picrights', cta: 'Comment contester une réclamation PicRights',
    summary: [
      ['p', 'Chaque dossier mérite un audit. Quatre vérifications structurent l’analyse : qui est réellement titulaire des droits ? la photographie litigieuse est-elle bien celle utilisée sur votre site ? les preuves produites — souvent de simples captures d’écran — sont-elles suffisantes ? la photographie est-elle originale ?'],
      ['p', 'Une réclamation peut parfaitement être contestée, sans que cela signifie qu’elle soit nécessairement infondée. Le rôle de l’avocat consiste précisément à identifier les éventuelles faiblesses du dossier — sur la preuve, la titularité, l’originalité, le montant et le contexte d’utilisation.'],
    ],
  },
  {
    id: 'originalite', kicker: 'Droit d’auteur', title: 'Toutes les photographies sont-elles protégées ?', slug: 'originalite-photographie', cta: 'Originalité des photographies PicRights : ce que disent les tribunaux',
    summary: [
      ['p', 'Non — et c’est le point le plus mal compris. Le droit d’auteur ne protège que les photographies **originales**, celles qui révèlent l’empreinte de la personnalité de leur auteur : choix de cadrage, de lumière, de composition, de mise en scène, du moment.'],
      ['p', 'Une photographie purement documentaire ou réalisée dans un contexte très contraint peut ne pas atteindre ce seuil. Il n’existe aucune présomption selon laquelle une photographie de presse serait automatiquement originale : chaque cliché s’apprécie individuellement.'],
    ],
  },
  {
    id: 'montant', kicker: 'L’indemnisation', title: 'Comment est calculé le montant réclamé ?', slug: 'montant-reclame-picrights', cta: 'Comment PicRights calcule-t-il les sommes réclamées ?',
    summary: [
      ['p', 'Les montants demandés varient fortement. Plusieurs éléments sont généralement invoqués : valeur de licence, durée d’utilisation, absence d’autorisation, frais de gestion, préjudice économique et moral.'],
      ['p', 'Mais ces montants ne sont pas automatiquement retenus par un tribunal. Les juridictions procèdent à leur propre appréciation, et il existe des écarts importants entre les sommes initialement réclamées et les condamnations effectivement prononcées.'],
    ],
  },
  {
    id: 'ignorer', kicker: 'Les suites', title: 'Que se passe-t-il si vous ne répondez pas ?', slug: 'peut-on-ignorer-picrights', cta: 'Peut-on ignorer une réclamation PicRights ?',
    summary: [
      ['p', 'Ignorer une réclamation n’entraîne pas automatiquement une procédure judiciaire. En pratique, trois scénarios sont possibles : le dossier s’arrête, de nouvelles relances interviennent (parfois une mise en demeure d’avocat), ou, faute d’accord, une assignation est délivrée.'],
      ['p', 'C’est uniquement à ce dernier stade qu’un juge examinerait la titularité, l’originalité, la réalité de l’utilisation, les preuves et le préjudice. L’absence totale de réponse n’est cependant pas la stratégie la plus prudente.'],
    ],
  },
  {
    id: 'negocier', kicker: 'La sortie amiable', title: 'Peut-on négocier avec PicRights ?', slug: 'negocier-picrights', cta: 'Comment négocier avec PicRights ?',
    summary: [
      ['p', 'Oui. En pratique, de nombreux dossiers se terminent sans procès. Selon les circonstances, plusieurs stratégies sont envisageables : contester totalement la demande, demander des justificatifs complémentaires, proposer une régularisation, négocier le montant ou rechercher une solution transactionnelle.'],
      ['p', 'La bonne stratégie dépend toujours des preuves disponibles, de la photographie concernée, de l’agence représentée, de la jurisprudence applicable et du profil du destinataire. Il n’existe pas de réponse universelle.'],
    ],
  },
  {
    id: 'jurisprudence', kicker: 'Les décisions', title: 'Que disent les tribunaux ?', slug: 'jurisprudence-picrights', cta: 'Jurisprudence PicRights 2025-2026 : les décisions des tribunaux',
    summary: [
      ['p', 'La jurisprudence sur l’originalité photographique, le mandat, la preuve et le préjudice illustre une **diversité d’issues** : l’originalité est tantôt retenue, tantôt refusée ; les montants sont fréquemment revus par le juge.'],
      ['p', 'Cette diversité confirme qu’aucun dossier ne peut être préjugé à partir du seul courrier reçu — chaque photographie et chaque preuve doivent être examinées individuellement.'],
    ],
  },
  {
    id: 'afp', kicker: 'Les agences', title: 'PicRights et l’AFP', customHref: '/picrights-afp/', cta: 'Consulter le guide complet PicRights AFP',
    summary: [
      ['p', 'PicRights agit fréquemment au nom de l’AFP, mais aussi de Reuters, Associated Press, Paris Match ou d’autres partenaires. Le courrier mentionne généralement l’agence mandante.'],
      ['p', 'Lorsque la réclamation est formée au nom de l’AFP, nous avons dédié un guide complet à ce cas de figure — mêmes principes (titularité, mandat, originalité, montant), appliqués aux photographies de presse.'],
    ],
  },
  {
    id: 'avis', kicker: 'Réputation', title: 'Peut-on se fier à une réclamation PicRights ?', slug: 'avis-sur-picrights', cta: 'Avis PicRights : notre analyse complète',
    summary: [
      ['p', 'Beaucoup cherchent un « avis sur PicRights » après une première réclamation. La vraie question n’est pas « PicRights est-elle sérieuse ? » — la société est bien réelle — mais **« ma réclamation est-elle juridiquement fondée ? »**. Un avis trouvé sur un forum ne permet jamais de le savoir : chaque dossier dépend de la photographie, des droits, des preuves et du montant.'],
    ],
  },
  {
    id: 'proces', kicker: 'Le risque judiciaire', title: 'Risquez-vous réellement un procès ?', slug: 'picrights-proces', cta: 'PicRights procès : risquez-vous une assignation ?',
    summary: [
      ['p', 'Recevoir une réclamation ne signifie pas qu’un procès est engagé, ni qu’il est inévitable. PicRights intervient d’abord en phase amiable ; une assignation n’intervient qu’à défaut d’accord — et ne garantit pas le succès du demandeur, qui devra tout démontrer devant le juge.'],
    ],
  },
  {
    id: 'arnaque', kicker: 'La question qui inquiète', title: 'PicRights est-elle une arnaque ?', slug: 'picrights-arnaque', cta: 'PicRights arnaque ? Ce qu’il faut vérifier',
    summary: [
      ['p', 'La question revient souvent, mais elle n’appelle ni « oui » ni « non ». Une réclamation PicRights n’est pas automatiquement infondée — mais elle ne signifie pas non plus que vous devez payer. Seul l’examen du bien-fondé juridique (photographie protégée, droits, preuves, montant) permet de trancher.'],
    ],
  },
]

const faq = [
  ['Faut-il payer PicRights immédiatement ?', 'Pas nécessairement. Une réclamation PicRights est une demande amiable, pas une décision de justice. Avant tout paiement, il convient de vérifier si la photographie est protégée par le droit d’auteur, si les droits invoqués sont démontrés, si les preuves produites sont suffisantes et si le montant réclamé est juridiquement justifié.'],
  ['PicRights est-elle sérieuse ou une arnaque ?', 'PicRights est une société qui intervient légalement pour le compte de titulaires de droits photographiques. Ce n’est pas une arnaque au sens juridique. En revanche, ses réclamations sont contestables au cas par cas — notamment lorsque la photographie n’est pas originale au sens du droit d’auteur, ou que les droits invoqués ne sont pas suffisamment démontrés.'],
  ['PicRights peut-elle saisir directement mon compte bancaire ?', 'Non. Une condamnation judiciaire définitive est nécessaire pour obtenir une exécution forcée. Aucun prélèvement ne peut intervenir sans votre accord ou sans décision de justice.'],
  ['Peut-on ignorer un courrier PicRights ?', 'Ce n’est généralement pas la stratégie la plus prudente. Ignorer une réclamation n’entraîne pas automatiquement une procédure judiciaire, mais peut conduire à de nouvelles relances et, dans certains dossiers, à une assignation. Une analyse préalable permet de déterminer la réponse la plus adaptée à votre situation.'],
  ['Supprimer la photographie suffit-il pour mettre fin au litige PicRights ?', 'Pas nécessairement. Le retrait de l’image met fin à son utilisation en cours, mais ne met pas automatiquement fin à la réclamation pour utilisation passée.'],
  ['PicRights peut-elle engager un procès ?', 'Oui, mais ce n’est pas automatique. En cas de procédure judiciaire, le demandeur devra démontrer que la photographie est originale et protégée, qu’il détient les droits invoqués, que l’utilisation est établie et que le préjudice est réel. Les tribunaux français ont refusé la protection à de nombreuses photographies de presse en 2025-2026.'],
  ['Une photographie trouvée sur Google est-elle libre de droits ?', 'Non. Google est un moteur de recherche et n’accorde aucune autorisation d’utilisation des images référencées. La présence d’une photographie dans les résultats Google ne signifie pas qu’elle est libre de droits.'],
  ['Mon agence web a intégré la photo, puis-je me retourner contre elle ?', 'Cela dépend du contrat, de la mission confiée et des garanties données. Si votre agence a inséré une image sans autorisation suffisante, une action en garantie ou en responsabilité contractuelle peut être envisagée.'],
]

const pillarArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PicRights : tout comprendre sur la réclamation reçue',
  author: { '@type': 'Person', name: 'Alexandre Lazarègue', jobTitle: 'Avocat au Barreau de Paris', url: 'https://lazaregue-avocats.fr/a-propos/' },
  publisher: { '@type': 'Organization', name: 'Lazarègue Avocats', url: 'https://lazaregue-avocats.fr', logo: { '@type': 'ImageObject', url: 'https://lazaregue-avocats.fr/dossiers/logo.png' } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://lazaregue-avocats.fr/picrights/' },
}

const pillarLegalService = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Lazarègue Avocats — Défense contre les réclamations PicRights',
  url: 'https://lazaregue-avocats.fr/picrights/',
  description: 'Cabinet d’avocats spécialisé en défense contre les réclamations PicRights. Examen juridique complet, contestation et négociation. Forfait à partir de 200 € HT.',
  areaServed: 'FR',
  serviceType: 'Défense contre les réclamations photographiques PicRights',
  priceRange: 'À partir de 200 € HT',
  provider: { '@type': 'Person', name: 'Alexandre Lazarègue', jobTitle: 'Avocat au Barreau de Paris' },
}

// CTA discret vers la landing (page de traitement) — le guide oriente, il ne convertit pas lui-même.
function AnalyseCta() {
  return (
    <div style={{ background: 'var(--blue-light)', borderRadius: 8, padding: '11px 16px', margin: '16px 0 4px', fontSize: 13.5, lineHeight: 1.5 }}>
      <span style={{ color: 'var(--text)' }}>Vous avez reçu un courrier PicRights ? </span>
      <Link href="/litige-afp-picrights/#analyseur" style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Faire analyser votre dossier →</Link>
    </div>
  )
}

export default function PicRightsPillar() {
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
        { name: 'PicRights', url: 'https://lazaregue-avocats.fr/picrights/' },
      ]} />
      <JsonLd data={faqPage(faq)} />
      <JsonLd data={pillarArticle} />
      <JsonLd data={pillarLegalService} />
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}
          <Link href="/agences/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>{' → PicRights'}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 14 }}>Centre de ressources</div>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 8 }}>PicRights : tout comprendre sur la réclamation reçue</h1>
        <div style={{ fontSize: 17, color: 'var(--blue-mid)', marginBottom: 16 }}>Qui est PicRights, comment fonctionne la réclamation, ce que disent les tribunaux — et vos recours</div>
        <p style={{ fontSize: 16, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>Vous avez reçu un courrier PicRights vous réclamant plusieurs centaines ou milliers d’euros pour une photographie publiée sur votre site internet ? Ce guide de référence fait le tour de la question : ce qu’est PicRights, pourquoi vous recevez ce courrier, ce que dit le droit d’auteur, comment sont calculés les montants et quels sont vos recours.</p>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>Une réclamation PicRights ne constitue ni une condamnation, ni une décision de justice, ni la preuve définitive qu’une contrefaçon est caractérisée — et les tribunaux français ont rendu en 2025-2026 une série de décisions qui le confirment. <strong>Chaque section renvoie vers un article spécialisé</strong> pour approfondir.</p>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 10 }}>Les questions essentielles que ce guide passe en revue :</p>
        <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none' }}>
          {['PicRights agit-elle réellement pour le titulaire des droits ?', 'La photographie est-elle effectivement protégée par le droit d’auteur ?', 'Les preuves produites sont-elles juridiquement suffisantes ?', 'Le montant réclamé est-il justifié ?', 'Existe-t-il des moyens de défense ?'].map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.55, marginBottom: 8 }}>
              <span style={{ color: 'var(--blue)', flexShrink: 0 }}>→</span>{t}
            </li>
          ))}
        </ul>
        <AnalyseCta />
      </div>

      {/* Sommaire */}
      <div style={{ padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
        <div style={s.kicker}>Sommaire</div>
        <ol style={{ margin: 0, paddingLeft: 18, columns: 2, columnGap: 24 }}>
          {sections.map((sec) => (
            <li key={sec.id} style={{ fontSize: 13.5, lineHeight: 1.5, marginBottom: 6, breakInside: 'avoid' }}>
              <a href={`#${sec.id}`} style={{ color: 'var(--secondary)', textDecoration: 'none' }}>{sec.title}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Sections — chacune résume, renvoie vers l'article approfondi, et (aux moments de décision) vers l'analyse du dossier */}
      {sections.map((sec) => (
        <div key={sec.id}>
          <div id={sec.id} style={{ ...s.block, scrollMarginTop: 66 }}>
            <div style={s.kicker}>{sec.kicker}</div>
            <h2 style={{ fontSize: 21, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 12 }}>{sec.title}</h2>
            <Blocks items={sec.summary} />
            <Link href={sec.customHref || href(sec.slug)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', marginTop: 4 }}>
              {sec.cta || 'Lire l’article complet'} →
            </Link>
          </div>
          {['payer', 'contester', 'montant', 'proces'].includes(sec.id) && <AnalyseCta />}
        </div>
      ))}

      {/* FAQ */}
      <div style={s.block}>
        <div style={s.kicker}>Foire aux questions</div>
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
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75, marginBottom: 12 }}>Recevoir une réclamation PicRights ne signifie pas que vous êtes automatiquement responsable, ni que le montant demandé est justifié. Chaque dossier soulève des questions propres : qualité du titulaire des droits, originalité de la photographie, preuves disponibles, contexte d’utilisation et évaluation du préjudice.</p>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.75 }}>Une analyse juridique rigoureuse permet de déterminer si la demande est fondée, si elle peut être contestée, ou si une solution amiable est préférable.</p>
      </div>

      <div style={{ background: 'var(--navy)', borderRadius: 12, padding: '24px 28px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 15.5, fontWeight: 500, color: 'white', marginBottom: 3 }}>Vous avez reçu un courrier PicRights ?</div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.55)' }}>Passez de la compréhension à l’action : faites analyser votre dossier sur notre page de traitement dédiée.</div>
        </div>
        <Link href="/litige-afp-picrights/" style={{ flexShrink: 0, background: 'white', color: 'var(--navy)', fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>Faire analyser mon dossier →</Link>
      </div>

      {/* Autres guides */}
      <div style={{ padding: '20px 0 32px' }}>
        <div style={s.kicker}>Nos autres guides</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[['Guide PicRights AFP', '/picrights-afp/'], ['Guide Reuters', '/reuters/'], ['Guide Getty Images', '/getty-images/'], ['Guide Copytrack', '/copytrack/'], ['Toutes les agences', '/agences/'], ['Jurisprudence', '/jurisprudence/'], ['Notre méthode', '/notre-methode/']].map(([label, url]) => (
            <Link key={url} href={url} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
