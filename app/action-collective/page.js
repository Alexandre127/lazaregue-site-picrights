import Link from 'next/link'
import JsonLd from '../components/JsonLd'

export const metadata = {
  title: 'Action collective — méthodes de recouvrement abusives des photothèques | Lazarègue Avocats',
  description: 'PicRights, Sucré Salé / Rights Control, AFP, Reuters, Getty… Un tribunal a jugé fautive la lettre d\'intimidation type. Rejoignez une action collective coordonnée contre les réclamations abusives pour photographies.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/action-collective/' },
}

// Compteur d'avancement — À COMPLÉTER avec les chiffres réels avant publication.
// Tant que participants === null, un bloc neutre « en constitution » est affiché
// (aucun chiffre inventé, conformément à la mention « seuls les dossiers réels »).
const compteur = {
  participants: null, // ex : 78
  objectif: 100,
  depots: null,       // ex : 127
  villes: [],         // ex : [['Paris', 27], ['Marseille', 19], ['Lyon', 8]]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lazaregue-avocats.fr/' },
    { '@type': 'ListItem', position: 2, name: 'Action collective — recouvrement abusif', item: 'https://lazaregue-avocats.fr/action-collective/' },
  ],
}

export default function ActionCollective() {
  const wrap = { maxWidth: 900, margin: '0 auto', padding: '0 24px' }
  const narrow = { maxWidth: 720, margin: '0 auto', padding: '0 24px' }
  const eyebrow = { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--blue)', fontWeight: 600, marginBottom: 14 }
  const secTitle = { fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: 12 }
  const secIntro = { fontSize: 15.5, color: 'var(--secondary)', lineHeight: 1.7, maxWidth: 620 }
  const card = { background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 12, padding: 24 }
  const agences = ['PicRights', 'Sucré Salé', 'Rights Control', 'AFP', 'Reuters', 'Associated Press', 'Getty Images', 'Copytrack', 'MaxPPP']

  const holdings = [
    {
      tagBg: 'var(--green-soft)', tagColor: 'var(--green)', tag: 'Méthode de recouvrement — jugée fautive',
      quote: '« Cette lettre d’intimidation […] comportant des chefs de demandes sans le moindre fondement, tels qu’une pénalité pour défaut de crédits photo, des frais de gestion interne […], des frais de recouvrement. »',
      gloss: 'Le tribunal a indemnisé notre cliente pour le préjudice subi avant tout procès, du fait de cette lettre.',
    },
    {
      tagBg: 'var(--green-soft)', tagColor: 'var(--green)', tag: '« Transaction » sans concession',
      quote: '« Présenter comme une issue transactionnelle le paiement d’une indemnité ne comportant aucune concession, et dont l’évaluation unilatérale est sans rapport avec le préjudice réellement subi. »',
      gloss: 'Exactement le schéma des courriers reçus par des milliers de destinataires.',
    },
    {
      tagBg: 'var(--blue-light)', tagColor: 'var(--blue-mid)', tag: 'Droit d’auteur — écarté',
      quote: '« La photographie dont s’agit ne peut prétendre accéder à la protection du droit d’auteur. »',
      gloss: 'Un cliché banal (ici, un petit-déjeuner) ne devient pas une œuvre parce qu’une photothèque le facture.',
    },
  ]

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <div style={{ background: 'var(--navy)', color: '#eef2f8' }}>
        <div style={{ ...wrap, padding: '64px 24px 72px' }}>
          <p style={{ ...eyebrow, color: '#7ec8e3' }}>Action collective coordonnée · Photothèques &amp; agences de presse</p>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 600, lineHeight: 1.15, maxWidth: 18 + 'ch', color: '#fff', marginBottom: 20 }}>
            Une lettre vous réclame des milliers d’euros. Un tribunal vient d’en reconnaître le <span style={{ color: '#7ec8e3' }}>caractère fautif.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 560, color: 'rgba(255,255,255,0.8)', marginBottom: 30 }}>
            PicRights, Sucré Salé / Rights Control, AFP, Reuters, Getty… Les mêmes courriers, les mêmes montants gonflés, les mêmes menaces. Réunissons les dossiers pour faire juger ces méthodes pour ce qu’elles sont.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="#rejoindre" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Déposer mon courrier →</a>
            <a href="#jugement" style={{ background: 'transparent', color: '#eef2f8', padding: '14px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>Voir la décision</a>
          </div>
          <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.6)', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <span>· Analyse d’éligibilité gratuite</span><span>· Sans engagement</span><span>· Secret professionnel</span>
          </div>
        </div>
      </div>

      {/* POURQUOI CETTE PAGE EXISTE */}
      <div style={{ background: 'var(--bg)', padding: '56px 0' }}>
        <div style={narrow}>
          <p style={{ ...eyebrow, textAlign: 'center' }}>Pourquoi cette page existe</p>
          <p style={{ fontSize: 'clamp(18px, 2.6vw, 23px)', lineHeight: 1.5, color: 'var(--text)', textAlign: 'center' }}>
            Depuis plusieurs années, des centaines d’entreprises nous transmettent des courriers dont la structure, les montants réclamés et les arguments apparaissent remarquablement similaires. Cette répétition nous conduit à étudier si ces pratiques, appréciées dans leur ensemble, soulèvent des questions dépassant le simple cadre d’un litige individuel.
          </p>
        </div>
      </div>

      {/* PIÈCE MAÎTRESSE : LE JUGEMENT */}
      <div id="jugement" style={{ background: 'var(--navy)', padding: '64px 0', scrollMarginTop: 56 }}>
        <div style={wrap}>
          <p style={{ ...eyebrow, color: '#7ec8e3' }}>La décision qui change le rapport de force</p>
          <h2 style={{ ...secTitle, color: '#fff', maxWidth: 20 + 'ch' }}>Ce n’est plus une théorie : un juge l’a écrit.</h2>

          <div style={{ maxWidth: 720, margin: '32px auto 0', background: '#efe9db', borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 60px -30px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', padding: '20px 26px', background: '#e7e0d0', borderBottom: '1px solid #d9d2c3' }}>
              <h3 style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>Tribunal judiciaire de Rennes<br />2<sup>e</sup> chambre civile — 9 mars 2026</h3>
              <div style={{ fontSize: 11.5, color: '#6b6656', textAlign: 'right', lineHeight: 1.7 }}>N° RG 23/05206<br />Sucré Salé c/ [notre cliente]<br />Photothèque photocuisine.fr</div>
            </div>
            <div style={{ padding: '22px 26px 26px' }}>
              {holdings.map((h, i) => (
                <div key={i} style={{ padding: '16px 0', borderBottom: i < holdings.length - 1 ? '1px dashed #d9d2c3' : 'none' }}>
                  <span style={{ display: 'inline-block', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '3px 9px', borderRadius: 20, marginBottom: 10, background: h.tagBg, color: h.tagColor }}>{h.tag}</span>
                  <blockquote style={{ fontSize: 15.5, lineHeight: 1.5, color: '#2b3140', paddingLeft: 14, borderLeft: '3px solid var(--blue)', margin: 0 }}>{h.quote}</blockquote>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>{h.gloss}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 26px', background: '#e7e0d0', borderTop: '1px solid #d9d2c3', fontSize: 12.5, color: '#5c5647' }}>
              Décision obtenue par <strong style={{ color: 'var(--text)' }}>Maître Alexandre Lazarègue</strong>, avocat plaidant pour la partie défenderesse.
            </div>
          </div>

          <div style={{ maxWidth: 720, margin: '22px auto 0', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10, padding: '14px 18px', fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
            Décision de première instance, propre à son espèce. Elle illustre une tendance — contrôle des montants, sanction des lettres fautives — sans valoir garantie de résultat : chaque dossier est apprécié individuellement.
          </div>
        </div>
      </div>

      {/* POURQUOI SE REGROUPER */}
      <div style={{ padding: '64px 0' }}>
        <div style={wrap}>
          <p style={eyebrow}>Pourquoi se regrouper</p>
          <h2 style={secTitle}>Seul, on paie pour avoir la paix. À plusieurs, on documente un système.</h2>
          <p style={secIntro}>Ces courriers misent sur l’isolement et la peur du destinataire. L’action collective inverse ce déséquilibre.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 32 }}>
            {[
              ['01', 'La répétition fait preuve', 'Un courrier isolé se conteste ; cent courriers identiques dessinent une méthode standardisée que le juge peut apprécier.'],
              ['02', 'Les coûts se mutualisent', 'Une analyse et une stratégie communes réduisent le coût pour chaque participant, à rebours de la logique « payer vite pour moins cher ».'],
              ['03', 'Le rapport de force change', 'Face à un groupe organisé et représenté, le calcul « intimider pour encaisser » perd tout son intérêt économique.'],
              ['04', 'Votre dossier reste le vôtre', 'Vous rejoignez une action coordonnée, mais votre situation est examinée individuellement et défendue sur ses propres mérites.'],
            ].map(([n, t, d]) => (
              <div key={n} style={card}>
                <div style={{ fontFamily: 'monospace', fontSize: 12.5, color: 'var(--blue)', marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontSize: 16.5, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÉLIGIBILITÉ */}
      <div style={{ background: 'var(--surface)', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '64px 0' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>
          <div>
            <p style={eyebrow}>Qui peut rejoindre</p>
            <h2 style={secTitle}>Vous avez reçu l’un de ces courriers ?</h2>
            <p style={secIntro}>Émis directement par ces sociétés, par leur « département » de recouvrement, ou par un avocat mandaté.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 16 }}>
              {agences.map((a) => (
                <span key={a} style={{ fontSize: 13, padding: '7px 14px', border: '1px solid var(--border)', borderRadius: 30, background: 'var(--bg)', color: 'var(--secondary)' }}>{a}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--bg)', border: '0.5px solid var(--border)', borderRadius: 12, padding: 26 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Une seule condition</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 16 }}>Avoir été visé par ce type de courrier. Le reste n’y change rien :</p>
            {[
              'Peu importe l’émetteur — l’agence elle-même, un intermédiaire (PicRights…) ou un avocat mandaté.',
              'Peu importe que vous ayez déjà payé, ou non.',
              'Peu importe que vous ayez déjà pris un avocat pour répondre, ou non.',
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.55 }}>
                <span style={{ color: 'var(--green)', flexShrink: 0, fontWeight: 700 }}>✓</span><span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMENT ÇA MARCHE */}
      <div style={{ padding: '64px 0' }}>
        <div style={wrap}>
          <p style={eyebrow}>Comment ça marche</p>
          <h2 style={secTitle}>Quatre étapes, aucun engagement avant d’y voir clair.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 22, marginTop: 32 }}>
            {[
              ['01', 'Constituez votre dossier', 'Le courrier reçu, l’identité de votre structure (Kbis ou statuts + PV d’AG) et la pièce d’identité du représentant.'],
              ['02', 'Analyse d’éligibilité', 'Vérification selon la Grille Lazarègue® : originalité, titularité, preuve, montant.'],
              ['03', 'Vous rejoignez le groupe', 'Si votre dossier s’y prête, vous réglez le ticket d’entrée de 90 € HT et signez le mandat.'],
              ['04', 'L’action en justice', 'Une action civile est engagée pour faire reconnaître le caractère abusif de ces réclamations — invoquer le droit d’auteur sur des photographies dépourvues d’originalité, puis exiger des sommes sans rapport avec un préjudice réel — et en obtenir la cessation.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ paddingTop: 18, borderTop: '2px solid var(--border)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -1, left: 0, width: 28, height: 2, background: 'var(--blue)' }} />
                <div style={{ fontFamily: 'monospace', fontSize: 12.5, color: 'var(--blue)' }}>{n}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text)', margin: '6px 0 6px' }}>{t}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOUT OU RIEN */}
      <div style={{ background: 'var(--surface)', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '64px 0' }}>
        <div style={wrap}>
          <p style={eyebrow}>Le principe : tout ou rien</p>
          <h2 style={secTitle}>Une participation unique — remboursée si le groupe n’atteint pas la masse critique.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 30 }}>
            <div style={card}>
              <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>90 €<span style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 400 }}> HT</span></div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '12px 0 6px' }}>Le ticket d’entrée</h3>
              <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>Participation unique pour rejoindre l’action, identique quel que soit le montant qu’on vous réclame.</p>
            </div>
            <div style={card}>
              <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>100</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '12px 0 6px' }}>Le seuil de déclenchement</h3>
              <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>En deçà de cent participants, l’action n’atteint pas la masse critique qui donne son sens à la démarche collective.</p>
            </div>
            <div style={{ ...card, borderColor: 'var(--green)' }}>
              <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--green)', lineHeight: 1 }}>Remboursé</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '12px 0 6px' }}>Si le seuil n’est pas atteint</h3>
              <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>Votre participation vous est intégralement restituée. Vous n’êtes engagé que si l’action se lance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCLE JURIDIQUE */}
      <div style={{ background: 'var(--navy)', color: '#dfe6f0', padding: '64px 0' }}>
        <div style={wrap}>
          <p style={{ ...eyebrow, color: '#7ec8e3' }}>Sur quoi l’action s’appuie</p>
          <h2 style={{ ...secTitle, color: '#fff' }}>L’abus du droit d’agir et la responsabilité civile, au cœur de l’action.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginTop: 32 }}>
            {[
              ['1 · L’abus du droit d’agir', 'Le droit d’agir en justice dégénère en abus lorsqu’il est exercé en connaissance de l’absence de mérite de la demande, par légèreté inexcusable ou dans l’intention de nuire.', 'Notion jurisprudentielle'],
              ['2 · La responsabilité civile', 'Réclamer des sommes détachées de tout préjudice réel, en invoquant un droit d’auteur là où la photographie est dépourvue d’originalité, peut constituer une faute engageant la responsabilité de son auteur.', 'C. civ., art. 1240'],
              ['3 · Des pratiques déjà jugées fautives', 'La lettre d’intimidation type — « transaction » sans concession, montants sans fondement — a été reconnue fautive par un tribunal, qui a indemnisé son destinataire.', 'TJ Rennes, 9 mars 2026, n° 23/05206'],
            ].map(([t, d, cite]) => (
              <div key={t} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 15.5, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: '#aebccf', lineHeight: 1.6 }}>{d}</p>
                <span style={{ fontFamily: 'monospace', fontSize: 11.5, color: '#7ec8e3', marginTop: 12, display: 'block' }}>{cite}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22, fontSize: 13, color: '#aebccf', borderLeft: '3px solid rgba(126,200,227,0.45)', paddingLeft: 16, maxWidth: 720, lineHeight: 1.65 }}>
            En complément, lorsque le destinataire est un <strong style={{ color: '#fff' }}>consommateur</strong>, le droit de la consommation ajoute le terrain des pratiques commerciales agressives (art. L.121-6). Ce fondement ne s’applique pas aux sociétés (SAS, SARL, SCI) : il n’est mobilisé qu’au cas par cas.
          </div>
          <div style={{ marginTop: 28, background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(126,200,227,0.3)', borderRadius: 12, padding: '22px 24px' }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>L’ambition de l’action</h3>
            <p style={{ fontSize: 14, color: '#c3d0e2', lineHeight: 1.65 }}>Elle est fondée sur l’abus du droit d’agir, la responsabilité civile et le caractère fautif de pratiques déjà sanctionnées. Une décision a déjà reconnu fautive la lettre d’intimidation type ; réunir un nombre significatif de dossiers vise à faire reconnaître cette faute à l’échelle du procédé lui-même, et non plus au cas par cas. C’est une action de conviction, menée avec rigueur — et sans promesse de résultat.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '64px 0' }}>
        <div style={narrow}>
          <p style={eyebrow}>Les questions que vous vous posez</p>
          <h2 style={{ ...secTitle, marginBottom: 24 }}>Avant de rejoindre</h2>
          {[
            ['Est-ce une « action de groupe » au sens de la loi ?', 'Non, et nous tenons à être précis : l’action de groupe légale est réservée à des associations agréées, dans des domaines limités qui n’incluent pas ce contentieux. Il s’agit ici d’une action collective coordonnée : des mandats individuels réunis autour d’une stratégie commune. Chaque dossier conserve son autonomie.'],
            ['Combien cela coûte-t-il ?', 'Un ticket d’entrée unique de 90 € HT pour rejoindre l’action, identique quel que soit le montant qu’on vous réclame. Le principe est celui du tout ou rien : si l’action ne réunit pas au moins 100 participants, elle n’est pas lancée et votre participation vous est intégralement remboursée. L’analyse d’éligibilité, elle, reste gratuite.'],
            ['Suis-je éligible ?', 'Si vous avez reçu un courrier de l’une de ces sociétés réclamant une indemnité pour une photographie, déposez-le : l’analyse détermine gratuitement si votre situation entre dans le cadre de l’action.'],
            ['Que risque-t-on en rejoignant ?', 'Rejoindre le groupe ne vous expose pas plus qu’une défense individuelle — au contraire, vous n’êtes plus seul face à la pression. Aucune promesse de résultat n’est faite : chaque dossier reste jugé sur ses faits propres, et l’issue varie selon les cas.'],
          ].map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '0.5px solid var(--border)', padding: '16px 0' }}>
              <summary style={{ fontSize: 15.5, fontWeight: 500, color: 'var(--text)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                {q}<span style={{ color: 'var(--blue)' }}>+</span>
              </summary>
              <p style={{ marginTop: 12, fontSize: 14, color: 'var(--secondary)', lineHeight: 1.65 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* OÙ EN EST L'ACTION (compteur — honnête tant que non renseigné) */}
      <div style={{ background: 'var(--surface)', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '56px 0' }}>
        <div style={wrap}>
          <p style={eyebrow}>Où en est l’action</p>
          <h2 style={secTitle}>Le groupe se constitue.</h2>
          {compteur.participants === null ? (
            <p style={{ ...secIntro, marginTop: 8 }}>
              L’action est en cours de constitution. Un premier bilan chiffré — nombre de dossiers réellement déposés et répartition — sera affiché ici dès qu’il sera disponible. Aucun compteur artificiel : seuls les dossiers réellement reçus seront comptabilisés.
            </p>
          ) : (
            <div style={{ marginTop: 24, maxWidth: 460 }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: 'var(--navy)', lineHeight: 1 }}>{compteur.participants}<span style={{ color: 'var(--blue)' }}> / {compteur.objectif}</span></div>
              <div style={{ height: 12, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, margin: '16px 0 8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${Math.min(100, Math.round((compteur.participants / compteur.objectif) * 100))}%`, background: 'linear-gradient(90deg, var(--blue), var(--green))' }} />
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}><span>Participants engagés</span><span>Objectif : {compteur.objectif}</span></div>
              {compteur.depots ? <div style={{ marginTop: 14, fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>Déjà {compteur.depots} dossiers déposés en France</div> : null}
            </div>
          )}
        </div>
      </div>

      {/* CTA FINALE */}
      <div id="rejoindre" style={{ background: 'var(--green-soft)', borderTop: '0.5px solid var(--border)', padding: '64px 0', scrollMarginTop: 56 }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={secTitle}>Réunissons les dossiers. Rejoignez l’action.</h2>
            <p style={{ fontSize: 15, color: 'var(--secondary)', lineHeight: 1.7, maxWidth: 440 }}>
              Déposez votre courrier : l’analyse d’éligibilité est gratuite. Le ticket d’entrée est de 90 € HT — remboursé intégralement si l’action ne réunit pas 100 participants.
            </p>
          </div>
          <div style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 12, padding: 28, boxShadow: '0 16px 40px -28px rgba(0,0,0,0.3)' }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Constituer mon dossier</h3>
            <p style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 16 }}>Trois pièces suffisent. L’éligibilité est vérifiée gratuitement, avant tout paiement.</p>
            {[
              ['01', 'Le courrier reçu — mise en demeure, e-mail ou lettre d’avocat.'],
              ['02', 'L’identité de la structure — Kbis / SIREN (société), ou statuts + PV d’AG (association).'],
              ['03', 'La pièce d’identité du représentant légal.'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.5 }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--blue)', fontSize: 12 }}>{n}</span><span>{t}</span>
              </div>
            ))}
            <Link href="/litige-afp-picrights/#analyseur" style={{ display: 'block', textAlign: 'center', background: 'var(--blue)', color: '#fff', padding: '14px', borderRadius: 9, fontWeight: 600, fontSize: 15, textDecoration: 'none', marginTop: 18 }}>
              Vérifier mon éligibilité — gratuit
            </Link>
            <p style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 14, textAlign: 'center', lineHeight: 1.5 }}>
              Éligibilité confirmée → ticket 90 € HT. Tout ou rien : remboursé si l’action ne réunit pas 100 participants · Secret professionnel.
            </p>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div style={{ ...narrow, padding: '28px 24px 8px' }}>
        <div style={{ background: 'var(--bg)', border: '0.5px solid var(--border)', borderRadius: 10, padding: '14px 18px', fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>
          Cette page présente une action collective coordonnée et n’emporte aucune promesse de résultat. Les décisions citées sont propres à leur espèce. Elle ne constitue pas une consultation juridique.
        </div>
      </div>
    </>
  )
}
