'use client'

// Tunnel « Confier mon dossier » — wizard 4 étapes à route unique.
//
// Étape 1 Dépôt · 2 Convention (signature) · 3 Paiement · 4 Confirmation.
// L'état (champs + fichiers) reste en mémoire d'une étape à l'autre.
//
// À BRANCHER (Milestone 2, avec les clés en variables d'env Vercel) :
//   - submitDossier() : POST multipart vers /litige-afp-picrights/api/dossier
//     (upload stockage + création dossier), puis création d'une session
//     Stripe Checkout et redirection ; la signature passe par Yousign.
// Tant que ce n'est pas branché, l'étape 3 simule le paiement et affiche
// l'étape 4. Les repères sont marqués « TODO(backend) ».

import { useState, useEffect } from 'react'

const ORGANISMES = ['PicRights', 'Copytrack', 'Getty Images', 'Rights Control', 'AFP', 'Autre']

const STEPS = ['Dépôt', 'Convention', 'Paiement', 'Confirmation']

const NAVY = 'var(--navy)'

const fieldWrap = { marginBottom: 14 }
const labelStyle = { display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }
const inputStyle = {
  width: '100%', padding: '10px 12px', fontSize: 14, color: 'var(--text)',
  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, outline: 'none',
}
const req = { color: 'var(--red)' }

function Field({ label, required, children, hint }) {
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label} {required && <span style={req}>*</span>}</label>
      {children}
      {hint && <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{hint}</div>}
    </div>
  )
}

function FileInput({ label, required, multiple, onChange, files, hint }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <label style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '11px 12px', cursor: 'pointer',
        background: '#F8FBFE', border: '1px dashed var(--blue)', borderRadius: 8, fontSize: 13, color: 'var(--blue-mid)',
      }}>
        <span style={{ fontWeight: 600 }}>＋ Choisir un fichier{multiple ? '(s)' : ''}</span>
        <span style={{ color: 'var(--muted)', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {files && files.length ? Array.from(files).map(f => f.name).join(', ') : 'PDF, JPG ou PNG'}
        </span>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple={multiple}
          onChange={(e) => onChange(e.target.files)}
          style={{ display: 'none' }}
        />
      </label>
    </Field>
  )
}

function Stepper({ step }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
      {STEPS.map((s, i) => {
        const n = i + 1
        const done = n < step
        const active = n === step
        return (
          <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 600,
                background: done || active ? NAVY : 'var(--surface)',
                color: done || active ? '#fff' : 'var(--muted)',
                border: `1.5px solid ${done || active ? NAVY : 'var(--border)'}`,
              }}>{done ? '✓' : n}</div>
              <div style={{ fontSize: 9, color: active ? 'var(--text)' : 'var(--muted)', fontWeight: active ? 600 : 400, whiteSpace: 'nowrap' }}>{s}</div>
            </div>
            {i < STEPS.length - 1 && <div style={{ flex: 1, height: 1.5, background: n < step ? NAVY : 'var(--border)', margin: '0 6px', marginBottom: 14 }} />}
          </div>
        )
      })}
    </div>
  )
}

const primaryBtn = {
  display: 'block', width: '100%', padding: 13, background: NAVY, color: '#fff', border: 'none',
  borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', textAlign: 'center',
}
const ghostBtn = {
  display: 'inline-block', padding: '10px 14px', background: 'transparent', color: 'var(--muted)',
  border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, cursor: 'pointer',
}

// Styles du texte de la convention (étape 2)
const cH = { fontWeight: 700, color: 'var(--text)', fontSize: 12, letterSpacing: '0.02em', margin: '15px 0 5px', textTransform: 'uppercase' }
const cP = { margin: '0 0 7px' }
const cUL = { margin: '0 0 7px', paddingLeft: 16 }
const cHR = { height: 1, background: 'var(--border)', margin: '12px 0' }

