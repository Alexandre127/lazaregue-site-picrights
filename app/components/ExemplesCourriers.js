'use client'
import { useState } from 'react'

// Reconstitutions fidèles (mise en page + agences réelles) des courriers types.
// Toutes les données nominatives — destinataires, références, montants, codes —
// sont FICTIVES et illustratives. Aucun document client réel n'est reproduit.

const paper = { background: '#ffffff', color: '#1c2536', borderRadius: 6, padding: 'clamp(18px,4vw,34px)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12.5, lineHeight: 1.55, boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }
const muted = { color: '#5b6577' }

/* — Logos stylisés (wordmarks, pas de reproduction pixel) — */
function AfpMark({ size = 26 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'Arial, sans-serif', fontWeight: 800, fontStyle: 'italic', color: '#1b3a8c', fontSize: size, letterSpacing: '-0.02em' }}>
      AFP<span style={{ width: size * 0.62, height: size * 0.62, borderRadius: '50%', background: '#2b6cff', display: 'inline-block' }} />
    </span>
  )
}
function PicRightsMark() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#2b2b2b', fontSize: 16 }}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', border: '3px solid #4c9a2a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#4c9a2a' }}>◉</span>
      PicRights<span style={{ color: '#8a8a8a', fontWeight: 400 }}>.com</span>
    </span>
  )
}
function RightsControlMark({ size = 18 }) {
  return (
    <span style={{ fontWeight: 800, letterSpacing: '0.02em', fontSize: size, color: '#1c2536' }}>
      R<span style={{ color: '#c0392b' }}>I</span>GHTS <span style={{ color: '#c0392b' }}>C</span>ONTROL
    </span>
  )
}

/* — 1. Premier contact PicRights (courriel) — */
function DocContact() {
  return (
    <div style={paper}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <PicRightsMark />
        <AfpMark />
      </div>
      <div style={{ fontWeight: 700 }}>PicRights Europe GmbH <span style={{ fontWeight: 400 }}>au nom de l’Agence France-Presse</span></div>
      <div style={muted}>Unterdorfstrasse 12, 8808 Pfäffikon SZ, Suisse — Tél. : 097 215 79 95 — picrights.com</div>
      <div style={{ margin: '12px 0', ...muted }}>Le 13 mai 2025, par courriel</div>
      <div style={{ fontWeight: 700, textDecoration: 'underline', marginBottom: 10 }}>Demande d’information relative à l’existence d’une licence d’utilisation d’image(s) de l’Agence France-Presse — Référence : 9417-0288-3312</div>
      <p style={{ margin: '0 0 10px' }}>Chère Madame, Cher Monsieur,</p>
      <p style={{ margin: '0 0 10px' }}>L’Agence France-Presse a confié à notre société PicRights Europe GmbH (« PicRights ») la vérification du respect des droits d’auteur de ses contenus. Dans le cadre de sa mission, PicRights a identifié une ou plusieurs image(s) appartenant à l’Agence France-Presse sur votre site internet et/ou média social. Or, l’Agence France-Presse n’a connaissance d’aucune licence correspondant à une telle utilisation.</p>
      <p style={{ margin: '0 0 10px' }}>Nous vous contactons afin que vous nous indiquiez si vous disposez d’une licence en cours de validité pour cette utilisation. Si tel est le cas, nous vous remercions de nous l’adresser via <span style={{ color: '#1b56b0' }}>resolve.picrights.com</span>.</p>
      <p style={{ margin: '0 0 10px' }}>À défaut, nous vous remercions de cesser immédiatement l’utilisation de cette/ces image(s). Le retrait seul ne suffira pas à clore ce différend : nous réclamons le paiement d’un dédommagement lorsqu’une image fait l’objet d’une utilisation non autorisée.</p>
      <p style={{ margin: '0 0 10px' }}>Soucieux de régler ce différend dans les plus brefs délais, nous vous prions de bien vouloir répondre <strong>dans les quatorze (14) jours</strong> à compter de la date de ce courriel.</p>
      <p style={{ margin: '14px 0 0' }}>Cordialement,<br />Service de conformité des licences<br />PicRights Europe GmbH — Département Français</p>
    </div>
  )
}

