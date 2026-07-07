import AfpArticleLayout from '../../components/guide/AfpArticleLayout'

export const metadata = {
  title: 'Jurisprudence PicRights AFP : décisions 2025-2026 analysées',
  description: 'PicRights AFP : que disent réellement les tribunaux en 2025-2026 ? Analyse des décisions sur l’originalité, les droits et le préjudice.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights-afp/jurisprudence/' },
}

const lead = 'Lorsqu’une réclamation PicRights AFP n’aboutit pas à un accord amiable, le litige peut être porté devant les tribunaux. Beaucoup recherchent alors : existe-t-il une jurisprudence AFP ? La réponse est oui — mais les décisions ne portent jamais sur une seule question.'

const blocks = [
  ['p', 'Lorsqu’ils sont saisis d’un litige impliquant l’AFP, les juges examinent notamment la protection des photographies, les droits détenus par l’AFP, les contrats conclus avec les photographes, les conditions d’exploitation des images et l’évaluation du préjudice. Analyser cette jurisprudence permet de comprendre comment les tribunaux raisonnent réellement.'],
  ['h2', 'Leçon n°1 — L’AFP est soumise au droit commun du droit d’auteur'],
  ['p', 'L’AFP bénéficie d’un statut légal particulier en tant qu’agence de presse. Pour autant, les juridictions rappellent que cette spécificité ne la dispense jamais de respecter les règles du droit d’auteur. Son statut ne crée pas un régime dérogatoire lui permettant d’échapper aux règles classiques.'],
  ['h2', 'Leçon n°2 — Les clauses de cession sont interprétées strictement'],
  ['p', 'Les arrêts rendus par la cour d’appel de Paris le 9 juin 2009 comptent parmi les décisions les plus importantes concernant l’AFP. Des photographes salariés soutenaient que leurs contrats de travail ne permettaient pas à l’AFP d’exploiter leurs photographies dans de nouveaux services numériques. La cour rappelle que la cession des droits d’auteur doit préciser avec suffisamment de précision les droits cédés, les modes d’exploitation, leur destination et leur durée. Une rédaction générale ne suffit pas lorsqu’un nouveau mode d’exploitation apparaît.'],
  ['h2', 'Leçon n°3 — L’exploitation numérique est un mode d’exploitation spécifique'],
  ['p', 'Toujours dans les arrêts de 2009, la cour considère que l’exploitation numérique développée par l’AFP ne pouvait être automatiquement couverte par la clause générale de cession figurant dans les contrats de travail. Réalisée sans cession suffisamment précise, cette exploitation a été analysée comme constitutive de contrefaçon. Les nouveaux modes d’exploitation doivent être expressément prévus.'],
  ['h2', 'Leçon n°4 — Les photographes conservent leurs droits d’auteur'],
  ['p', 'La conclusion d’un contrat de travail avec l’AFP ne prive pas automatiquement les photographes de leurs droits. La qualité de salarié n’emporte aucune dérogation au principe selon lequel l’auteur demeure titulaire de ses droits, sauf cession valable. Le contrat de travail ne suffit donc pas, à lui seul, à transférer tous les droits imaginables.'],
  ['h2', 'Leçon n°5 — Les demandes AFP ne sont pas toujours accueillies (2025-2026)'],
  ['p', 'La jurisprudence la plus récente est particulièrement éclairante. Dans plusieurs décisions, le tribunal judiciaire de Paris a refusé la protection du droit d’auteur à des photographies revendiquées par l’AFP, considérant qu’elles ne traduisaient pas de choix créatifs suffisants :'],
  ['ul', ['TJ Paris, 18 février 2026 (n° 24/12841)', 'TJ Paris, 27 mars 2026 (n° 24/12313)', 'TJ Paris, 19 novembre 2025 (n° 25/05168)']],
  ['p', 'Ces décisions confirment que les juges n’accueillent jamais mécaniquement les demandes : deux dossiers très proches peuvent aboutir à des solutions différentes.'],
  ['h2', 'Décisions favorables ou défavorables : le tableau comparatif'],
  ['p', 'Toutes les réclamations ne connaissent pas la même issue. Le tableau ci-dessous illustre la diversité des solutions retenues récemment, selon que le demandeur parvient — ou non — à démontrer l’originalité de la photographie, la réalité de ses droits et le préjudice.'],
  ['table', [
    ['Issue plutôt défavorable au demandeur', 'Issue plutôt favorable au demandeur'],
    [
      ['Protection **refusée** : captation « sur le vif », cadrage classique, lumière imposée par les lieux (TJ Paris 18 févr. 2026, n° 24/12841 ; 27 mars 2026, n° 24/12313 ; 19 nov. 2025, n° 25/05168).', 'Protection **retenue** : choix esthétiques précis démontrés — mise en scène, composition, perspective (TJ Bordeaux, cliché d’un escalier monumental).'],
      ['Preuve **insuffisante** : simples captures d’écran non corroborées, chaîne des droits incomplète.', 'Preuve **solide** : cession de droits précise, constat de commissaire de justice, éléments techniques.'],
      ['Montant **réduit ou rejeté** : postes de préjudice non justifiés, majorations forfaitaires écartées.', 'Montant **accordé** : manque à gagner et licence comparable réellement démontrés.'],
    ],
  ]],
  ['p', 'Aucune règle mécanique ne se dégage : c’est la **qualité de la démonstration** — originalité, titularité, preuve, préjudice — qui détermine l’issue d’un litige PicRights AFP.'],
  ['h2', 'Leçon n°6 — Les dommages-intérêts sont évalués concrètement'],
  ['p', 'Le préjudice n’est jamais évalué de manière abstraite. Les juridictions ordonnent des expertises, contrôlent chaque poste et n’accordent qu’une indemnisation correspondant au dommage réellement démontré. Le montant des dommages-intérêts dépend toujours des circonstances propres au dossier.'],
  ['h2', 'Ce que cette jurisprudence signifie pour votre réclamation PicRights AFP'],
  ['p', 'Lorsqu’une réclamation PicRights AFP donne lieu à un contentieux, le juge ne se contente jamais de constater qu’une photographie a été utilisée. Il vérifie d’abord que l’ensemble des conditions juridiques permettant d’obtenir une condamnation sont effectivement réunies : les droits invoqués doivent être précisément démontrés, les cessions sont interprétées strictement, les nouveaux modes d’exploitation appellent une attention particulière, et le préjudice fait l’objet d’une analyse concrète.'],
  ['key', 'La jurisprudence PicRights AFP montre que les tribunaux ne raisonnent jamais automatiquement. Ils examinent successivement les droits invoqués, la portée des cessions, les conditions d’exploitation et le préjudice réellement démontré.'],
  ['link', ['/jurisprudence/', 'Consulter la bibliothèque de jurisprudence commentée']],
  ['link', ['/cas-pratiques/', 'Voir des cas pratiques de réclamations photographiques traités par le cabinet']],
]