export default function ConfierTunnel() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    prenom: '', nom: '', societe: '', email: '', telephone: '',
    organisme: '', montant: '', delai: '',
  })
  const [miseEnDemeure, setMiseEnDemeure] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [echanges, setEchanges] = useState(null)
  const [signature, setSignature] = useState('')
  const [consent, setConsent] = useState(false)
  const [execNow, setExecNow] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  // Retour depuis Stripe Checkout (le parcours a rechargé) : on affiche
  // directement la bonne étape.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.get('paid') === '1') setStep(4)
    else if (p.get('canceled') === '1') { setStep(3); setError('Paiement annulé — vous pouvez réessayer.') }
  }, [])

  function validateStep1() {
    const need = ['prenom', 'nom', 'societe', 'email', 'telephone', 'organisme', 'montant']
    for (const k of need) if (!String(data[k]).trim()) return 'Merci de compléter tous les champs obligatoires.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'L’adresse e-mail ne semble pas valide.'
    if (!miseEnDemeure || !miseEnDemeure.length) return 'Merci de joindre la mise en demeure reçue.'
    return ''
  }

  function next1() {
    const err = validateStep1()
    if (err) { setError(err); return }
    setError(''); setStep(2)
  }

  function next2() {
    if (!signature.trim()) { setError('Merci d’inscrire votre nom pour signer la convention.'); return }
    if (!consent) { setError('Merci de cocher la case d’acceptation de la convention.'); return }
    if (!execNow) { setError('Merci de confirmer la demande d’exécution immédiate de la mission.'); return }
    setError(''); setStep(3)
  }

  async function pay() {
    setSubmitting(true); setError('')
    try {
      const fd = new FormData()
      Object.entries(data).forEach(([k, v]) => fd.append(k, v))
      fd.append('signature', signature)
      const addFiles = (field, fl) => { if (fl) Array.from(fl).forEach((f) => fd.append(field, f)) }
      addFiles('miseEnDemeure', miseEnDemeure)
      addFiles('photo', photo)
      addFiles('echanges', echanges)

      const res = await fetch('/litige-afp-picrights/api/checkout/', { method: 'POST', body: fd })
      const json = await res.json().catch(() => ({}))
      // Paiement configuré : redirection vers Stripe Checkout.
      if (res.ok && json.url) { window.location.href = json.url; return }
      // Repli (clés non encore posées) : on affiche la confirmation.
      if (res.ok && json.simulated) { setStep(4); return }
      setError(json.error || 'Le paiement n’a pas pu être initié. Réessayez ou contactez le cabinet.')
    } catch (e) {
      setError('Le paiement n’a pas pu être initié. Réessayez ou contactez le cabinet.')
    } finally {
      setSubmitting(false)
    }
  }

  const wrap = { maxWidth: 560, margin: '0 auto', padding: '28px 24px 48px' }
  const card = { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 22 }

  return (
    <div style={wrap}>
      <Stepper step={step} />

      {error && (
        <div style={{ background: '#FCEBEB', color: '#5e2424', border: '0.5px solid var(--red)', borderRadius: 8, padding: '10px 12px', fontSize: 13, marginBottom: 14 }}>
          {error}
        </div>
      )}

      {/* ÉTAPE 1 — DÉPÔT */}
      {step === 1 && (
        <div style={card}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: NAVY, marginBottom: 4 }}>Déposez votre dossier</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 18, lineHeight: 1.5 }}>
            Transmettez les pièces reçues. Aucun échange préalable n’est nécessaire : le cabinet examine votre dossier dès réception.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Prénom" required><input style={inputStyle} value={data.prenom} onChange={set('prenom')} /></Field>
            <Field label="Nom" required><input style={inputStyle} value={data.nom} onChange={set('nom')} /></Field>
          </div>
          <Field label="Société" required><input style={inputStyle} value={data.societe} onChange={set('societe')} /></Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="E-mail" required><input style={inputStyle} type="email" value={data.email} onChange={set('email')} /></Field>
            <Field label="Téléphone" required><input style={inputStyle} type="tel" value={data.telephone} onChange={set('telephone')} /></Field>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Organisme concerné" required>
              <select style={inputStyle} value={data.organisme} onChange={set('organisme')}>
                <option value="">Sélectionner…</option>
                {ORGANISMES.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Montant réclamé (€)" required><input style={inputStyle} inputMode="numeric" value={data.montant} onChange={set('montant')} placeholder="ex. 1 400" /></Field>
          </div>
          <Field label="Délai indiqué dans le courrier" hint="Date limite mentionnée dans la mise en demeure, si connue.">
            <input style={inputStyle} value={data.delai} onChange={set('delai')} placeholder="ex. 14 jours, ou 30/07/2026" />
          </Field>

          <div style={{ height: 1, background: 'var(--border)', margin: '8px 0 16px' }} />

          <FileInput label="Mise en demeure reçue" required files={miseEnDemeure} onChange={setMiseEnDemeure} hint="Le courrier ou l’e-mail de réclamation (PDF de préférence)." />
          <FileInput label="Photographie litigieuse" files={photo} onChange={setPhoto} hint="L’image visée par la réclamation, si vous l’avez." />
          <FileInput label="Échanges éventuels" multiple files={echanges} onChange={setEchanges} hint="Vos éventuels échanges avec l’organisme." />

          <button style={{ ...primaryBtn, marginTop: 8 }} onClick={next1}>Continuer vers la convention →</button>
          <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
            🔒 Données chiffrées · Secret professionnel · Pièces utilisées uniquement pour le traitement de votre dossier.
          </p>
        </div>
      )}

      {/* ÉTAPE 2 — CONVENTION */}
      {step === 2 && (
        <div style={card}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: NAVY, marginBottom: 4 }}>Convention d’honoraires</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>Phase amiable — pré-remplie à partir de vos informations.</p>

          <div style={{ background: '#F8F7F3', border: '1px solid var(--border)', borderRadius: 8, padding: '16px 18px', fontSize: 12, color: 'var(--secondary)', lineHeight: 1.6, maxHeight: 340, overflowY: 'auto' }}>
            <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: 13.5, marginBottom: 2 }}>CONVENTION D’HONORAIRES</div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 12 }}>Prise en charge d’une mise en demeure photographique — PicRights, Copytrack, Getty Images, Rights Control, AFP et organismes comparables.</div>

            <div style={cH}>Entre les soussignés</div>
            <p style={cP}>
              <strong>Le Client</strong> : {(data.prenom || data.nom) ? <strong>{data.prenom} {data.nom}</strong> : 'les informations d’identité renseignées lors de la commande'}{data.societe ? <> — {data.societe}</> : null}. Ci-après « le Client ».
            </p>
            <p style={cP}>
              <strong>Lazarègue Avocats</strong>, cabinet d’avocats au Barreau de Paris, 18 rue de Tilsitt – 75017 Paris, représenté par Maître Alexandre Lazarègue. Ci-après « l’Avocat ».
            </p>

            <div style={cH}>Article 1 — Objet de la mission</div>
            <p style={cP}>
              Le Client confie à l’Avocat la prise en charge d’une mise en demeure reçue d’un organisme revendiquant des droits sur une ou plusieurs photographies (notamment PicRights, Copytrack, Getty Images, Rights Control, l’AFP ou tout organisme comparable{data.organisme ? <> — en l’espèce&nbsp;: <strong>{data.organisme}</strong></> : null}). La mission est exclusivement limitée à la <strong>phase amiable</strong>.
            </p>

            <div style={cH}>Article 2 — Diligences comprises dans le forfait</div>
            <ul style={cUL}>
              <li>analyse juridique complète de la mise en demeure ;</li>
              <li>examen de la photographie litigieuse ;</li>
              <li>vérification des droits invoqués ;</li>
              <li>vérification de la qualité du demandeur ;</li>
              <li>analyse du montant réclamé ;</li>
              <li>détermination de la stratégie adaptée au dossier ;</li>
              <li>rédaction et envoi du courrier de réponse à la partie adverse ;</li>
              <li>échanges avec la partie adverse pendant toute la phase amiable ;</li>
              <li>information régulière du Client sur l’évolution du dossier.</li>
            </ul>
            <p style={cP}>Chaque dossier est traité personnellement par un avocat. L’Avocat est tenu à une obligation de moyens et non de résultat.</p>

            <div style={cH}>Article 3 — Honoraires</div>
            <p style={cP}>Les honoraires sont fixés forfaitairement à <strong>200 € HT</strong>, soit <strong>240 € TTC</strong>. Le forfait est indépendant du montant réclamé, du temps consacré au dossier et du nombre d’échanges nécessaires. Le règlement intervient intégralement lors de la commande. La mission débute après encaissement des honoraires.</p>

            <div style={cH}>Article 4 — Ce qui n’est pas compris</div>
            <ul style={cUL}>
              <li>toute procédure judiciaire, d’appel ou d’exécution ;</li>
              <li>toute expertise judiciaire ;</li>
              <li>les frais d’huissier, frais de justice et débours.</li>
            </ul>
            <p style={cP}>Si une procédure judiciaire devient nécessaire, une nouvelle convention sera proposée au Client. Aucune diligence supplémentaire ne sera engagée sans son accord préalable.</p>

            <div style={cH}>Article 5 — Engagements du Client</div>
            <ul style={cUL}>
              <li>transmettre des informations exactes ;</li>
              <li>communiquer l’intégralité des documents utiles ;</li>
              <li>informer immédiatement le cabinet de toute évolution du dossier ;</li>
              <li>ne pas engager de négociation parallèle sans en informer l’Avocat.</li>
            </ul>

            <div style={cH}>Article 6 — Délais</div>
            <p style={cP}>Sous réserve de la réception de l’ensemble des pièces nécessaires, le cabinet s’engage à prendre en charge le dossier dans un délai indicatif de <strong>48 heures ouvrées</strong>. Ce délai ne constitue pas une obligation de résultat.</p>

            <div style={cH}>Article 7 — Dessaisissement</div>
            <p style={cP}>Le Client peut mettre fin à la mission à tout moment. Les honoraires correspondant aux diligences déjà accomplies restent acquis au cabinet. Si la mission a été intégralement exécutée, aucun remboursement ne pourra être sollicité.</p>

            <div style={cH}>Article 8 — Protection des données</div>
            <p style={cP}>Les données communiquées par le Client sont traitées exclusivement dans le cadre de l’exécution de la présente mission, conformément au RGPD et aux règles déontologiques applicables aux avocats.</p>

            <div style={cH}>Article 9 — Contestation des honoraires</div>
            <p style={cP}>Toute contestation relative aux honoraires relève de la procédure prévue aux articles 174 et suivants du décret n° 91-1197 du 27 novembre 1991. Le Bâtonnier de l’Ordre des avocats de Paris est seul compétent.</p>

            <div style={cHR} />

            <div style={cH}>Acceptation</div>
            <p style={cP}>En signant électroniquement la présente convention, le Client :</p>
            <ul style={cUL}>
              <li>reconnaît avoir pris connaissance de l’ensemble des conditions de la mission ;</li>
              <li>accepte le montant forfaitaire des honoraires ;</li>
              <li>demande au cabinet de commencer immédiatement sa mission après réception du paiement ;</li>
              <li>reconnaît avoir reçu les informations précontractuelles nécessaires.</li>
            </ul>

            <div style={cH}>Commencement immédiat</div>
            <p style={cP}>Le Client demande expressément que la mission débute immédiatement après la signature de la présente convention et le règlement des honoraires.</p>

            <div style={cH}>Droit de rétractation</div>
            <p style={cP}>Si le Client est un consommateur au sens du Code de la consommation, il reconnaît demander l’exécution immédiate de la prestation avant l’expiration du délai de rétractation, et reconnaît qu’en cas d’exécution complète de la mission avant l’expiration de ce délai, son droit de rétractation sera perdu, conformément aux dispositions applicables du Code de la consommation.</p>
          </div>
          <div style={{ fontSize: 10, color: 'var(--muted)', margin: '6px 0 16px' }}>Convention conforme aux exigences déontologiques (RIN/CNB) — validez le texte définitif avant mise en production.</div>

          <Field label="Signature électronique — inscrivez vos prénom et nom" required>
            <input style={{ ...inputStyle, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 16 }} value={signature} onChange={(e) => setSignature(e.target.value)} placeholder={`${data.prenom} ${data.nom}`.trim()} />
          </Field>
          <label style={{ display: 'flex', gap: 10, fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.5, marginBottom: 12, cursor: 'pointer' }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
            J’ai lu et j’accepte la convention d’honoraires ci-dessus et je la signe électroniquement (le {new Date().toLocaleDateString('fr-FR')}).
          </label>
          <label style={{ display: 'flex', gap: 10, fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.5, marginBottom: 18, cursor: 'pointer' }}>
            <input type="checkbox" checked={execNow} onChange={(e) => setExecNow(e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
            Je demande l’exécution immédiate de la mission après paiement et, en tant que consommateur le cas échéant, je renonce à mon droit de rétractation une fois la mission intégralement exécutée.
          </label>

          <button style={primaryBtn} onClick={next2}>Signer et payer →</button>
          <button style={{ ...ghostBtn, marginTop: 10 }} onClick={() => { setError(''); setStep(1) }}>← Revenir au dépôt</button>
        </div>
      )}

      {/* ÉTAPE 3 — PAIEMENT */}
      {step === 3 && (
        <div style={card}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: NAVY, marginBottom: 4 }}>Paiement sécurisé</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 18 }}>Réglez le forfait pour lancer immédiatement la prise en charge.</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', background: '#F8FBFE', border: '1px solid var(--blue)', borderRadius: 8, padding: '14px 16px', marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>Phase amiable — prise en charge complète</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>Convention et facture incluses</div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: NAVY, whiteSpace: 'nowrap' }}>200 € <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--muted)' }}>HT</span></div>
          </div>

          <button style={{ ...primaryBtn, opacity: submitting ? 0.7 : 1 }} onClick={pay} disabled={submitting}>
            {submitting ? 'Redirection vers le paiement…' : 'Payer 200 € HT →'}
          </button>
          <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 10 }}>
            Paiement traité par <strong>Stripe</strong> · Carte bancaire sécurisée · Aucune donnée bancaire conservée par le cabinet.
          </p>
          <button style={{ ...ghostBtn, marginTop: 10 }} onClick={() => { setError(''); setStep(2) }}>← Revenir à la convention</button>
        </div>
      )}

      {/* ÉTAPE 4 — CONFIRMATION */}
      {step === 4 && (
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--green-soft)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 14px' }}>✓</div>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>Votre dossier est enregistré</h2>
          <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.6, marginBottom: 18, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
            Le cabinet examinera les pièces transmises et vous adressera un premier retour <strong>sous 48 heures</strong>.
          </p>
          <div style={{ textAlign: 'left', background: '#F8F7F3', borderRadius: 8, padding: '14px 16px', fontSize: 12.5, color: 'var(--secondary)', lineHeight: 1.7 }}>
            <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Vous allez recevoir par e-mail :</div>
            <div>✓ La confirmation de prise en charge</div>
            <div>✓ Votre facture</div>
            <div>✓ La convention d’honoraires signée</div>
            <div>✓ Le lien vers votre espace de suivi</div>
          </div>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14 }}>Un e-mail de confirmation vous a été envoyé{data.email ? <> à <strong>{data.email}</strong></> : null}.</p>
        </div>
      )}
    </div>
  )
}