/* — 2. Demande de paiement AFP / PicRights — */
function DocPaiement() {
  const codes = ['AFP_7K2M9X', 'AFP_1QD4LP', 'AFP_88TZ0R', 'AFP_5NW3JH', 'Par7742013', 'AFP_9GM6V2', 'AFP_34UF1Q', 'AFP_02L7YG']
  return (
    <div style={paper}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}><AfpMark size={30} /></div>
      <div style={{ textAlign: 'right', ...muted, marginBottom: 16 }}>Agence France-Presse<br />11-13 place de la Bourse<br />75002 Paris — France</div>
      <div style={{ marginBottom: 4 }}>Date : 15 mai 2025</div>
      <div style={{ margin: '12px 0' }}>
        <strong>SARL Maison Verdier</strong><br />8 rue des Tilleuls<br />69003 Lyon — France
      </div>
      <p style={{ fontStyle: 'italic', margin: '0 0 16px' }}>Demande de paiement d’indemnité transactionnelle relative au dossier référencé 9417-0288-3312</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2px 24px', maxWidth: 420 }}>
        <div style={{ fontWeight: 700 }}>Référence de l’/des image(s) :</div>
        <div style={{ fontWeight: 700 }}>Montant :</div>
        <div style={muted}>{codes.map((c) => <div key={c}>{c}</div>)}</div>
        <div style={{ alignSelf: 'center', fontWeight: 700 }}>4 200,00 €</div>
      </div>
      <p style={{ margin: '16px 0 8px' }}>Nous vous prions de verser la totalité de l’indemnité dans le délai imparti, indiqué dans notre dernière correspondance.</p>
      <div style={{ fontWeight: 700, margin: '8px 0 4px' }}>Options de paiement :</div>
      <ul style={{ margin: '0 0 8px', paddingLeft: 18 }}>
        <li>Paiement en ligne par carte bancaire ou PayPal : <span style={{ color: '#1b56b0' }}>resolve.picrights.com</span></li>
        <li>Paiement par virement bancaire : UBS Switzerland AG — titulaire du compte : PicRights Europe GmbH</li>
      </ul>
      <p style={{ ...muted, margin: 0 }}>Merci d’inclure la référence 9417-0288-3312 avec votre transfert. Les chèques et paiements échelonnés ne sont pas acceptés.</p>
    </div>
  )
}

/* — 3. Mise en demeure Rights Control / OTTO Archive — */
function DocRightsControl() {
  return (
    <div style={paper}>
      <div style={{ borderLeft: '3px solid #c0392b', paddingLeft: 10, marginBottom: 18 }}><RightsControlMark size={20} /></div>
      <div style={muted}>Rights Control — 45 bis Route des Gardes, 92190 Meudon</div>
      <div style={{ margin: '10px 0', ...muted }}>
        <strong style={{ color: '#1c2536' }}>SAS Atelier du Regard</strong><br />24 avenue Victor Hugo<br />75016 Paris
      </div>
      <div style={{ textAlign: 'right', ...muted, marginBottom: 12 }}>Meudon, le 6 septembre 2024</div>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>Concerne : usage non autorisé d’image(s) OTTO Archive, LLC</div>
      <div style={{ border: '1px solid #d7d2c6', display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: 12, marginBottom: 14 }}>
        <div style={{ padding: '5px 8px', borderRight: '1px solid #d7d2c6', borderBottom: '1px solid #d7d2c6' }}><strong>Référence dossier :</strong> 20-5183</div>
        <div style={{ padding: '5px 8px', borderBottom: '1px solid #d7d2c6' }}><strong>Montant indemnité transactionnelle :</strong> 3 000,00 €</div>
        <div style={{ padding: '5px 8px', borderRight: '1px solid #d7d2c6' }}><strong>Nombre d’image(s) :</strong> 1</div>
        <div style={{ padding: '5px 8px' }}><strong>Échéance :</strong> 24/09/2024</div>
      </div>
      <p style={{ margin: '0 0 10px' }}>Madame, Monsieur,</p>
      <p style={{ margin: '0 0 10px' }}>Nous vous contactons car nous avons découvert que vous utilisez, à des fins de promotion en ligne, une ou plusieurs images dont les droits sont détenus par OTTO Archive, LLC, en vertu de l’article L.113-1 du Code de la propriété intellectuelle. Nous n’avons trouvé aucune trace d’une licence en vigueur vous autorisant cet usage.</p>
      <p style={{ margin: '0 0 10px' }}>Sucré Salé SAS, via son département Rights Control, est autorisée à percevoir les redevances et indemnités dues. Nous vous invitons à vous conformer aux indications qui suivent dans <strong>un délai de 18 jours</strong>. À défaut de réponse, l’affaire pourra être portée devant le Tribunal Judiciaire compétent par l’intermédiaire de notre avocat.</p>
      <p style={{ margin: '14px 0 0', ...muted }}>Conformité des Licences — Rights Control<br />Un département de Sucré Salé SAS — rightscontrol.com</p>
    </div>
  )
}

