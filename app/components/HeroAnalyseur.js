'use client'

// Modules interactifs du hero : Analyseur d'originalité + Devis instantané,
// et la Section assignation (bas de page). Porté du prototype validé.
// Les appels IA passent par les routes serveur (clé jamais exposée) ; les CTA
// mènent au tunnel « Confier mon dossier » (montant dynamique via ?nb=).

import { useState, useRef, useCallback } from 'react'

const C = {
  navy: '#16233d', navyDeep: '#101a2e', cream: '#f1eee7', paper: '#ffffff',
  ink: '#1c2536', slate: '#5b6577', line: '#e3ddd0', blue: '#8fc1e3', blueDark: '#2f5d8a',
  green: '#2e7d4f', greenBg: '#eaf4ee', amber: '#9a6b1f', amberBg: '#f8f1e2', red: '#a3392f', redBg: '#f9ecea',
}
const serif = "Georgia, 'Times New Roman', serif"
const sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const PHASES = {
  preparatoire: 'Avant la prise de vue — phase préparatoire',
  prise_de_vue: 'Au moment de la prise de vue',
  post_traitement: 'Après la prise de vue — développement et rendu',
}
const ETAPES = [
  'Mise en scène examinée', 'Pose et direction du sujet examinées', 'Éclairage examiné',
  'Cadrage et composition examinés', 'Angle de prise de vue examiné', 'Atmosphère et moment examinés', 'Post-traitement examiné',
]
const NIVEAUX = {
  eleve: { label: 'Indice de contestabilité élevé', color: C.green, bg: C.greenBg, badge: 'Charge de la preuve lourde pour le demandeur' },
  intermediaire: { label: 'Indice de contestabilité intermédiaire', color: C.amber, bg: C.amberBg, badge: 'Examen approfondi nécessaire' },
  limite: { label: 'Indice de contestabilité limité', color: C.blueDark, bg: '#e9f1f8', badge: 'Autres moyens de défense à examiner' },
}
const EVAL_STYLE = {
  dicte: { label: 'Dicté par le sujet', color: C.green, bg: C.greenBg },
  savoir_faire: { label: 'Savoir-faire', color: C.amber, bg: C.amberBg },
  creatif: { label: 'Choix créatif', color: C.red, bg: C.redBg },
}

const allerAuTunnel = (nb) => {
  const q = nb && nb > 1 ? `?nb=${nb}` : ''
  window.location.href = `/litige-afp-picrights/confier/${q}`
}

function redimensionner(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Lecture impossible'))
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const MAX = 1400
        let { width, height } = img
        if (width > MAX || height > MAX) {
          const r = Math.min(MAX / width, MAX / height)
          width = Math.round(width * r); height = Math.round(height * r)
        }
        const canvas = document.createElement('canvas')
        canvas.width = width; canvas.height = height
        canvas.getContext('2d').drawImage(img, 0, 0, width, height)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
        resolve({ b64: dataUrl.split(',')[1], preview: dataUrl })
      }
      img.onerror = () => reject(new Error("Format d'image non reconnu"))
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

async function analyser(b64, isPdf = false) {
  const res = await fetch('/litige-afp-picrights/api/analyse-photo/', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ b64, isPdf }),
  })
  if (!res.ok) throw new Error('analyse indisponible')
  return res.json()
}

function fichierEnBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Lecture impossible'))
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.readAsDataURL(file)
  })
}
async function analyserLettre(file) {
  const b64 = await fichierEnBase64(file)
  const res = await fetch('/litige-afp-picrights/api/analyse-courrier/', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ b64, media_type: file.type || 'image/jpeg' }),
  })
  if (!res.ok) throw new Error('analyse indisponible')
  return res.json()
}

function calculerForfait(nb) {
  if (!nb || nb < 1) return null
  return { nb, montant: nb <= 2 ? 200 : 200 + (nb - 2) * 90 }
}

const ETAPES_LETTRE = ['Document lu', 'Nature du document identifiée', 'Demandeur identifié', 'Photographies et montant relevés']

