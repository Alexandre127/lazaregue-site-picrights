/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export const metadata = {
  title: 'Politique de confidentialité (RGPD)',
  description: 'Politique de confidentialité RGPD du cabinet Lazarègue Avocats : responsable, finalités et bases légales par traitement, sous-traitants et transferts hors UE, durées de conservation, droits, données de tiers, secret professionnel, cookies, sécurité.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/confidentialite/' },
  robots: { index: true, follow: true },
}

const s = {
  page: { maxWidth: 800, margin: '0 auto', padding: '0 24px 40px' },
  h2: { fontSize: 19, fontWeight: 600, color: 'var(--text)', margin: '30px 0 10px' },
  h3: { fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '20px 0 6px' },
  h4: { fontSize: 13, fontWeight: 600, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: '12px 0 4px' },
  p: { fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, margin: '0 0 10px' },
  ul: { margin: '0 0 10px', paddingLeft: 18 },
  li: { fontSize: 14, color: 'var(--secondary)', lineHeight: 1.7, marginBottom: 5 },
  a: { color: 'var(--blue)' },
}

function P({ children }) { return <p style={s.p}>{children}</p> }
function UL({ items }) { return <ul style={s.ul}>{items.map((it, i) => <li key={i} style={s.li}>{it}</li>)}</ul> }

