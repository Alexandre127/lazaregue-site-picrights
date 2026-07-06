import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Faut-il payer PicRights ? Les vérifications indispensables avant toute décision',
  description: 'Faut-il payer PicRights ? Il n’existe aucune réponse universelle. Avant tout paiement, vérifiez si la photographie est protégée, qui détient les droits, si les preuves suffisent et si le montant est justifié.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/faut-il-payer-picrights/' },
}

const lead = 'Vous avez reçu un courrier ou un e-mail de PicRights réclamant plusieurs centaines, voire plusieurs milliers d’euros pour l’utilisation d’une photographie sur votre site ? La première réaction est presque toujours la même : dois-je payer ?'

const blocks = [
  ['p', 'La réponse est simple : **il n’existe aucune réponse universelle.** Dans certains dossiers, une indemnisation peut être justifiée. Dans d’autres, la demande peut être totalement ou partiellement contestée. Avant toute décision, il convient d’analyser juridiquement le dossier.'],
  ['key', 'Le courrier PicRights ne constitue ni une décision de justice, ni une condamnation, ni la preuve définitive d’une contrefaçon. C’est une réclamation amiable : celui qui réclame devra, en cas de contestation, démontrer devant le tribunal le bien-fondé de ses prétentions — la preuve incombe à celui qui réclame l’exécution d’une obligation.'],
  ['h2', 'Pourquoi PicRights vous demande-t-elle de payer ?'],
  ['p', 'PicRights est une société spécialisée dans la détection des utilisations supposées non autorisées de photographies sur Internet. Les agences de presse et titulaires de droits lui confient la surveillance de leurs catalogues. Selon les éléments produits dans plusieurs procédures, le fonctionnement est généralement le suivant :'],
  ['ul', ['comparaison automatisée d’empreintes numériques', 'détection d’une correspondance sur un site internet', 'envoi d’une première demande amiable', 'relances successives', 'puis, en cas d’échec, transmission éventuelle du dossier à un cabinet d’avocats']],
  ['p', 'Autrement dit, le premier courrier reçu correspond généralement au **début d’une phase amiable** — pas à une condamnation.'],
  ['h2', 'Recevoir un courrier signifie-t-il que vous êtes responsable ?'],
  ['p', 'Non. Le courrier signifie uniquement qu’un titulaire de droits considère qu’une photographie lui appartenant aurait été utilisée sans autorisation. Il ne préjuge pas de la réponse qui serait apportée par un tribunal. Plusieurs questions doivent alors être examinées.'],
  ['h2', '1re vérification : la photographie est-elle réellement protégée ?'],
  ['p', 'En droit français, toutes les photographies ne bénéficient pas automatiquement de la protection du droit d’auteur. L’originalité doit résulter de choix libres et créatifs traduisant l’empreinte de la personnalité du photographe. Elle ne peut résulter du seul sujet représenté, de la technicité de la prise de vue ou du mérite professionnel.'],
  ['p', 'Les juridictions refusent régulièrement cette protection pour des photographies d’actualité, des clichés pris sur le vif lors d’événements publics ou des portraits standards lorsqu’aucun parti pris esthétique personnel n’est démontré.'],
  ['h2', '2e vérification : celui qui réclame est-il bien titulaire des droits ?'],
  ['p', 'Le demandeur doit démontrer qu’il dispose effectivement des droits lui permettant d’agir. Cette question se pose notamment lorsque plusieurs photographies très similaires sont revendiquées par des agences différentes, ou lorsqu’un doute sérieux existe sur l’attribution du cliché. La présomption de titularité peut être renversée dans ces situations.'],
  ['h2', '3e vérification : les preuves produites sont-elles suffisantes ?'],
  ['p', 'Dans la majorité des dossiers, les preuves reposent principalement sur des captures d’écran. Réalisées en dehors d’un constat effectué dans des conditions techniques garantissant leur authenticité, elles ne présentent pas les mêmes garanties qu’un constat de commissaire de justice. Cela ne les prive pas de toute valeur : leur force probante dépend des autres éléments produits au débat.'],
  ['h2', '4e vérification : le montant demandé est-il justifié ?'],
  ['p', 'Même lorsqu’une utilisation sans autorisation est établie, le montant réclamé n’est pas automatiquement celui qu’un tribunal retiendrait. L’analyse des décisions montre plusieurs constantes : le préjudice doit être prouvé, une licence comparable justifiée, les barèmes internes ou théoriques ne suffisent pas, et l’indemnisation doit rester proportionnée au dommage réellement démontré — sans caractère punitif.'],
  ['h2', 'Dans quels cas peut-il être opportun de payer ?'],
  ['p', 'Il existe des situations où une régularisation peut être envisagée : lorsque l’utilisation est établie, la titularité non sérieusement contestable, l’originalité démontrée, les preuves solides et le montant cohérent avec le préjudice susceptible d’être retenu. Une solution amiable peut alors éviter une procédure longue et coûteuse — mais cette décision ne devrait intervenir qu’après analyse.'],
  ['h2', 'Dans quels cas une contestation est-elle envisageable ?'],
  ['ul', ['**Preuves insuffisantes** : des captures issues des propres outils du demandeur, non corroborées, dont le juge apprécie souverainement la valeur', '**Originalité non démontrée** : une simple description de l’image ne suffit pas ; il faut expliquer les choix créatifs opérés', '**Simple reportage** : conférences, réunions officielles, événements sportifs, cérémonies — où les choix peuvent être largement dictés par les circonstances', '**Montant disproportionné** : à défaut de manque à gagner, de licence comparable ou de préjudice réel, les sommes peuvent être fortement réduites']],
  ['h2', 'Faut-il négocier ?'],
  ['p', 'Dans de nombreux dossiers, la négociation constitue une troisième voie : obtenir des explications, demander les justificatifs utiles, discuter le montant, rechercher un accord transactionnel. La stratégie dépend de la qualité des preuves, de la photographie concernée, de la jurisprudence applicable et du risque procédural.'],
  ['h2', 'Ce qu’il ne faut généralement pas faire'],
  ['ul', ['**Payer immédiatement** : le paiement met généralement fin à toute possibilité de contestation', '**Reconnaître spontanément une contrefaçon** : certaines réponses données dans l’urgence sont interprétées comme une reconnaissance', '**Détruire les éléments utiles** : conservez le courrier, les échanges, les anciennes versions du site, les contrats avec l’agence web et les licences']],
  ['note', 'Le retrait de la photographie est souvent prudent lorsqu’elle est encore en ligne, mais il ne met pas automatiquement fin au litige : une demande indemnitaire peut être maintenue au titre d’une utilisation passée.'],
  ['key', 'La véritable question n’est pas « faut-il payer PicRights ? » mais « la demande est-elle juridiquement fondée dans votre situation particulière ? ». C’est cette analyse qui permet ensuite de choisir : régulariser, négocier ou contester.'],
]

const faq = [
  ['PicRights peut-elle saisir mon compte bancaire ?', 'Non. Une condamnation judiciaire est nécessaire pour une exécution forcée, sauf accord volontaire de paiement.'],
  ['Payer met-il fin au dossier ?', 'Généralement oui, mais il vaut mieux s’assurer, avant de payer, que la demande était fondée et que le montant était justifié.'],
]

export default function Page() {
  return <ArticleLayout slug="faut-il-payer-picrights" lead={lead} blocks={blocks} faq={faq} />
}
