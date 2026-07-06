import Link from 'next/link'
import CtaBanner from '../components/CtaBanner'
import Blocks from '../components/guide/Blocks'
import { href } from '../components/guide/picrightsArticles'

export const metadata = {
  title: 'Réclamation PicRights : le guide juridique complet pour comprendre, contester et se défendre',
  description: 'Vous avez reçu une réclamation PicRights ? Guide complet : qui est PicRights, faut-il payer, comment vérifier si la demande est fondée, moyens de défense, montant, jurisprudence. Avocat spécialisé en droit d’auteur photographique.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/' },
}

const sections = [
  {
    id: 'qui', kicker: 'La société', title: 'Qu’est-ce que PicRights ?', slug: 'picrights-europe-gmbh',
    summary: [
      ['p', 'PicRights Europe GmbH est une société spécialisée dans la détection des utilisations supposées non autorisées de photographies sur Internet. Elle agit **pour le compte** de nombreux titulaires de droits — agences de presse, banques d’images, photographes, éditeurs — mais n’est généralement **pas elle-même titulaire** des droits qu’elle invoque.'],
      ['p', 'Son rôle consiste à analyser automatiquement le web, identifier des images ressemblant à celles de ses clients, envoyer des demandes amiables de régularisation, puis transmettre certains dossiers à des cabinets d’avocats lorsqu’aucun accord n’est trouvé.'],
      ['key', 'Recevoir un courrier PicRights ne signifie pas que vous êtes condamné : il s’agit d’une demande amiable, ni d’une décision de justice, ni de la preuve définitive d’une contrefaçon.'],
    ],
  },
  {
    id: 'courrier', kicker: 'Le courrier', title: 'Pourquoi avez-vous reçu cette réclamation ?', slug: 'courrier-picrights-que-faire',
    summary: [
      ['p', 'Dans la majorité des dossiers, quelques situations reviennent : une licence insuffisante ou expirée, un site conçu par une agence web ayant inséré une image sans autorisation suffisante, une ancienne version du site toujours invoquée, ou une simple erreur de détection.'],
      ['ul', ['Licence limitée, mauvais usage commercial ou licence expirée', 'Site créé par un prestataire, à votre insu', 'Photographie retirée depuis longtemps mais encore invoquée', 'Correspondance visuelle qui n’est pas nécessairement la même image']],
      ['p', 'Aucune technologie n’est infaillible : une correspondance algorithmique ne démontre pas, à elle seule, l’existence d’une contrefaçon. C’est pourquoi une analyse juridique reste indispensable avant toute décision.'],
    ],
  },
  {
    id: 'payer', kicker: 'La première question', title: 'Faut-il payer immédiatement ?', slug: 'faut-il-payer-picrights',
    summary: [
      ['p', 'Non. Une réclamation PicRights ne doit jamais conduire à un paiement automatique. Cela ne signifie pas que toute demande est infondée — mais payer sans analyse revient à **reconnaître une créance dont le bien-fondé n’a pas été vérifié**.'],
      ['p', 'À ce stade, aucun juge n’a été saisi et aucune condamnation n’existe. En matière civile, c’est à celui qui réclame une indemnisation de démontrer qu’il est titulaire des droits, que la photographie est protégeable, qu’elle a été reproduite et qu’un préjudice existe. La charge de la preuve ne repose pas sur vous.'],
    ],
  },
  {
    id: 'contester', kicker: 'La défense', title: 'Comment vérifier si la demande est fondée ?', slug: 'contester-picrights',
    summary: [
      ['p', 'Chaque dossier mérite un audit. Quatre vérifications structurent l’analyse : qui est réellement titulaire des droits ? la photographie litigieuse est-elle bien celle utilisée sur votre site ? les preuves produites — souvent de simples captures d’écran — sont-elles suffisantes ? la photographie est-elle originale ?'],
      ['p', 'Une réclamation peut parfaitement être contestée, sans que cela signifie qu’elle soit nécessairement infondée. Le rôle de l’avocat consiste précisément à identifier les éventuelles faiblesses du dossier — sur la preuve, la titularité, l’originalité, le montant et le contexte d’utilisation.'],
    ],
  },
  {
    id: 'originalite', kicker: 'Droit d’auteur', title: 'Toutes les photographies sont-elles protégées ?', slug: 'originalite-photographie',
    summary: [
      ['p', 'Non — et c’est le point le plus mal compris. Le droit d’auteur ne protège que les photographies **originales**, celles qui révèlent l’empreinte de la personnalité de leur auteur : choix de cadrage, de lumière, de composition, de mise en scène, du moment.'],
      ['p', 'Une photographie purement documentaire ou réalisée dans un contexte très contraint peut ne pas atteindre ce seuil. Il n’existe aucune présomption selon laquelle une photographie de presse serait automatiquement originale : chaque cliché s’apprécie individuellement.'],
    ],
  },
  {
    id: 'montant', kicker: 'L’indemnisation', title: 'Comment est calculé le montant réclamé ?', slug: 'montant-reclame-picrights',
    summary: [
      ['p', 'Les montants demandés varient fortement. Plusieurs éléments sont généralement invoqués : valeur de licence, durée d’utilisation, absence d’autorisation, frais de gestion, préjudice économique et moral.'],
      ['p', 'Mais ces montants ne sont pas automatiquement retenus par un tribunal. Les juridictions procèdent à leur propre appréciation, et il existe des écarts importants entre les sommes initialement réclamées et les condamnations effectivement prononcées.'],
    ],
  },
  {
    id: 'ignorer', kicker: 'Les suites', title: 'Que se passe-t-il si vous ne répondez pas ?', slug: 'peut-on-ignorer-picrights',
    summary: [
      ['p', 'Ignorer une réclamation n’entraîne pas automatiquement une procédure judiciaire. En pratique, trois scénarios sont possibles : le dossier s’arrête, de nouvelles relances interviennent (parfois une mise en demeure d’avocat), ou, faute d’accord, une assignation est délivrée.'],
      ['p', 'C’est uniquement à ce dernier stade qu’un juge examinerait la titularité, l’originalité, la réalité de l’utilisation, les preuves et le préjudice. L’absence totale de réponse n’est cependant pas la stratégie la plus prudente.'],
    ],
  },
  {
    id: 'negocier', kicker: 'La sortie amiable', title: 'Peut-on négocier avec PicRights ?', slug: 'negocier-picrights',
    summary: [
      ['p', 'Oui. En pratique, de nombreux dossiers se terminent sans procès. Selon les circonstances, plusieurs stratégies sont envisageables : contester totalement la demande, demander des justificatifs complémentaires, proposer une régularisation, négocier le montant ou rechercher une solution transactionnelle.'],
      ['p', 'La bonne stratégie dépend toujours des preuves disponibles, de la photographie concernée, de l’agence représentée, de la jurisprudence applicable et du profil du destinataire. Il n’existe pas de réponse universelle.'],
    ],
  },
  {
    id: 'jurisprudence', kicker: 'Les décisions', title: 'Que disent les tribunaux ?', slug: 'jurisprudence-picrights', cta: 'Voir toute la jurisprudence',
    summary: [
      ['p', 'La jurisprudence sur l’originalité photographique, le mandat, la preuve et le préjudice illustre une **diversité d’issues** : l’originalité est tantôt retenue, tantôt refusée ; les montants sont fréquemment revus par le juge.'],
      ['p', 'Cette diversité confirme qu’aucun dossier ne peut être préjugé à partir du seul courrier reçu — chaque photographie et chaque preuve doivent être examinées individuellement.'],
    ],
  },
  {
    id: 'afp', kicker: 'Les agences', title: 'PicRights et l’AFP', slug: 'picrights-afp',
    summary: [
      ['p', 'PicRights agit fréquemment au nom de l’AFP, mais aussi de Reuters, Associated Press, Paris Match ou d’autres partenaires. Le courrier mentionne généralement l’agence mandante.'],
      ['p', 'Les arguments juridiques applicables restent les mêmes quelle que soit l’agence : titularité et mandat, originalité de la photographie, suffisance des preuves et justification du montant.'],
    ],
  },
  {
    id: 'avis', kicker: 'Réputation', title: 'Peut-on se fier à une réclamation PicRights ?', slug: 'avis-sur-picrights', cta: 'Lire notre avis complet',
    summary: [
      ['p', 'Beaucoup cherchent un « avis sur PicRights » après une première réclamation. La vraie question n’est pas « PicRights est-elle sérieuse ? » — la société est bien réelle — mais **« ma réclamation est-elle juridiquement fondée ? »**. Un avis trouvé sur un forum ne permet jamais de le savoir : chaque dossier dépend de la photographie, des droits, des preuves et du montant.'],
    ],
  },
  {
    id: 'proces', kicker: 'Le risque judiciaire', title: 'Risquez-vous réellement un procès ?', slug: 'picrights-proces',
    summary: [
      ['p', 'Recevoir une réclamation ne signifie pas qu’un procès est engagé, ni qu’il est inévitable. PicRights intervient d’abord en phase amiable ; une assignation n’intervient qu’à défaut d’accord — et ne garantit pas le succès du demandeur, qui devra tout démontrer devant le juge.'],
    ],
  },
  {
    id: 'arnaque', kicker: 'La question qui inquiète', title: 'PicRights est-elle une arnaque ?', slug: 'picrights-arnaque',
    summary: [
      ['p', 'La question revient souvent, mais elle n’appelle ni « oui » ni « non ». Une réclamation PicRights n’est pas automatiquement infondée — mais elle ne signifie pas non plus que vous devez payer. Seul l’examen du bien-fondé juridique (photographie protégée, droits, preuves, montant) permet de trancher.'],
    ],
  },
]

