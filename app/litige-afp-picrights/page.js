import { Fragment } from 'react'
import Link from 'next/link'
import HeroDocs from '../components/HeroDocs'

export const metadata = {
  title: 'Mise en demeure PicRights, Copytrack, Getty Images — Prise en charge par un avocat',
  description: 'Vous avez reçu une mise en demeure de PicRights, Copytrack, Rights Control ou Getty Images ? Avocat spécialisé. Examen complet et réponse sous 48h — forfait 200 € HT.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/litige-afp-picrights/' },
}

const faqItems = [
  { q: 'Est-ce que je dois payer maintenant ?', a: 'Payer sans vérification préalable revient à reconnaître une créance dont le bien-fondé n\'a pas été examiné. Notre intervention consiste d\'abord à vérifier si la réclamation est juridiquement fondée avant de définir la réponse la plus favorable à vos intérêts.' },
  { q: 'Vais-je devoir payer d\'autres honoraires ?', a: 'Non, pour toute la phase amiable. Si une procédure judiciaire devait devenir nécessaire, aucune intervention supplémentaire ne sera engagée sans une nouvelle convention d\'honoraires et votre accord préalable.' },
  { q: 'Est-ce que je risque un procès ?', a: 'La procédure judiciaire reste l\'issue la moins fréquente. Notre intervention dès la phase amiable vise précisément à éviter d\'en arriver là. La chronologie est : mise en demeure → relances → négociation → assignation éventuelle.' },
  { q: 'Qu\'est-ce qu\'une photographie « originale » en droit ?', a: 'Le droit d\'auteur protège uniquement les œuvres portant l\'empreinte de la personnalité de leur auteur. Une photographie purement technique ou documentaire — photo de produit, façade, illustration — ne remplit généralement pas ce critère. C\'est précisément ce que nous vérifions.' },
  { q: 'Et si, après examen, la réclamation est fondée ?', a: 'C\'est précisément l\'intérêt de consulter un avocat avant de répondre. Si l\'analyse montre que la réclamation est fondée, nous négocierons le montant ou proposerons la régularisation la plus avantageuse pour limiter le risque financier.' },
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
      {/* HERO */}
      <div style={{ background: 'var(--navy)' }}>
        <div style={{ ...s.page, padding: '40px 24px 32px' }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
            PicRights · Copytrack · Rights Control · Getty Images · AFP
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 500, color: 'white', lineHeight: 1.35, marginBottom: 10 }}>
            Une réponse maladroite peut vous coûter{' '}
            <em style={{ fontStyle: 'normal', color: '#7ec8e3' }}>plusieurs milliers d'euros.</em>
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 8 }}>
            Vous avez reçu une mise en demeure de PicRights, Copytrack, Getty Images, Rights Control ou d'une agence photographique ? Nous prenons immédiatement votre dossier en charge.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: 20 }}>
            À ce stade, vous n'avez plus besoin de décider si cette réclamation est fondée. C'est précisément notre travail.
          </p>
          <Link href="/litige-afp-picrights/confier/" style={{ display: 'inline-block', background: 'white', color: 'var(--navy)', fontWeight: 600, fontSize: 14, padding: '11px 22px', borderRadius: 8, textDecoration: 'none' }}>
            Confier mon dossier au cabinet →
          </Link>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 8 }}>200 € HT · Convention incluse · Prise en charge sous 48h</div>

          {/* Pile de vraies pièces reçues, anonymisées, qui défilent */}
          <HeroDocs />
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>Pièces réelles reçues par nos clients — informations d'identification masquées</div>
        </div>
      </div>

      <div style={s.page}>

        {/* 3 QUESTIONS */}
        <div style={s.block}>
          <div style={s.label}>Avant de payer, posez-vous ces trois questions</div>
          <div style={{ background: '#F8F7F3', borderRadius: 10, padding: 16 }}>
            {['La photographie est-elle réellement protégée par le droit d\'auteur ?', 'Le montant réclamé est-il juridiquement justifié ?', 'Votre réponse risque-t-elle d\'aggraver votre situation ?'].map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--secondary)', marginBottom: i < 2 ? 10 : 14, lineHeight: 1.5 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--navy)', color: 'white', fontSize: 10, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                {q}
              </div>
            ))}
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', borderTop: '0.5px solid var(--border)', paddingTop: 12 }}>
              Si vous ne pouvez répondre avec certitude, faites examiner votre dossier. Nous pourrons contester, demander des justificatifs, négocier — selon ce que révèle l'examen.
            </div>
          </div>
        </div>

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
              {['PicRights', 'Copytrack', 'Getty Images', 'AFP', 'Rights Control', 'Cabinets mandataires'].map(t => (
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

        {/* PRISE EN CHARGE */}
        <div style={s.block}>
          <div style={s.label}>Votre dossier est pris en charge sous 48 heures</div>
          <div style={{ background: '#F8FBFE', border: '1.5px solid var(--blue)', borderRadius: 10, padding: '16px 18px' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>⏱ Ce que le cabinet fait pour vous dès réception</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 14, fontStyle: 'italic' }}>Chaque dossier est traité personnellement par un avocat. Aucun courrier standard n'est envoyé.</div>
            {[['Examen juridique complet', 'originalité de la photographie, droits invoqués, mandat du demandeur.'], ['Vérification du montant réclamé', 'cohérence juridique de la somme demandée.'], ['Détermination de la réponse', 'contestation, demande de justificatifs, négociation selon l\'examen.'], ['Rédaction et envoi du courrier', 'directement à la partie adverse, en votre nom.'], ['Suivi complet', 'échanges pendant toute la phase amiable, accès à votre espace client.']].map(([title, desc], i) => (
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

        {/* RISQUE RÉEL */}
        <div style={s.block}>
          <div style={s.label}>Que risquez-vous réellement ?</div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '14px 0 12px' }}>
            {[['Mise en demeure', 'Vous êtes ici', true, false], ['Relances', 'Courriers', false, false], ['Négociation', 'Notre intervention', false, true], ['Assignation', 'Éventuelle', false, false], ['Procédure', 'Judiciaire', false, false]].map(([name, desc, isRed, isBlue], i) => (
              <Fragment key={name}>
                <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: isRed ? '#E24B4A' : isBlue ? 'var(--blue)' : '#c7c5ba', margin: '0 auto 6px' }} />
                  <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3 }}>{name}</div>
                  <div style={{ fontSize: 9, color: 'var(--muted)' }}>{desc}</div>
                </div>
                {i < 4 && <div style={{ flex: '0 0 10px', height: 1, background: '#c7c5ba', marginBottom: 14 }} />}
              </Fragment>
            ))}
          </div>
          <div style={{ fontSize: 12, color: 'var(--green)', background: 'var(--green-soft)', border: '0.5px solid #97C459', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 8 }}>
            <span>✓</span>Notre intervention dès la première étape permet fréquemment d'obtenir l'abandon ou la réduction significative de la réclamation.
          </div>
        </div>

        {/* FAQ */}
        <div style={s.block}>
          <div style={s.label}>Ce que vous vous demandez</div>
          {faqItems.map((item, i) => (
            <details key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
              <summary style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {item.q}<span style={{ color: 'var(--muted)', fontSize: 12 }}>↓</span>
              </summary>
              <div style={{ fontSize: 13, color: 'var(--secondary)', lineHeight: 1.65, paddingBottom: 14 }}>{item.a}</div>
            </details>
          ))}
        </div>

        {/* FORFAIT */}
        <div id="forfait" style={s.block}>
          <div style={s.label}>Ce que comprend le forfait</div>
          <div style={{ border: '1.5px solid var(--blue)', borderRadius: 12, padding: 20, background: '#F8FBFE' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>Phase amiable — prise en charge complète</div>
              <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--navy)' }}>200 € <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--muted)' }}>HT</span></div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>À comparer avec une réclamation de <strong style={{ color: '#A32D2D' }}>800 € à 5 000 €</strong> — forfait indépendant du montant réclamé.</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', marginBottom: 8 }}>Ce que vous achetez</div>
            {['Un avocat prend votre dossier en charge sous 48h', 'Examen juridique complet, personnalisé', 'Rédaction et envoi du courrier adapté', 'Suivi jusqu\'à clôture de la phase amiable', 'Convention d\'honoraires et facture incluses'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--secondary)', marginBottom: 7 }}>
                <span style={{ color: 'var(--blue)', flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
            <div style={{ fontSize: 12, color: 'var(--blue-mid)', background: 'var(--blue-light)', borderRadius: 8, padding: '10px 14px', margin: '12px 0', lineHeight: 1.55 }}>
              Le forfait couvre l'examen complet et la rédaction du courrier le plus favorable — contestation, demande de justificatifs, négociation, selon ce que révèle l'examen.
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
          {[['PicRights', 'PicRights réclamait 980 € pour une photographie de produit utilisée sur un site e-commerce.', 'Photographie de catalogue · 2023', '/cas-pratiques/picrights-photo-produit-980'],
            ['Copytrack', 'Copytrack réclamait 1 400 € pour une photographie immobilière publiée sur un portail d\'annonces.', 'Photo immobilière · 2023', '/cas-pratiques/copytrack-photo-immobiliere-1400'],
            ['Getty Images', 'Getty Images réclamait 2 200 € pour une photographie de ville illustrant un article de blog.', 'Photo touristique · 2024', '/cas-pratiques/getty-images-photo-ville-2200']].map(([tag, title, detail, href]) => (
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[['Guide : mise en demeure PicRights', '/picrights'], ['Guide : mise en demeure Copytrack', '/copytrack'], ['Guide : mise en demeure Getty Images', '/getty-images'], ['Jurisprudence commentée', '/jurisprudence'], ['Tous les cas pratiques', '/cas-pratiques'], ['Notre méthode', '/notre-methode']].map(([label, href]) => (
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
    </>
  )
}
