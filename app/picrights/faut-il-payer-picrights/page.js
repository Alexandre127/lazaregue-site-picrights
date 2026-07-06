import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Faut-il payer PicRights ? Ce qu’il faut vérifier avant tout paiement',
  description: 'Faut-il payer PicRights ? Non, pas sans analyse préalable. Une demande n’est pas une condamnation, la charge de la preuve pèse sur le demandeur et toutes les photographies ne sont pas protégées. Explications.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/faut-il-payer-picrights/' },
}

const lead = 'C’est la première question que se posent la plupart des personnes qui nous contactent. La réponse est simple : une réclamation PicRights ne doit jamais conduire à un paiement automatique.'

const blocks = [
  ['key', 'Payer sans avoir procédé à une analyse juridique revient à reconnaître une créance dont le bien-fondé n’a pas été vérifié. Cela ne signifie pas que toute demande est infondée — mais qu’aucun paiement ne devrait précéder l’examen du dossier.'],
  ['h2', 'Une demande de paiement n’est pas une condamnation'],
  ['p', 'Le courrier reçu est une demande amiable. À ce stade :'],
  ['ul', ['aucun juge n’a été saisi', 'aucune décision judiciaire n’a été rendue', 'aucune condamnation n’existe']],
  ['p', 'La partie qui réclame une indemnisation devra, si aucun accord n’est trouvé, convaincre un tribunal. Le courrier ne préjuge donc absolument pas de l’issue d’une éventuelle procédure.'],
  ['h2', 'La charge de la preuve ne repose pas sur vous'],
  ['p', 'En matière civile, il appartient à celui qui réclame une indemnisation de démontrer :'],
  ['ul', ['qu’il est titulaire des droits', 'que la photographie est protégeable', 'que cette photographie a effectivement été reproduite', 'qu’un préjudice existe']],
  ['p', 'Autrement dit, ce n’est pas au destinataire du courrier de prouver son innocence.'],
  ['h2', 'Toutes les photographies ne sont pas automatiquement protégées'],
  ['p', 'C’est probablement le point le plus mal compris. Le droit français protège les photographies **originales**, c’est-à-dire celles qui traduisent des choix libres et créatifs du photographe. Certaines photographies purement documentaires ou réalisées dans un contexte très contraint peuvent ne pas révéler une originalité suffisante.'],
  ['p', 'Cela ne signifie évidemment pas que toutes les photographies de presse seraient dépourvues de protection : chaque cliché doit être apprécié individuellement.'],
  ['h2', 'Et si la demande est fondée ?'],
  ['p', 'C’est justement l’intérêt de faire analyser le dossier avant de répondre. Si l’examen confirme le bien-fondé de la réclamation, l’objectif devient d’obtenir la solution la moins coûteuse — régularisation ou négociation du montant — plutôt que de payer la somme initialement réclamée sans discussion.'],
  ['note', 'Payer immédiatement, sans analyse préalable, figure parmi les erreurs les plus fréquentes que nous rencontrons.'],
]

const faq = [
  ['PicRights peut-elle saisir mon compte bancaire si je ne paie pas ?', 'Non. Une condamnation judiciaire est nécessaire pour obtenir une exécution forcée, sauf accord volontaire de paiement de votre part.'],
  ['Si je paie, le dossier est-il définitivement clos ?', 'Un paiement met généralement fin à la réclamation, mais il vaut mieux s’assurer, avant de payer, que la demande était réellement fondée et que le montant était justifié.'],
]

export default function Page() {
  return <ArticleLayout slug="faut-il-payer-picrights" lead={lead} blocks={blocks} faq={faq} />
}