/* — 4. Assignation devant le Tribunal judiciaire — */
function DocAssignation() {
  return (
    <div style={{ ...paper, fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <div style={{ border: '1px solid #1c2536', padding: '10px 14px', textAlign: 'center', fontWeight: 700, letterSpacing: '0.02em', marginBottom: 18 }}>
        ASSIGNATION<br />DEVANT LE TRIBUNAL JUDICIAIRE DE PARIS
      </div>
      <p style={{ fontWeight: 700, margin: '0 0 10px' }}>L’AN DEUX MILLE VINGT-CINQ ET LE SEPT OCTOBRE,</p>
      <p style={{ margin: '0 0 6px', fontWeight: 700 }}>À LA DEMANDE DE :</p>
      <p style={{ margin: '0 0 10px' }}><strong>AGENCE FRANCE-PRESSE</strong>, organisme autonome doté de la personnalité civile (Loi n° 57-32 du 10 janvier 1957), immatriculée au RCS de Paris sous le numéro 775 658 354, dont le siège social est situé 11-13-15 place de la Bourse, 75002 Paris, prise en la personne de son représentant légal.</p>
      <p style={{ margin: '0 0 6px' }}><strong>Ayant pour Avocat :</strong> la SELARL Cabinet Exemple &amp; Associés, avocats au Barreau de Paris.</p>
      <p style={{ fontWeight: 700, margin: '14px 0 6px' }}>DONNÉ ASSIGNATION À :</p>
      <p style={{ margin: '0 0 10px' }}><strong>SARL Maison Verdier</strong>, dont le siège social est situé 8 rue des Tilleuls, 69003 Lyon, prise en la personne de son représentant légal.</p>
      <p style={{ margin: '0 0 4px' }}>D’avoir à comparaître devant le Tribunal Judiciaire de Paris, 3ᵉ chambre, 1ʳᵉ section, à l’audience du [date d’audience], afin de :</p>
      <ul style={{ margin: '0', paddingLeft: 20 }}>
        <li>voir juger que les photographies litigieuses sont originales et protégées ;</li>
        <li>voir condamner la défenderesse au paiement de dommages-intérêts en réparation de la contrefaçon alléguée.</li>
      </ul>
      <p style={{ margin: '14px 0 0', fontSize: 11, fontStyle: 'italic', color: '#5b6577', fontFamily: 'Arial, sans-serif' }}>Reconstitution simplifiée — les moyens et demandes d’une assignation réelle sont plus détaillés.</p>
    </div>
  )
}

const DOCS = [
  { id: 'contact', agence: 'PicRights · au nom de l’AFP', titre: 'Premier courriel « demande d’information »', etape: 'Phase amiable — 1ʳᵉ prise de contact', accent: '#4c9a2a', render: DocContact },
  { id: 'paiement', agence: 'PicRights · AFP', titre: 'Demande de paiement — 4 200 €', etape: 'Phase amiable — chiffrage', accent: '#1b3a8c', render: DocPaiement },
  { id: 'rc', agence: 'Rights Control · OTTO Archive', titre: 'Mise en demeure — 3 000 €', etape: 'Phase amiable — autre agence', accent: '#c0392b', render: DocRightsControl },
  { id: 'assignation', agence: 'AFP · par voie d’huissier', titre: 'Assignation devant le Tribunal', etape: 'Contentieux — l’escalade', accent: '#16233d', render: DocAssignation },
]

export default function ExemplesCourriers() {
  const [open, setOpen] = useState(null)
  const doc = DOCS.find((d) => d.id === open)
  return (
    <div style={{ padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>À quoi ressemblent ces courriers</div>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', margin: '0 0 10px', lineHeight: 1.3 }}>À quoi ressemblent une mise en demeure et une assignation</h2>
      <p style={{ fontSize: 13.5, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 16 }}>
        Voici la mise en page fidèle des courriers réellement adressés par ces agences — du premier courriel à l’assignation. <strong>Les noms, montants et références sont fictifs</strong> et servent uniquement d’illustration. Cliquez pour lire le modèle complet.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 14 }}>
        {DOCS.map((d) => (
          <button key={d.id} onClick={() => setOpen(d.id)} style={{ textAlign: 'left', background: '#F8F7F3', border: '0.5px solid var(--border)', borderTop: `3px solid ${d.accent}`, borderRadius: 8, padding: '12px 12px 14px', cursor: 'pointer', fontFamily: 'inherit' }}>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--blue-mid)', marginBottom: 4 }}>{d.agence}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.35, marginBottom: 6 }}>{d.titre}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>{d.etape}</div>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: d.accent }}>Lire le modèle →</span>
          </button>
        ))}
      </div>

      <div style={{ fontSize: 11.5, color: 'var(--muted)', fontStyle: 'italic', marginTop: 12, lineHeight: 1.55 }}>
        Reconstitutions à titre pédagogique (données fictives). Chaque situation est différente : recevoir un tel courrier ne préjuge pas de l’issue.
      </div>

      {doc && (
        <div onClick={() => setOpen(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(12,18,32,0.86)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 16px', overflow: 'auto' }}>
          <div style={{ maxWidth: 680, width: '100%', margin: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, marginBottom: 8, color: '#fff' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#7ec8e3' }}>{doc.agence}</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{doc.titre}</div>
              </div>
              <button onClick={() => setOpen(null)} aria-label="Fermer" style={{ flexShrink: 0, background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 18, lineHeight: 1, width: 34, height: 34, borderRadius: 6, cursor: 'pointer' }}>✕</button>
            </div>
            {doc.render()}
          </div>
        </div>
      )}
    </div>
  )
}