// ————————————————————————————————————————————————
function Jauge({ indice, niveau }) {
  const n = NIVEAUX[niveau] || NIVEAUX.intermediaire
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.slate }}>Indice de contestabilité</span>
        <span style={{ fontFamily: serif, fontSize: 30, color: n.color, lineHeight: 1 }}>{indice}<span style={{ fontSize: 15, color: C.slate }}> / 100</span></span>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: '#e8e3d8', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${indice}%`, background: n.color, borderRadius: 4, transition: 'width 1.2s ease' }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: n.color, background: n.bg, padding: '4px 10px', borderRadius: 3 }}>{n.badge}</span>
      </div>
    </div>
  )
}

function Rapport({ resultat, preview, onReset }) {
  const n = NIVEAUX[resultat.niveau] || NIVEAUX.intermediaire
  const ctaLabel = resultat.niveau === 'limite' ? 'Faire vérifier ces moyens de défense → 200 € HT' : 'Faire vérifier cette analyse par un avocat → 200 € HT'
  return (
    <div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 18 }}>
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="Photographie analysée" style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 4, border: `1px solid ${C.line}` }} />
        ) : (
          <div style={{ width: 64, height: 64, borderRadius: 4, border: `1px solid ${C.line}`, background: C.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>📄</div>
        )}
        <div>
          <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.slate }}>Analyse terminée</div>
          <div style={{ fontFamily: serif, fontSize: 18, color: C.ink }}>{resultat.photo_type}</div>
        </div>
      </div>

      <Jauge indice={resultat.indice} niveau={resultat.niveau} />

      <div style={{ margin: '20px 0 16px' }}>
        {Object.keys(PHASES).map((phase) => {
          const crits = (resultat.criteres || []).filter((c) => c.phase === phase)
          if (crits.length === 0) return null
          return (
            <div key={phase} style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: sans, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.blueDark, borderBottom: `1px solid ${C.line}`, paddingBottom: 5, marginBottom: 2 }}>{PHASES[phase]}</div>
              {crits.map((c, i) => {
                const e = EVAL_STYLE[c.evaluation] || EVAL_STYLE.savoir_faire
                return (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '9px 0', borderBottom: `1px solid ${C.line}`, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, color: e.color, background: e.bg, padding: '3px 8px', borderRadius: 3, whiteSpace: 'nowrap', marginTop: 2, minWidth: 96, textAlign: 'center' }}>{e.label}</span>
                    <div>
                      <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: C.ink }}>{c.nom}</div>
                      <div style={{ fontFamily: sans, fontSize: 13, color: C.slate, lineHeight: 1.5 }}>{c.observation}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      <div style={{ background: '#f6f4ee', border: `1px solid ${C.line}`, borderRadius: 4, padding: '10px 14px', marginBottom: 16 }}>
        <p style={{ fontFamily: sans, fontSize: 12, color: C.slate, lineHeight: 1.55, margin: 0 }}>
          <span style={{ fontWeight: 600, color: C.ink }}>Non observable sur l&apos;image :</span> la liberté dont disposait le photographe (commande, directives, mission de reproduction fidèle) — un critère déterminant en jurisprudence, qui relève de l&apos;examen du dossier.
        </p>
      </div>

      <div style={{ background: n.bg, borderLeft: `3px solid ${n.color}`, padding: '14px 16px', borderRadius: '0 4px 4px 0', marginBottom: 20 }}>
        <p style={{ fontFamily: sans, fontSize: 12.5, color: C.slate, fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 8px' }}>
          L&apos;analyse automatique ne permet pas d&apos;affirmer qu&apos;une photographie est ou n&apos;est pas protégée. Elle identifie, selon la Grille Lazarègue<span style={{ fontSize: 9, verticalAlign: 'super' }}>®</span>, les éléments que le titulaire des droits devra expliciter — la charge de la preuve de l&apos;originalité pèse sur celui qui l&apos;invoque.
        </p>
        <p style={{ fontFamily: sans, fontSize: 14, color: C.ink, lineHeight: 1.6, margin: 0 }}>{resultat.synthese}</p>
      </div>

      <button onClick={() => allerAuTunnel()} style={{ width: '100%', background: C.navy, color: '#fff', border: 'none', borderRadius: 5, padding: '15px 20px', fontFamily: sans, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{ctaLabel}</button>
      <p style={{ fontFamily: sans, fontSize: 11, color: C.slate, textAlign: 'center', margin: '8px 0 14px' }}>Convention d&apos;honoraires incluse · Prise en charge sous 48h</p>

      <p style={{ fontFamily: sans, fontSize: 11, color: C.slate, lineHeight: 1.5, borderTop: `1px solid ${C.line}`, paddingTop: 12, margin: 0 }}>
        Analyse préliminaire automatisée fondée sur des indices visuels — elle ne constitue ni une consultation juridique, ni un avis sur la protection de l&apos;œuvre. Seul l&apos;examen d&apos;un avocat permet d&apos;apprécier votre dossier. La photographie déposée est analysée puis supprimée.
      </p>

      <button onClick={onReset} style={{ background: 'none', border: 'none', color: C.blueDark, fontFamily: sans, fontSize: 13, cursor: 'pointer', padding: 0, marginTop: 12, textDecoration: 'underline' }}>Analyser une autre photographie</button>
    </div>
  )
}

function EtapesAnimation({ etapesFaites }) {
  return (
    <div style={{ padding: '8px 0' }}>
      <div style={{ fontFamily: sans, fontSize: 13, color: C.slate, marginBottom: 16 }}>Application de la Grille Lazarègue<span style={{ fontSize: 10, verticalAlign: 'super' }}>®</span> — analyse en cours…</div>
      {ETAPES.map((e, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0', opacity: i <= etapesFaites ? 1 : 0.25, transition: 'opacity 0.4s' }}>
          <span style={{ color: i <= etapesFaites ? C.green : C.slate, fontSize: 14, width: 18 }}>{i <= etapesFaites ? '✓' : '○'}</span>
          <span style={{ fontFamily: sans, fontSize: 14, color: C.ink }}>{e}</span>
        </div>
      ))}
    </div>
  )
}

function Analyseur() {
  const [etat, setEtat] = useState('idle')
  const [etapesFaites, setEtapesFaites] = useState(-1)
  const [resultat, setResultat] = useState(null)
  const [preview, setPreview] = useState(null)
  const [erreur, setErreur] = useState('')
  const [survol, setSurvol] = useState(false)
  const inputRef = useRef(null)

  const lancer = useCallback(async (file) => {
    const isImage = !!file && file.type.startsWith('image/')
    const isPdf = !!file && file.type === 'application/pdf'
    if (!file || (!isImage && !isPdf)) { setErreur('Veuillez déposer une photographie (JPEG, PNG, WebP) ou la mise en demeure au format PDF.'); setEtat('erreur'); return }
    setEtat('analyse'); setEtapesFaites(-1); setErreur('')
    let step = -1
    const timer = setInterval(() => { step += 1; setEtapesFaites(step); if (step >= ETAPES.length - 1) clearInterval(timer) }, 800)
    const debut = Date.now()
    try {
      let b64, pv = null
      if (isPdf) { b64 = await fichierEnBase64(file) }
      else { const r = await redimensionner(file); b64 = r.b64; pv = r.preview }
      setPreview(pv)
      const res = await analyser(b64, isPdf)
      await new Promise((r) => setTimeout(r, Math.max(0, 4800 - (Date.now() - debut))))
      clearInterval(timer)
      if (res.erreur) { setErreur(res.erreur); setEtat('erreur') }
      else { setResultat(res); setEtat('rapport') }
    } catch (err) {
      clearInterval(timer)
      setErreur("L'analyse n'a pas pu aboutir. Vérifiez le fichier (image ou PDF) et réessayez.")
      setEtat('erreur')
    }
  }, [])

  const reset = () => { setEtat('idle'); setResultat(null); setPreview(null); setErreur('') }

  return (
    <div style={{ background: C.paper, borderRadius: 8, border: `1px solid ${C.line}`, boxShadow: '0 8px 30px rgba(16,26,46,0.10)', padding: '26px 26px 22px' }}>
      <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blueDark, marginBottom: 6 }}>Analyse immédiate — gratuite · Grille Lazarègue<span style={{ fontSize: 9, verticalAlign: 'super' }}>®</span></div>

      {etat === 'idle' && (
        <>
          <h2 style={{ fontFamily: serif, fontSize: 21, fontWeight: 500, color: C.ink, margin: '0 0 6px', lineHeight: 1.3 }}>La photographie qui vous est reprochée est-elle réellement protégée ?</h2>
          <p style={{ fontFamily: sans, fontSize: 14, color: C.slate, lineHeight: 1.55, margin: '0 0 18px' }}>Déposez-la : notre moteur identifie en 30 secondes les caractéristiques fréquemment discutées devant les tribunaux pour les photographies de presse.</p>
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setSurvol(true) }}
            onDragLeave={() => setSurvol(false)}
            onDrop={(e) => { e.preventDefault(); setSurvol(false); lancer(e.dataTransfer.files?.[0]) }}
            style={{ border: `2px dashed ${survol ? C.blueDark : '#c9c2b2'}`, background: survol ? '#eef4f9' : C.cream, borderRadius: 6, padding: '34px 20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
            <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: C.ink }}>Déposer la photographie ou la mise en demeure (PDF)</div>
            <div style={{ fontFamily: sans, fontSize: 13, color: C.slate, marginTop: 4 }}>ou cliquer pour parcourir vos fichiers</div>
          </div>
          <input ref={inputRef} type="file" accept="application/pdf,image/*" style={{ display: 'none' }} onChange={(e) => lancer(e.target.files?.[0])} />
          <p style={{ fontFamily: sans, fontSize: 12, color: C.slate, textAlign: 'center', margin: '12px 0 0' }}>Aucune inscription requise · Fichier analysé puis supprimé</p>
          <p style={{ fontFamily: sans, fontSize: 11.5, color: C.slate, textAlign: 'center', fontStyle: 'italic', margin: '6px 0 0' }}>Analyse préliminaire — ne constitue pas une consultation juridique.</p>
        </>
      )}

      {etat === 'analyse' && <EtapesAnimation etapesFaites={etapesFaites} />}
      {etat === 'rapport' && resultat && <Rapport resultat={resultat} preview={preview} onReset={reset} />}
      {etat === 'erreur' && (
        <div>
          <div style={{ background: C.redBg, borderLeft: `3px solid ${C.red}`, padding: '12px 14px', borderRadius: '0 4px 4px 0', fontFamily: sans, fontSize: 14, color: C.ink, marginBottom: 14 }}>{erreur}</div>
          <button onClick={() => allerAuTunnel()} style={{ width: '100%', background: C.navy, color: '#fff', border: 'none', borderRadius: 5, padding: '13px 20px', fontFamily: sans, fontSize: 14, fontWeight: 600, cursor: 'pointer', marginBottom: 10 }}>Confier mon dossier au cabinet → dès 200 € HT</button>
          <button onClick={reset} style={{ background: 'none', border: `1px solid ${C.line}`, borderRadius: 5, color: C.ink, fontFamily: sans, fontSize: 13, cursor: 'pointer', padding: '8px 14px' }}>Réessayer</button>
        </div>
      )}
    </div>
  )
}

function DevisInstantane() {
  const [etat, setEtat] = useState('idle')
  const [etapesFaites, setEtapesFaites] = useState(-1)
  const [dossier, setDossier] = useState(null)
  const [erreur, setErreur] = useState('')
  const [survol, setSurvol] = useState(false)
  const inputRef = useRef(null)

  const lancer = useCallback(async (file) => {
    if (!file || (file.type !== 'application/pdf' && !file.type.startsWith('image/'))) { setErreur('Veuillez déposer votre mise en demeure au format PDF ou en photo (JPEG, PNG).'); setEtat('erreur'); return }
    setEtat('analyse'); setEtapesFaites(-1)
    let step = -1
    const timer = setInterval(() => { step += 1; setEtapesFaites(step); if (step >= ETAPES_LETTRE.length - 1) clearInterval(timer) }, 750)
    const debut = Date.now()
    try {
      const res = await analyserLettre(file)
      await new Promise((r) => setTimeout(r, Math.max(0, 3200 - (Date.now() - debut))))
      clearInterval(timer)
      if (res.erreur) { setErreur(res.erreur); setEtat('erreur') }
      else if (res.type_document === 'assignation') { setDossier(res); setEtat('assignation') }
      else if (!res.nb_photographies) { setErreur("Le nombre de photographies n'a pas pu être déterminé. Vous pouvez confier votre dossier directement — un avocat l'examinera."); setEtat('erreur') }
      else { setDossier(res); setEtat('devis') }
    } catch (err) {
      clearInterval(timer)
      setErreur("L'analyse du document n'a pas pu aboutir. Réessayez, ou confiez votre dossier directement.")
      setEtat('erreur')
    }
  }, [])

  const forfait = dossier ? calculerForfait(dossier.nb_photographies) : null
  const btnConfier = (label, nb) => (
    <button onClick={() => allerAuTunnel(nb)} style={{ width: '100%', background: '#fff', color: C.navy, border: 'none', borderRadius: 5, padding: '15px 20px', fontFamily: sans, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>{label}</button>
  )

  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 8, padding: '26px 26px 24px', color: '#fff' }}>
      <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue, marginBottom: 6 }}>Prise en charge par un avocat — tarif exact en 30 secondes</div>

      {etat === 'idle' && (
        <>
          <h2 style={{ fontFamily: serif, fontSize: 21, fontWeight: 500, lineHeight: 1.3, margin: '0 0 6px' }}>Déposez votre courrier, obtenez votre tarif exact</h2>
          <p style={{ fontFamily: sans, fontSize: 14, color: '#c4cddc', lineHeight: 1.55, margin: '0 0 12px' }}>Notre tarif dépend uniquement du <strong>nombre de photographies</strong> visées par votre dossier — jamais du montant qu&apos;on vous réclame.</p>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '10px 14px', marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: sans, fontSize: 13.5, padding: '2px 0' }}><span style={{ color: '#c4cddc' }}>Jusqu&apos;à 2 photographies</span><span style={{ fontWeight: 700 }}>200 € HT</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: sans, fontSize: 13.5, padding: '2px 0' }}><span style={{ color: '#c4cddc' }}>Chaque photographie en plus</span><span style={{ fontWeight: 700 }}>+ 90 € HT</span></div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: '#93a1ba', marginTop: 7, lineHeight: 1.5 }}>Déposez votre courrier : nous comptons les photographies et affichons votre <strong style={{ color: '#c4cddc' }}>tarif exact</strong>, connu d&apos;avance.</div>
          </div>
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setSurvol(true) }}
            onDragLeave={() => setSurvol(false)}
            onDrop={(e) => { e.preventDefault(); setSurvol(false); lancer(e.dataTransfer.files?.[0]) }}
            style={{ border: `2px dashed ${survol ? C.blue : 'rgba(255,255,255,0.35)'}`, background: survol ? 'rgba(143,193,227,0.10)' : 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '26px 20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            <div style={{ fontSize: 24, marginBottom: 6 }}>📄</div>
            <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 600 }}>Déposer le document reçu</div>
            <div style={{ fontFamily: sans, fontSize: 12.5, color: '#93a1ba', marginTop: 4 }}>Mise en demeure, courrier d&apos;avocat ou assignation — PDF ou photo</div>
          </div>
          <input ref={inputRef} type="file" accept="application/pdf,image/*" style={{ display: 'none' }} onChange={(e) => lancer(e.target.files?.[0])} />
          <p style={{ fontFamily: sans, fontSize: 11.5, color: '#93a1ba', textAlign: 'center', margin: '10px 0 0', lineHeight: 1.5 }}>Document chiffré, analysé puis supprimé · Secret professionnel · Convention incluse · Prise en charge sous 48h</p>
        </>
      )}

      {etat === 'analyse' && (
        <div style={{ padding: '8px 0' }}>
          <div style={{ fontFamily: sans, fontSize: 13, color: '#c4cddc', marginBottom: 14 }}>Lecture de votre document…</div>
          {ETAPES_LETTRE.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '7px 0', opacity: i <= etapesFaites ? 1 : 0.3, transition: 'opacity 0.4s' }}>
              <span style={{ color: i <= etapesFaites ? C.blue : '#93a1ba', fontSize: 14, width: 18 }}>{i <= etapesFaites ? '✓' : '○'}</span>
              <span style={{ fontFamily: sans, fontSize: 14 }}>{e}</span>
            </div>
          ))}
        </div>
      )}

      {etat === 'devis' && dossier && forfait && (
        <div>
          <h2 style={{ fontFamily: serif, fontSize: 20, fontWeight: 500, lineHeight: 1.3, margin: '0 0 14px' }}>Votre dossier</h2>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '14px 16px', marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.10)', fontFamily: sans, fontSize: 13.5 }}><span style={{ color: '#93a1ba' }}>Demandeur</span><span style={{ fontWeight: 600, textAlign: 'right' }}>{dossier.demandeur || '—'}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.10)', fontFamily: sans, fontSize: 13.5 }}><span style={{ color: '#93a1ba' }}>Photographies visées</span><span style={{ fontWeight: 600 }}>{dossier.nb_photographies}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontFamily: sans, fontSize: 13.5 }}><span style={{ color: '#93a1ba' }}>Montant réclamé</span><span style={{ fontWeight: 600 }}>{dossier.montant_reclame ? `${dossier.montant_reclame.toLocaleString('fr-FR')} €` : '—'}</span></div>
          </div>

          {dossier.type_document === 'courrier_avocat' && (
            <div style={{ background: 'rgba(143,193,227,0.12)', borderLeft: `3px solid ${C.blue}`, padding: '10px 14px', borderRadius: '0 4px 4px 0', marginBottom: 14 }}>
              <p style={{ fontFamily: sans, fontSize: 13, color: '#c4cddc', lineHeight: 1.55, margin: 0 }}>Un cabinet d&apos;avocats a pris le relais de l&apos;agence ? C&apos;est une étape fréquente de la phase amiable — notre intervention et notre tarif restent identiques.</p>
            </div>
          )}

          <div style={{ textAlign: 'center', margin: '4px 0 10px' }}>
            <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue }}>Forfait phase amiable — votre dossier</div>
            <div style={{ fontFamily: serif, fontSize: 38, lineHeight: 1.2 }}>{forfait.montant} € <span style={{ fontSize: 16, color: '#93a1ba' }}>HT</span></div>
            {dossier.montant_reclame ? (<div style={{ fontFamily: sans, fontSize: 12.5, color: '#93a1ba' }}>à comparer aux {dossier.montant_reclame.toLocaleString('fr-FR')} € réclamés</div>) : null}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '12px 16px', marginBottom: 14 }}>
            <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93a1ba', marginBottom: 8 }}>Comment ce tarif est calculé</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontFamily: sans, fontSize: 13 }}><span style={{ color: '#c4cddc' }}>Forfait de base — examen juridique complet, rédaction et envoi du courrier, suivi de la phase amiable (jusqu&apos;à 2 photographies)</span><span style={{ fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 12 }}>200 €</span></div>
            {forfait.nb > 2 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontFamily: sans, fontSize: 13 }}><span style={{ color: '#c4cddc' }}>{forfait.nb - 2} photographie{forfait.nb - 2 > 1 ? 's' : ''} supplémentaire{forfait.nb - 2 > 1 ? 's' : ''} — une analyse d&apos;originalité par photographie, selon notre grille × 90 €</span><span style={{ fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 12 }}>{(forfait.nb - 2) * 90} €</span></div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0 0', marginTop: 4, borderTop: '1px solid rgba(255,255,255,0.12)', fontFamily: sans, fontSize: 13.5 }}><span style={{ fontWeight: 600 }}>Total — connu d&apos;avance, sans surprise</span><span style={{ fontWeight: 700 }}>{forfait.montant} € HT</span></div>
          </div>

          {btnConfier(`Confier mon dossier — ${forfait.montant} € HT →`, forfait.nb)}
          <p style={{ fontFamily: sans, fontSize: 11.5, color: '#93a1ba', lineHeight: 1.5, margin: '12px 0 0', textAlign: 'center' }}>Tarif calculé uniquement selon le nombre de photographies — jamais selon le montant réclamé. Convention incluse · Prise en charge sous 48h.</p>
          <button onClick={() => { setEtat('idle'); setDossier(null) }} style={{ background: 'none', border: 'none', color: C.blue, fontFamily: sans, fontSize: 12.5, cursor: 'pointer', padding: 0, marginTop: 10, textDecoration: 'underline' }}>Déposer un autre document</button>
        </div>
      )}

      {etat === 'assignation' && dossier && (
        <div>
          <div style={{ display: 'inline-block', fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffb4a8', background: 'rgba(163,57,47,0.25)', padding: '4px 10px', borderRadius: 3, marginBottom: 12 }}>Assignation détectée</div>
          <h2 style={{ fontFamily: serif, fontSize: 20, fontWeight: 500, lineHeight: 1.3, margin: '0 0 10px' }}>Votre document est une assignation devant le tribunal</h2>
          <p style={{ fontFamily: sans, fontSize: 14, color: '#c4cddc', lineHeight: 1.6, margin: '0 0 14px' }}>Votre dossier ne passe pas par le forfait en ligne : il relève d&apos;une défense contentieuse sur mesure, avec des délais impératifs. Il doit être transmis directement à un avocat, qui vous adresse un devis personnalisé sous 24h — aucun paiement à ce stade.</p>
          <button onClick={() => document.getElementById('section-assignation')?.scrollIntoView({ behavior: 'smooth' })} style={{ width: '100%', background: '#fff', color: C.navy, border: 'none', borderRadius: 5, padding: '15px 20px', fontFamily: sans, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>Transmettre mon assignation au cabinet ↓</button>
          <button onClick={() => { setEtat('idle'); setDossier(null) }} style={{ background: 'none', border: 'none', color: C.blue, fontFamily: sans, fontSize: 12.5, cursor: 'pointer', padding: 0, marginTop: 10, textDecoration: 'underline' }}>Déposer un autre document</button>
        </div>
      )}

      {etat === 'erreur' && (
        <div>
          <div style={{ background: 'rgba(163,57,47,0.20)', borderLeft: `3px solid ${C.red}`, padding: '12px 14px', borderRadius: '0 4px 4px 0', fontFamily: sans, fontSize: 13.5, marginBottom: 14, lineHeight: 1.5 }}>{erreur}</div>
          {btnConfier('Confier mon dossier au cabinet → dès 200 € HT')}
          <button onClick={() => setEtat('idle')} style={{ background: 'none', border: 'none', color: C.blue, fontFamily: sans, fontSize: 12.5, cursor: 'pointer', padding: 0, marginTop: 10, textDecoration: 'underline' }}>Réessayer le dépôt</button>
        </div>
      )}

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', marginTop: 18, paddingTop: 14, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12, color: '#93a1ba' }}>
        <span>🏛 Barreau de Paris</span><span>🔒 Secret professionnel</span><span>💳 Stripe sécurisé</span>
      </div>
    </div>
  )
}

export function HeroModules() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22, alignItems: 'start' }}>
      <Analyseur />
      <DevisInstantane />
    </div>
  )
}

export function SectionAssignation() {
  const [fichier, setFichier] = useState(null)
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [envoye, setEnvoye] = useState(false)
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState('')
  const inputRef = useRef(null)

  const transmettre = async () => {
    if (!fichier || !email) { setErreur("Merci de joindre votre assignation et d'indiquer votre e-mail."); return }
    setEnvoi(true); setErreur('')
    try {
      const fd = new FormData()
      fd.append('fichier', fichier); fd.append('email', email); fd.append('tel', tel)
      fd.append('site', document.getElementById('hp-site')?.value || '')
      const res = await fetch('/litige-afp-picrights/api/assignation/', { method: 'POST', body: fd })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.ok) { setEnvoye(true) }
      else setErreur(json.error === 'not_configured' ? 'Envoi indisponible pour le moment — écrivez-nous directement à contact@lazaregue-avocats.fr.' : (json.error || "L'envoi n'a pas pu aboutir. Réessayez."))
    } catch (e) {
      setErreur("L'envoi n'a pas pu aboutir. Réessayez.")
    } finally { setEnvoi(false) }
  }

  return (
    <section id="section-assignation" style={{ background: C.navy, padding: '44px 28px 48px', marginTop: 40 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', color: '#fff' }}>
        <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffb4a8', marginBottom: 10 }}>Procédure judiciaire engagée — délais impératifs</div>
        <h2 style={{ fontFamily: serif, fontSize: 26, fontWeight: 500, lineHeight: 1.3, margin: '0 0 8px' }}>Vous avez reçu une assignation devant le tribunal ?</h2>
        <p style={{ fontFamily: sans, fontSize: 14.5, color: '#c4cddc', lineHeight: 1.6, margin: '0 0 20px', maxWidth: 620 }}>Une assignation impose de constituer avocat avant l&apos;audience. Votre dossier relève d&apos;une défense contentieuse sur mesure : transmettez-le nous directement — un avocat l&apos;examine en priorité et vous adresse un devis personnalisé sous 24h. Aucun paiement en ligne à ce stade, aucun engagement avant votre acceptation du devis.</p>

        {envoye ? (
          <div style={{ background: 'rgba(46,125,79,0.25)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 6, padding: '20px 22px' }}>
            <div style={{ fontFamily: serif, fontSize: 18, marginBottom: 6 }}>✓ Assignation transmise au cabinet</div>
            <p style={{ fontFamily: sans, fontSize: 13.5, color: '#c4cddc', lineHeight: 1.55, margin: 0 }}>Un avocat examine votre dossier en priorité. Vous recevrez votre devis personnalisé à l&apos;adresse indiquée sous 24h ouvrées. Si votre audience est imminente, mentionnez-le dans votre réponse à notre e-mail de confirmation.</p>
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 8, padding: '22px 22px 20px' }}>
            <div onClick={() => inputRef.current?.click()} style={{ border: `2px dashed ${fichier ? C.blue : 'rgba(255,255,255,0.35)'}`, background: fichier ? 'rgba(143,193,227,0.10)' : 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '18px 16px', textAlign: 'center', cursor: 'pointer', marginBottom: 14 }}>
              <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 600 }}>{fichier ? `📄 ${fichier.name}` : "📄 Joindre l'assignation (PDF ou photo)"}</div>
              {!fichier && <div style={{ fontFamily: sans, fontSize: 12, color: '#93a1ba', marginTop: 3 }}>Cliquez pour parcourir vos fichiers</div>}
            </div>
            <input ref={inputRef} type="file" accept="application/pdf,image/*" style={{ display: 'none' }} onChange={(e) => setFichier(e.target.files?.[0] || null)} />

            {/* Honeypot anti-spam (caché) */}
            <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }} onChange={() => {}} id="hp-site" />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10, marginBottom: 14 }}>
              <input type="email" placeholder="Votre e-mail *" value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 5, padding: '12px 14px', fontFamily: sans, fontSize: 14, color: '#fff', outline: 'none' }} />
              <input type="tel" placeholder="Téléphone (facultatif)" value={tel} onChange={(e) => setTel(e.target.value)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 5, padding: '12px 14px', fontFamily: sans, fontSize: 14, color: '#fff', outline: 'none' }} />
            </div>

            {erreur && <div style={{ background: 'rgba(163,57,47,0.20)', borderLeft: `3px solid ${C.red}`, padding: '10px 12px', borderRadius: '0 4px 4px 0', fontFamily: sans, fontSize: 13, marginBottom: 12 }}>{erreur}</div>}

            <button onClick={transmettre} disabled={envoi} style={{ width: '100%', background: '#fff', color: C.navy, border: 'none', borderRadius: 5, padding: '15px 20px', fontFamily: sans, fontSize: 15, fontWeight: 700, cursor: 'pointer', opacity: envoi ? 0.7 : 1 }}>{envoi ? 'Transmission…' : 'Transmettre au cabinet — devis personnalisé sous 24h →'}</button>
            <p style={{ fontFamily: sans, fontSize: 11.5, color: '#93a1ba', textAlign: 'center', margin: '10px 0 0', lineHeight: 1.5 }}>Votre assignation et vos coordonnées sont transmises directement à un avocat, de manière chiffrée · Secret professionnel · Aucun paiement à ce stade</p>
          </div>
        )}
      </div>
    </section>
  )
}