const faq = [
  ['PicRights est-elle une société sérieuse ?', 'Oui. PicRights intervient pour le compte de nombreux titulaires de droits afin de détecter des utilisations supposées non autorisées de photographies. Ce n’est pas une arnaque au sens juridique — mais ses réclamations restent contestables au cas par cas.'],
  ['Dois-je payer immédiatement ?', 'Pas nécessairement. Chaque dossier doit être analysé individuellement avant toute décision de paiement.'],
  ['PicRights peut-elle saisir directement mon compte bancaire ?', 'Non. Une condamnation judiciaire est nécessaire pour obtenir une exécution forcée, sauf accord volontaire de paiement de votre part.'],
  ['Puis-je ignorer totalement le courrier ?', 'Ce n’est généralement pas la stratégie la plus prudente. Une analyse préalable permet de déterminer la réponse la plus adaptée.'],
  ['Supprimer la photographie suffit-il ?', 'Pas toujours. Le retrait de l’image ne met pas automatiquement fin au litige : une demande d’indemnisation peut être maintenue pour une utilisation passée.'],
  ['Une photographie trouvée sur Google est-elle libre de droits ?', 'Non. Google est un moteur de recherche : il ne délivre aucune autorisation d’utilisation.'],
  ['Mon agence web est responsable, puis-je me retourner contre elle ?', 'Cela dépend du contrat signé, de la mission confiée, des garanties données et des circonstances du dossier.'],
]

