import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights et l’AFP : comment réagir à une réclamation ?',
  description: 'PicRights agit fréquemment au nom de l’AFP. Le courrier mentionne l’agence mandante, mais les arguments juridiques restent les mêmes : titularité, mandat, originalité, preuves et montant.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/picrights-afp/' },
}

const lead = 'Beaucoup de réclamations PicRights sont adressées au nom de l’AFP. Cela change la mention de l’agence mandante, mais pas la logique de défense.'

const blocks = [
  ['h2', 'PicRights agit pour le compte de l’AFP'],
  ['p', 'PicRights intervient fréquemment au nom de l’Agence France-Presse, mais aussi de Reuters, Associated Press, Paris Match ou d’autres partenaires. Le courrier mentionne généralement l’agence pour laquelle la réclamation est formée.'],
  ['p', 'Cette précision est importante : puisque PicRights n’est pas titulaire des droits, il faut vérifier la réalité et l’étendue du mandat qui lui a été confié par l’agence — ici l’AFP.'],
  ['h2', 'Les arguments juridiques restent les mêmes'],
  ['p', 'Quelle que soit l’agence mandante, la défense s’articule autour des mêmes axes :'],
  ['ul', ['la titularité effective des droits par l’agence et la validité du mandat de PicRights', 'l’originalité réelle de la photographie en cause', 'la suffisance des preuves produites', 'la justification du montant réclamé']],
  ['h2', 'La spécificité des photographies de presse'],
  ['p', 'Les photographies d’agence posent souvent la question de l’originalité : certaines résultent d’un véritable travail créatif, d’autres de la captation factuelle d’un événement (conférence, manifestation, cérémonie officielle). Il n’existe aucune présomption d’originalité pour une photographie de presse — chaque cliché s’apprécie individuellement.'],
  ['key', 'Recevoir une réclamation « PicRights au nom de l’AFP » ne change ni votre méthode de défense, ni notre tarif : c’est le même examen juridique.'],
  ['link', ['/afp/', 'Consulter le guide dédié à l’AFP']],
]

const faq = [
  ['PicRights et AFP, est-ce la même entité ?', 'Non. PicRights est un prestataire de détection et de recouvrement qui agit pour le compte de l’AFP, laquelle est (le cas échéant) titulaire des droits. Cette distinction a des conséquences juridiques.'],
  ['Le fait que ce soit l’AFP rend-il la demande incontestable ?', 'Non. La notoriété de l’agence ne dispense pas de démontrer la titularité, l’originalité de la photo, les preuves et le montant.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-afp" lead={lead} blocks={blocks} faq={faq} />
}
