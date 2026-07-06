import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights Europe GmbH : qui est cette société et comment elle fonctionne',
  description: 'PicRights Europe GmbH détecte les utilisations non autorisées de photographies pour le compte d’agences et de photographes. Qui est cette société, comment fonctionne sa détection, et pourquoi elle n’est pas titulaire des droits.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/picrights-europe-gmbh/' },
}

const lead = 'PicRights Europe GmbH détecte les utilisations supposées non autorisées de photographies et adresse des demandes de régularisation pour le compte de titulaires de droits. Voici concrètement qui elle est et comment son système fonctionne.'

const blocks = [
  ['h2', 'Une société de détection, pas un titulaire de droits'],
  ['p', 'PicRights est une société spécialisée dans la détection des utilisations supposées non autorisées de photographies sur Internet. Elle agit pour le compte de nombreux titulaires de droits : agences de presse, banques d’images, photographes professionnels et éditeurs.'],
  ['p', 'Contrairement à une idée répandue, PicRights n’est généralement **pas titulaire** des droits d’auteur. Elle intervient comme prestataire chargé de détecter et de gérer les réclamations pour le compte de ses clients.'],
  ['p', 'Son rôle consiste principalement à :'],
  ['ul', ['analyser automatiquement le web', 'identifier des images ressemblant à celles présentes dans les bases de données de ses clients', 'envoyer des demandes amiables de régularisation', 'transmettre certains dossiers à des cabinets d’avocats lorsqu’aucun accord n’est trouvé']],
  ['h2', 'Comment fonctionne la détection ?'],
  ['p', 'Le processus suit généralement quatre étapes.'],
  ['steps', [
    ['Constitution d’une base de données', 'Les titulaires de droits déposent leurs photographies. Chaque image reçoit une empreinte numérique qui permet d’identifier des ressemblances sur Internet.'],
    ['Analyse automatique du web', 'Des robots explorent en permanence les sites, blogs et pages accessibles publiquement à la recherche de correspondances avec les photographies enregistrées.'],
    ['Ouverture automatique d’un dossier', 'Lorsqu’une image est détectée, un dossier est créé, suivi de l’envoi de courriers-types puis, en l’absence d’accord, d’une transmission éventuelle à un cabinet d’avocats.'],
    ['Demande d’indemnisation', 'Vous recevez un e-mail, parfois plusieurs relances, puis éventuellement une mise en demeure. L’objectif est d’obtenir le retrait de l’image et le paiement d’une indemnité.'],
  ]],
  ['note', 'Une correspondance visuelle n’est pas une preuve de contrefaçon. Le système repose sur une comparaison automatisée d’empreintes numériques — un rapprochement technique, non une démonstration juridique.'],
  ['key', 'Puisque PicRights agit pour le compte d’un tiers, identifier l’agence réellement mandante et vérifier l’étendue de son mandat fait partie des toutes premières questions d’un dossier.'],
]

const faq = [
  ['PicRights est-elle une société sérieuse ?', 'Oui. PicRights intervient pour le compte de nombreux titulaires de droits. Ce n’est pas une arnaque au sens juridique — mais chaque réclamation qu’elle adresse reste contestable au cas par cas.'],
  ['PicRights est-elle titulaire des photographies ?', 'En principe non : elle agit comme prestataire de détection et de recouvrement pour le compte des titulaires (agences, photographes). La titularité et le mandat doivent être vérifiés.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-europe-gmbh" lead={lead} blocks={blocks} faq={faq} />
}