export default function Confidentialite() {
  return (
    <div style={s.page}>
      <div style={{ padding: '32px 0 0' }}>
        <nav style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
          <Link href="/litige-afp-picrights/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>{' → '}Confidentialité
        </nav>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, marginBottom: 6 }}>Politique de confidentialité – lazaregue-avocats.fr</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Mise à jour au 06/07/2026</p>
        <P>Le présent document a pour objet d'informer les utilisateurs du site lazaregue-avocats.fr sur les traitements de données à caractère personnel mis en œuvre dans le cadre des services proposés (analyseur d'originalité, devis instantané, formulaire d'assignation, paiement en ligne, cookies et mesures d'audience), conformément au Règlement (UE) 2016/679 du 27 avril 2016 (« RGPD ») et à la loi n° 78-17 du 6 janvier 1978 modifiée dite « Informatique et libertés ».</P>
      </div>

      <h2 style={s.h2}>1. Identité du responsable de traitement et coordonnées</h2>
      <P>Le responsable du traitement est l'avocat qui détermine les finalités et les moyens des traitements de données à caractère personnel mis en œuvre via le site lazaregue-avocats.fr. Au sens de l'article 4, 7) du RGPD, est « responsable du traitement » la personne physique ou morale qui, seule ou conjointement avec d'autres, détermine les finalités et les moyens du traitement.</P>
      <P>En pratique, le cabinet Lazarègue Avocats, représenté par son représentant légal, agit comme responsable du traitement des données collectées via le site, même si des personnes physiques (collaborateurs, prestataires techniques) interviennent pour son compte.</P>
      <P><strong>Coordonnées de contact (données personnelles / RGPD) :</strong></P>
      <UL items={[
        <span key="a">Adresse postale : <strong>Lazarègue Avocats, 18 rue de Tilsitt, 75017 Paris</strong></span>,
        <span key="b">Adresse électronique dédiée aux questions de protection des données : <a style={s.a} href="mailto:contact@lazaregue-avocats.fr">contact@lazaregue-avocats.fr</a></span>,
      ]} />
      <P>Le cabinet n'est pas soumis à l'obligation légale de désigner un délégué à la protection des données (DPO) au sens des articles 37 et suivants du RGPD, mais un interlocuteur unique est désigné pour toute question relative au traitement des données personnelles.</P>

      <h2 style={s.h2}>2. Cadre général : secret professionnel et articulation avec le RGPD</h2>
      <P>En tant qu'avocat, le cabinet est tenu au secret professionnel pour l'ensemble des informations confiées par ses clients ou recueillies à l'occasion de l'exécution de ses missions, y compris les données à caractère personnel contenues dans les documents transmis via le site.</P>
      <P>Le RGPD reconnaît que des obligations de secret professionnel peuvent justifier des aménagements à certaines obligations d'information, notamment lorsque les données doivent rester confidentielles en vertu du droit de l'Union ou du droit national. Toutefois, cette confidentialité ne dispense pas le responsable du traitement :</P>
      <UL items={[
        "de respecter les principes de licéité, loyauté, transparence, limitation des finalités, minimisation des données, exactitude, limitation de la conservation, intégrité et confidentialité ;",
        "de mettre en œuvre des mesures techniques et organisationnelles appropriées conformément à l'article 24 du RGPD (« accountability »).",
      ]} />
      <P>En conséquence, les traitements décrits ci-après sont mis en œuvre dans le respect concomitant des règles déontologiques et du secret professionnel de l'avocat, et du RGPD et de la loi Informatique et libertés (modifiée notamment par l'ordonnance n° 2018-1125 du 12 décembre 2018).</P>

      <h2 style={s.h2}>3. Description des traitements, finalités, bases légales et catégories de données</h2>

      <h3 style={s.h3}>3.1. Service (1) – Analyseur IA d'originalité de la photographie reprochée</h3>
      <P><em>Fonctionnement :</em> le visiteur téléverse la photographie objet de la mise en demeure ; l'image est transmise à une API d'intelligence artificielle (Anthropic), hébergée aux États-Unis, afin de réaliser une analyse d'originalité ; la photographie et le résultat d'analyse ne sont pas conservés au-delà de ce qui est strictement nécessaire à la fourniture du service.</P>
      <h4 style={s.h4}>Catégories de données</h4>
      <UL items={[
        "Fichier image téléversé (photographie reprochée), pouvant contenir des données personnelles (visages, lieux identifiables, métadonnées EXIF, etc.) ;",
        "Données techniques de connexion nécessaires à l'appel de l'API (logs techniques pseudonymisés ou identifiants de requête).",
      ]} />
      <h4 style={s.h4}>Finalités</h4>
      <UL items={[
        "Fournir un outil d'analyse technique d'originalité de la photographie en vue de l'évaluation juridique d'une réclamation de droits d'auteur ;",
        "Assurer le fonctionnement, la sécurité et la traçabilité technique du service (journalisation minimale des requêtes, lutte contre les abus).",
      ]} />
      <h4 style={s.h4}>Bases légales</h4>
      <UL items={[
        "Exécution de mesures précontractuelles ou contractuelles (art. 6, §1, b) RGPD) : mise à disposition d'un service d'analyse demandé par l'utilisateur en vue de la potentielle conclusion d'un contrat d'assistance ou de représentation ;",
        "Intérêt légitime du cabinet (art. 6, §1, f) RGPD) : sécuriser le service, prévenir les abus, garantir l'intégrité du système d'information, et préparer la défense des intérêts des personnes qui sollicitent l'avocat.",
      ]} />
      <h4 style={s.h4}>Durée de conservation</h4>
      <UL items={[
        "Fichier image : pas de conservation au-delà de la durée strictement nécessaire au traitement technique par l'API ; suppression automatique après traitement ;",
        "Logs techniques : conservation limitée à la sécurité et au bon fonctionnement du service, puis anonymisation ou suppression.",
      ]} />

      <h3 style={s.h3}>3.2. Service (2) – Devis instantané à partir de la mise en demeure</h3>
      <P><em>Fonctionnement :</em> le visiteur téléverse la mise en demeure reçue (PDF, photo, scan) ; un outil d'IA extrait les principales informations (agence, nombre de photographies, montant réclamé) afin de générer un devis indicatif ; le document est supprimé après traitement.</P>
      <h4 style={s.h4}>Catégories de données</h4>
      <UL items={[
        "Document téléversé, pouvant contenir : données d'identification de l'utilisateur, données d'identification de l'expéditeur (agence, avocat, société), données relatives au litige (références, URL, montants) ;",
        "Données techniques de connexion (logs restreints).",
      ]} />
      <h4 style={s.h4}>Finalités</h4>
      <UL items={[
        "Fournir un devis instantané pour une intervention potentielle du cabinet ;",
        "Permettre au cabinet d'évaluer rapidement la situation juridique et de préparer une proposition d'assistance ou de représentation ;",
        "Assurer le fonctionnement et la sécurité du service.",
      ]} />
      <h4 style={s.h4}>Bases légales</h4>
      <UL items={[
        "Exécution de mesures précontractuelles (art. 6, §1, b) RGPD) : traitement nécessaire à la fourniture d'un devis à la demande de la personne concernée ;",
        "Intérêt légitime (art. 6, §1, f) RGPD) pour la sécurisation technique du service et la lutte contre les abus.",
      ]} />
      <h4 style={s.h4}>Durée de conservation</h4>
      <UL items={[
        "Document téléversé : suppression à l'issue du traitement technique, sauf si l'utilisateur décide ensuite de confier formellement son dossier au cabinet (les documents sont alors intégrés au dossier client et conservés selon les règles applicables aux dossiers d'avocat) ;",
        "Logs techniques : durée limitée, strictement nécessaire à la sécurité.",
      ]} />

      <h3 style={s.h3}>3.3. Service (3) – Formulaire d'assignation et contact (transmission par e-mail)</h3>
      <P><em>Fonctionnement :</em> le visiteur peut transmettre un ou plusieurs documents (mise en demeure, échanges, pièces, captures), son adresse e-mail et son numéro de téléphone ; ces informations sont transmises au cabinet par e-mail et intégrées, le cas échéant, au dossier du client.</P>
      <h4 style={s.h4}>Catégories de données</h4>
      <UL items={[
        "Données d'identification et de contact : nom, prénom, adresse e-mail, numéro de téléphone, éventuellement adresse postale ;",
        "Données relatives au litige et à la situation professionnelle ou personnelle (contenues dans les documents) ;",
        "Données concernant des tiers (adversaires, témoins, cocontractants, photographes, agences…) figurant dans les documents.",
      ]} />
      <h4 style={s.h4}>Finalités</h4>
      <UL items={[
        "Répondre aux demandes de contact et de prise en charge de dossier ;",
        "Constituer et instruire les dossiers clients (conseil, pré-contentieux, contentieux, rédaction et suivi d'assignations) ;",
        "Communiquer avec le client (suivi du dossier, informations sur la procédure, échanges confidentiels).",
      ]} />
      <h4 style={s.h4}>Bases légales</h4>
      <UL items={[
        "Exécution de mesures précontractuelles et contractuelles (art. 6, §1, b) RGPD) : traitement nécessaire à l'étude de la demande, à la conclusion et à l'exécution du contrat de mission d'avocat ;",
        "Intérêt légitime (art. 6, §1, f) RGPD) : organisation interne du cabinet, gestion des dossiers, défense des droits en justice, et traitement des données de tiers strictement nécessaire à la défense des intérêts du client dans le cadre du secret professionnel.",
      ]} />
      <h4 style={s.h4}>Durée de conservation</h4>
      <UL items={[
        "Données de contact et de dossier : durée de la relation contractuelle, puis archivage pendant la durée nécessaire au respect des obligations légales et déontologiques de l'avocat (délais de prescription, règles d'archivage) ;",
        "Demandes sans suite : conservation limitée au temps nécessaire à l'étude de la situation et, le cas échéant, à la preuve de l'absence de conflit d'intérêts, puis suppression ou anonymisation.",
      ]} />

      <h3 style={s.h3}>3.4. Service (4) – Paiement en ligne via Stripe</h3>
      <P><em>Fonctionnement :</em> le site propose le règlement en ligne des honoraires via la solution de paiement Stripe. Les données de carte bancaire sont traitées directement par Stripe et ne sont pas conservées par le cabinet.</P>
      <h4 style={s.h4}>Catégories de données</h4>
      <UL items={[
        "Données d'identification et de contact du payeur (nom, prénom, e-mail, éventuellement adresse de facturation) ;",
        "Données de transaction : montant, date, référence de paiement, identifiant Stripe, état du paiement ;",
        "Données de carte bancaire : traitées par Stripe conformément à la norme PCI-DSS, non stockées par le cabinet.",
      ]} />
      <h4 style={s.h4}>Finalités</h4>
      <UL items={[
        "Permettre le paiement en ligne des honoraires et frais ;",
        "Assurer la gestion comptable et fiscale du cabinet (facturation, justificatifs) ;",
        "Lutter contre la fraude au paiement et sécuriser les transactions.",
      ]} />
      <h4 style={s.h4}>Bases légales</h4>
      <UL items={[
        "Exécution du contrat (art. 6, §1, b) RGPD) ;",
        "Respect d'obligations légales (art. 6, §1, c) RGPD) : obligations comptables et fiscales ;",
        "Intérêt légitime (art. 6, §1, f) RGPD) : prévention de la fraude, sécurité des paiements.",
      ]} />
      <h4 style={s.h4}>Durée de conservation</h4>
      <UL items={[
        "Données de facturation et de paiement : durée légale applicable en matière comptable et fiscale ;",
        "Données de carte bancaire : gérées et conservées par Stripe selon ses propres politiques, sans conservation par le cabinet.",
      ]} />

      <h3 style={s.h3}>3.5. Hébergement, mesures d'audience, cookies et traceurs</h3>
      <P>Le site est hébergé par Vercel (infrastructure cloud) et peut utiliser des outils de mesure d'audience et des cookies pour assurer son fonctionnement et analyser sa fréquentation.</P>
      <h4 style={s.h4}>Données techniques d'hébergement</h4>
      <P>Logs de serveur (adresses IP, dates et heures de connexion, pages consultées, erreurs techniques, identifiants de requêtes), aux fins d'assurer la mise à disposition et la sécurité du site (détection d'anomalies, intrusions, abus). <strong>Base légale :</strong> intérêt légitime (art. 6, §1, f) RGPD). <strong>Conservation :</strong> durée strictement nécessaire à la sécurité et au diagnostic technique, puis anonymisation ou suppression.</P>
      <h4 style={s.h4}>Cookies et autres traceurs</h4>
      <P>Conformément aux exigences de la CNIL et aux directives européennes, le site peut mettre en œuvre différents types de cookies :</P>
      <UL items={[
        "Cookies strictement nécessaires au fonctionnement (session, sécurité, langue) — base : intérêt légitime, sans consentement préalable ;",
        "Cookies de mesure d'audience et autres cookies non strictement nécessaires — base : consentement de l'utilisateur (art. 6, §1, a) RGPD), recueilli via un bandeau/module de gestion des cookies ;",
        "Le cas échéant, cookies liés à des services tiers (paiement, scripts de sécurité).",
      ]} />
      <P>L'utilisateur peut refuser les cookies non nécessaires ou retirer son consentement à tout moment via le module de gestion des cookies ou les paramètres de son navigateur. Les informations collectées via les cookies de mesure d'audience sont conservées pendant une durée proportionnée à la finalité, puis anonymisées ou supprimées.</P>

      <h2 style={s.h2}>4. Sous-traitants, responsables conjoints et transferts hors UE</h2>
      <h3 style={s.h3}>4.1. Sous-traitants intervenant pour le compte du cabinet</h3>
      <P>Conformément à l'article 28 du RGPD, les prestataires qui traitent des données personnelles pour le compte du cabinet agissent en qualité de sous-traitants et doivent présenter des garanties suffisantes. Le cabinet conclut avec chacun un contrat définissant l'objet, la nature, la finalité, la durée du traitement, le type de données, les catégories de personnes concernées et les obligations du sous-traitant (confidentialité, sécurité, assistance, suppression ou restitution des données, audits, sous-traitance ultérieure).</P>
      <P>À la date des présentes, les principaux sous-traitants sont notamment :</P>
      <UL items={[
        <span key="v"><strong>Vercel</strong> — hébergement du site et des services associés ;</span>,
        <span key="a"><strong>Anthropic</strong> — API d'IA pour l'analyse d'images et de documents ;</span>,
        <span key="s"><strong>Stripe</strong> — traitement des paiements en ligne ;</span>,
        <span key="r"><strong>Resend</strong> — acheminement des e-mails ;</span>,
        <span key="an">Le cas échéant, un outil de mesure d'audience (analytics), soumis à consentement.</span>,
      ]} />
      <P>Ces sous-traitants sont tenus de ne traiter les données que sur instruction documentée du cabinet, d'en garantir la confidentialité, de mettre en œuvre des mesures de sécurité appropriées, d'assister le cabinet dans la gestion des demandes de droits et des incidents, et de supprimer ou restituer les données à l'issue de la prestation (sauf obligation légale de conservation).</P>
      <h3 style={s.h3}>4.2. Responsables de traitement conjoints</h3>
      <P>Dans certaines hypothèses (chaînes de traitement, intégration de services tiers), plusieurs acteurs peuvent déterminer conjointement les finalités et les moyens d'un même traitement et être qualifiés de « responsables conjoints » (art. 26 RGPD). Un accord définit alors de manière transparente leurs obligations respectives (exercice des droits, information, sécurité, notification des violations). Indépendamment de cet accord, la personne concernée peut exercer ses droits à l'égard de chacun des responsables.</P>
      <h3 style={s.h3}>4.3. Transferts de données hors de l'Union européenne</h3>
      <P>Certains sous-traitants (par exemple Anthropic, Stripe, ou certains services d'hébergement/analytics) peuvent être établis hors UE ou recourir à des ressources situées hors UE, notamment aux États-Unis. Le cabinet s'assure que ces transferts sont encadrés conformément aux articles 44 et suivants du RGPD, notamment par : une décision d'adéquation de la Commission européenne lorsqu'elle existe ; des clauses contractuelles types approuvées par la Commission, complétées le cas échéant par des mesures supplémentaires ; ou toute autre garantie appropriée prévue par le RGPD. Des informations complémentaires peuvent être obtenues auprès du cabinet (article 1).</P>

      <h2 style={s.h2}>5. Données concernant des tiers</h2>
      <P>Les documents transmis au cabinet (photographies, mises en demeure, courriels, contrats…) peuvent contenir des données relatives à des tiers : photographes, agences, sociétés de gestion, ayants droit, adversaires, cocontractants, prestataires, témoins, salariés, collaborateurs, etc.</P>
      <P>Ces données sont traitées dans la seule mesure où elles sont nécessaires à l'analyse de la situation juridique, à la défense des intérêts du client ou à l'exécution de la mission d'avocat, et où leur traitement est compatible avec le secret professionnel et les règles déontologiques.</P>
      <P>Le RGPD prévoit qu'une obligation d'information des personnes dont les données sont collectées indirectement peut faire l'objet d'une exception lorsque ces données doivent rester confidentielles en vertu d'une obligation de secret professionnel. Lorsqu'une telle information serait impossible, exigerait des efforts disproportionnés, ou entrerait en conflit avec le secret professionnel ou la stratégie de défense, le cabinet pourra se prévaloir de cette exception.</P>

      <h2 style={s.h2}>6. Mesures de sécurité</h2>
      <P>Conformément à l'article 24 du RGPD, le cabinet met en œuvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque et démontrer la conformité de ses traitements :</P>
      <UL items={[
        "sécurisation des systèmes d'information et des accès (contrôle des droits, authentification, mises à jour, sauvegardes) ;",
        "confidentialité des données (secret professionnel, clauses de confidentialité, limitation des accès aux personnes habilitées) ;",
        "sécurisation des échanges (protocoles chiffrés, protection de la messagerie) ;",
        "sensibilisation des collaborateurs aux bonnes pratiques ;",
        "protection des données dès la conception et par défaut (« privacy by design / by default »).",
      ]} />
      <P>Le fait de procéder à un traitement de données sans mettre en œuvre les mesures prescrites à l'article 24 du RGPD est sanctionné par l'article 226-17 du Code pénal. En raison de la sensibilité des informations qu'ils détiennent, les cabinets d'avocats accordent une attention renforcée à la sécurité de leurs systèmes d'information.</P>

      <h2 style={s.h2}>7. Droits des personnes concernées et modalités d'exercice</h2>
      <P>Toute personne concernée dispose, dans les conditions et limites prévues par le RGPD et la loi Informatique et libertés, des droits suivants :</P>
      <UL items={[
        "Droit d'accès aux données la concernant et aux informations afférentes ;",
        "Droit de rectification des données inexactes ou incomplètes ;",
        "Droit d'effacement (« droit à l'oubli »), sauf lorsque la conservation est nécessaire au respect d'une obligation légale ou à la constatation, l'exercice ou la défense de droits en justice ;",
        "Droit à la limitation du traitement ;",
        "Droit d'opposition, pour des raisons tenant à sa situation particulière, à un traitement fondé sur l'intérêt légitime ;",
        "Droit à la portabilité, lorsque le traitement est fondé sur le consentement ou l'exécution d'un contrat et réalisé par des procédés automatisés ;",
        "Droit de retirer son consentement à tout moment lorsque le traitement est fondé sur le consentement.",
      ]} />
      <P>L'exercice de ces droits peut être restreint lorsqu'il porterait atteinte au secret professionnel de l'avocat, serait susceptible de compromettre la défense des droits du client ou la stratégie contentieuse, ou entrerait en conflit avec des obligations légales de conservation ou d'archivage.</P>
      <h3 style={s.h3}>7.1. Modalités d'exercice</h3>
      <P>Pour exercer ses droits, toute personne peut adresser une demande par courrier postal à <strong>Lazarègue Avocats, 18 rue de Tilsitt, 75017 Paris</strong>, ou par e-mail à <a style={s.a} href="mailto:contact@lazaregue-avocats.fr">contact@lazaregue-avocats.fr</a>. La demande doit préciser l'identité du demandeur (justificatif si nécessaire), le droit exercé et toute information utile pour retrouver les données concernées.</P>
      <P>Le cabinet répond dans les délais prévus par la réglementation, en tenant compte le cas échéant des limitations résultant du secret professionnel ou de la défense des droits en justice. La personne concernée dispose également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission nationale de l'informatique et des libertés).</P>

      <h2 style={s.h2}>8. Évolution de la politique de confidentialité</h2>
      <P>La présente politique peut évoluer, notamment en cas de modification des services, des textes applicables ou des recommandations des autorités de contrôle (CNIL, CEPD). Toute modification substantielle sera portée à la connaissance des utilisateurs par tout moyen approprié. Cette politique s'inscrit dans une démarche de responsabilisation (« accountability ») : le cabinet documente ses traitements, réexamine régulièrement ses mesures techniques et organisationnelles, et les actualise si nécessaire.</P>

      <div style={{ padding: '24px 0 8px', borderTop: '0.5px solid var(--border)', marginTop: 24 }}>
        <Link href="/litige-afp-picrights/" style={{ fontSize: 12, color: 'var(--blue)', textDecoration: 'none' }}>← Retour à l'accueil</Link>
      </div>
    </div>
  )
}