export default function PicRightsPillar() {
  const s = {
    page: { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
    block: { padding: '22px 0', borderBottom: '0.5px solid var(--border)' },
    kicker: { fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 8 },
  }

  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}
          <Link href="/agences/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>{' → PicRights'}
        </nav>
        <div style={{ display: 'inline-block', fontSize: 11, color: 'var(--blue-mid)', background: 'var(--blue-light)', padding: '3px 10px', borderRadius: 20, marginBottom: 14 }}>Guide complet</div>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 16 }}>Réclamation PicRights : le guide juridique complet pour comprendre, contester et se défendre</h1>
        <p style={{ fontSize: 16, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>Recevoir un courrier ou un e-mail de PicRights est souvent déstabilisant. La société affirme avoir détecté sur votre site une photographie appartenant à une agence de presse ou à un photographe, et vous demande de la retirer et de régler plusieurs centaines, voire plusieurs milliers d’euros.</p>
        <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 14 }}>Beaucoup de destinataires pensent immédiatement qu’ils sont condamnés d’avance. Ce n’est pourtant pas le cas : une réclamation PicRights ne constitue ni une condamnation, ni une décision de justice, ni même la preuve définitive qu’une contrefaçon est caractérisée.</p>
        <p style={{ fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 10 }}>Avant tout paiement, plusieurs questions essentielles doivent être analysées :</p>
        <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none' }}>
          {['PicRights agit-elle réellement pour le titulaire des droits ?', 'La photographie est-elle effectivement protégée par le droit d’auteur ?', 'Les preuves produites sont-elles juridiquement suffisantes ?', 'Le montant réclamé est-il justifié ?', 'Existe-t-il des moyens de défense ?'].map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--secondary)', lineHeight: 1.55, marginBottom: 8 }}>
              <span style={{ color: 'var(--blue)', flexShrink: 0 }}>→</span>{t}
            </li>
          ))}
        </ul>
        <CtaBanner title="Vous avez reçu une réclamation PicRights ?" subtitle="Nous examinons votre dossier et répondons à votre place — forfait 200 € HT." />
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

      {/* Sections — chacune résume puis renvoie vers l'article approfondi */}
      {sections.map((sec) => (
        <div key={sec.id} id={sec.id} style={{ ...s.block, scrollMarginTop: 66 }}>
          <div style={s.kicker}>{sec.kicker}</div>
          <h2 style={{ fontSize: 21, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: 12 }}>{sec.title}</h2>
          <Blocks items={sec.summary} />
          <Link href={href(sec.slug)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', marginTop: 4 }}>
            {sec.cta || 'Lire l’article complet'} →
          </Link>
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

      <CtaBanner title="Faites examiner votre réclamation PicRights" subtitle="Plus de 300 dossiers traités. Chaque dossier examiné personnellement par un avocat — forfait 200 € HT." />

      {/* Autres guides */}
      <div style={{ padding: '20px 0 32px' }}>
        <div style={s.kicker}>Nos autres guides</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[['Guide AFP', '/afp/'], ['Guide Reuters', '/reuters/'], ['Guide Getty Images', '/getty-images/'], ['Guide Copytrack', '/copytrack/'], ['Toutes les agences', '/agences/'], ['Jurisprudence', '/jurisprudence/'], ['Notre méthode', '/notre-methode/']].map(([label, url]) => (
            <Link key={url} href={url} style={{ fontSize: 12, color: 'var(--secondary)', background: 'white', border: '0.5px solid var(--border)', borderRadius: 8, padding: '6px 12px', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