const faq = [
  ['Que disent les tribunaux sur les réclamations PicRights AFP en 2025-2026 ?', 'Les tribunaux français ont rendu en 2025-2026 plusieurs décisions défavorables à l’AFP : TJ Paris (18 févr. 2026, n° 24/12841), TJ Paris (27 mars 2026, n° 24/12313), TJ Paris (19 nov. 2025, n° 25/05168). Dans ces affaires, les juges ont refusé la protection du droit d’auteur aux photographies revendiquées, considérant qu’elles ne traduisaient pas de choix créatifs suffisants.'],
  ['Les tribunaux condamnent-ils automatiquement dans les litiges PicRights AFP ?', 'Non. La jurisprudence montre que les juges examinent systématiquement la protection de la photographie, la preuve de l’utilisation, la titularité des droits et le préjudice réellement démontré. Deux dossiers très proches peuvent aboutir à des solutions différentes.'],
  ['La jurisprudence de 2009 me concerne-t-elle si je ne suis pas photographe de l’AFP ?', 'Les arrêts du 9 juin 2009 opposaient l’AFP à ses propres photographes, mais ils posent un principe qui vaut pour tout litige : les droits invoqués doivent être précisément démontrés et les cessions strictement interprétées. Ce principe éclaire aussi les réclamations adressées aux utilisateurs.'],
  ['Une photographie non protégée met-elle fin au litige ?', 'Pas toujours. Lorsque l’originalité n’est pas retenue, certaines juridictions examinent le fondement du parasitisme, si l’utilisation a permis de profiter des investissements de l’agence. L’analyse ne s’arrête donc pas au seul droit d’auteur.'],
  ['Puis-je m’appuyer sur ces décisions pour contester ma réclamation PicRights AFP ?', 'Chaque affaire dépend de ses faits propres, mais ces décisions montrent qu’une photographie de presse n’est pas automatiquement protégée. C’est précisément l’un des axes que nous vérifions dans votre dossier.'],
]

export default function Page() {
  return <AfpArticleLayout slug="jurisprudence" lead={lead} blocks={blocks} faq={faq} />
}
