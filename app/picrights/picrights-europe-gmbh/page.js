import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights Europe GmbH : quel est son rôle dans les réclamations photographiques ?',
  description: 'Vous avez reçu un courrier mentionnant PicRights Europe GmbH ? Découvrez le rôle de cette société, pourquoi elle vous contacte et ce qu’il convient de vérifier avant toute réponse.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/picrights-europe-gmbh/' },
}

const lead = 'De nombreuses personnes découvrent le nom PicRights Europe GmbH en recevant une première demande de paiement concernant une photographie publiée sur leur site. Qui est cette société, pourquoi vous contacte-t-elle, et détient-elle réellement les droits ?'

const blocks = [
  ['h2', 'Quel est le rôle de PicRights Europe GmbH ?'],
  ['p', 'PicRights Europe GmbH intervient dans la détection d’utilisations supposées non autorisées de photographies sur Internet. Lorsqu’une photographie est repérée sur un site, un dossier peut être ouvert puis une réclamation amiable adressée au propriétaire du site.'],
  ['p', 'Dans de nombreux dossiers, elle agit **pour le compte d’un titulaire de droits** : une agence de presse, une banque d’images ou un photographe. Le courrier mentionne généralement le titulaire concerné ainsi que la photographie faisant l’objet de la réclamation.'],
  ['h2', 'PicRights Europe GmbH est-elle titulaire des droits ?'],
  ['p', 'Pas nécessairement. Dans de nombreux dossiers, elle intervient comme **intermédiaire** chargé de la détection et de la gestion des premières démarches amiables. La question essentielle n’est donc pas seulement de savoir qui vous écrit, mais :'],
  ['ul', ['qui revendique les droits sur la photographie ?', 'quels sont exactement ces droits ?', 'sur quels éléments cette revendication repose-t-elle ?']],
  ['p', 'Cette vérification fait partie des premières étapes de l’analyse d’un dossier.'],
  ['h2', 'Pourquoi recevez-vous une demande de paiement ?'],
  ['p', 'Une réclamation est généralement adressée lorsqu’une photographie est présentée comme utilisée sans autorisation. Le courrier demande le plus souvent le retrait de la photographie, le paiement d’une indemnité, ou les deux. Recevoir une telle demande ne signifie pas que la somme réclamée est automatiquement due.'],
  ['h2', 'PicRights Europe GmbH peut-elle engager une procédure judiciaire ?'],
  ['p', 'Une réclamation amiable constitue la première étape. Si aucun accord n’intervient, le dossier peut, selon les circonstances, être transmis à un cabinet d’avocats. Une éventuelle procédure judiciaire relève ensuite du titulaire des droits ou de la personne ayant qualité pour agir. Le courrier de PicRights Europe GmbH ne constitue donc pas, à lui seul, une assignation.'],
  ['h2', 'Que faut-il vérifier avant de répondre ?'],
  ['ul', ['la photographie concernée', 'le titulaire des droits mentionné', 'les preuves produites', 'le contexte d’utilisation', 'le montant réclamé']],
  ['p', 'Chaque dossier présente des caractéristiques propres : aucune réponse standard ne convient à toutes les situations.'],
  ['note', 'Payer immédiatement, ignorer totalement le courrier ou répondre sans avoir analysé le dossier figurent parmi les réactions les plus fréquentes — et les plus risquées.'],
]

const faq = [
  ['PicRights Europe GmbH est-elle une société réelle ?', 'Oui. Elle intervient dans le traitement de réclamations portant sur des utilisations supposées non autorisées de photographies.'],
  ['Dois-je payer parce que PicRights Europe GmbH me l’a demandé ?', 'Pas automatiquement. Une demande amiable n’est pas une décision de justice : il convient d’examiner d’abord si la réclamation est fondée.'],
  ['Détient-elle les droits sur les photographies ?', 'Pas nécessairement. Dans de nombreux dossiers, elle agit pour le compte d’un titulaire de droits mentionné dans la réclamation.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-europe-gmbh" lead={lead} blocks={blocks} faq={faq} />
}
