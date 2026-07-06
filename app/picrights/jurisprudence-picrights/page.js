import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Jurisprudence PicRights : ce que disent réellement les tribunaux',
  description: 'Existe-t-il une jurisprudence PicRights ? Découvrez comment les tribunaux analysent les réclamations photographiques : originalité, titularité des droits, preuve et évaluation du préjudice.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/picrights/jurisprudence-picrights/' },
}

const lead = 'Lorsqu’on reçoit une réclamation PicRights, une question revient : existe-t-il une jurisprudence PicRights ? La réponse est contre-intuitive.'

const blocks = [
  ['key', 'Il n’existe pas de « jurisprudence PicRights ». Les tribunaux ne jugent jamais PicRights en tant que telle : ils appliquent les règles classiques du droit d’auteur. Ils ne se demandent pas si PicRights avait raison d’écrire, mais si les conditions du droit d’auteur sont réunies.'],
  ['p', 'Lorsqu’une affaire est portée devant un tribunal, les juges répondent toujours aux mêmes questions :'],
  ['ul', ['la photographie est-elle protégée par le droit d’auteur ?', 'le demandeur démontre-t-il qu’il est titulaire des droits invoqués ?', 'la reproduction est-elle effectivement établie ?', 'le préjudice est-il démontré ?', 'le montant réclamé est-il justifié ?']],
  ['p', 'Une mise en demeure PicRights est une **position amiable**. Une décision judiciaire résulte, elle, d’un examen contradictoire des preuves produites par chacune des parties. Les juges procèdent toujours à une analyse individualisée : ils ne condamnent jamais automatiquement le destinataire d’une réclamation.'],
  ['h2', 'Comment les tribunaux raisonnent réellement'],
  ['p', 'Une erreur fréquente consiste à croire que le juge vérifie uniquement si une photographie a été utilisée sans autorisation. Son raisonnement est plus complet : existe-t-il une œuvre protégée ? qui détient les droits ? les faits sont-ils établis ? quelles preuves sont produites ? quel est le préjudice réellement démontré ? Si l’une de ces conditions fait défaut, la demande peut être rejetée, totalement ou partiellement.'],
  ['h2', '1. Toutes les photographies ne sont pas automatiquement protégées'],
  ['p', 'Avant tout, le juge vérifie si la photographie peut bénéficier de la protection du droit d’auteur, ce qui suppose de véritables choix créatifs. Selon les affaires, il examine le choix du sujet, le cadrage, l’angle, la lumière, la profondeur de champ, la composition et le moment du déclenchement. Il ne suffit jamais d’affirmer qu’une photographie est « originale » : encore faut-il expliquer pourquoi.'],
  ['h2', '2. Le demandeur doit démontrer qu’il détient réellement les droits'],
  ['p', 'Une photographie peut être protégée sans que celui qui agit dispose des droits pour réclamer une indemnisation. Les tribunaux vérifient qui est l’auteur, qui est titulaire des droits patrimoniaux, quelles cessions sont intervenues et quels mandats existent. La charge de la preuve repose sur le demandeur : la simple production d’une réclamation amiable n’est jamais suffisante.'],
  ['h2', '3. La preuve occupe une place centrale'],
  ['p', 'Une procédure en contrefaçon est avant tout une procédure de preuve. Le juge ne présume pas les faits : il examine les constats de commissaire de justice, les captures d’écran, les URL, les dates, les métadonnées, les échanges et les contrats. Chaque élément est discuté contradictoirement, et l’appréciation dépend largement de la qualité des preuves apportées.'],
  ['h2', '4. Les demandes ne sont pas toujours accueillies'],
  ['p', 'Contrairement à une idée reçue, les demandeurs n’obtiennent pas systématiquement gain de cause. Selon les affaires, les juridictions accueillent les demandes en totalité, ne les accueillent que partiellement, ou déboutent intégralement le demandeur. Cette diversité des solutions rappelle qu’aucune réclamation ne peut être analysée de manière automatique : tout dépend des droits invoqués, de la photographie, des preuves, du contexte d’utilisation et des arguments des parties.'],
  ['note', 'Nous tenons une bibliothèque de jurisprudence commentée, classée par thème (originalité, titularité, préjudice, procédure). Chaque décision y est présentée individuellement, à partir de ses motifs — jamais résumée de mémoire.'],
  ['key', 'Les juridictions ne raisonnent jamais en fonction de l’auteur du courrier reçu, mais en fonction des règles du droit d’auteur. La vraie question est toujours : le demandeur serait-il en mesure de démontrer, devant un tribunal, l’ensemble des conditions nécessaires au succès de son action ?'],
  ['link', ['/jurisprudence/', 'Consulter la bibliothèque de jurisprudence commentée']],
]

export default function Page() {
  return <ArticleLayout slug="jurisprudence-picrights" lead={lead} blocks={blocks} />
}
