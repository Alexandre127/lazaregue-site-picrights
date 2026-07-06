import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'PicRights AFP : pourquoi avez-vous reçu une réclamation au nom de l’AFP ?',
  description: 'Vous avez reçu une réclamation PicRights concernant une photographie AFP ? Découvrez pourquoi vous êtes contacté, ce que cela signifie réellement et ce qu’il faut vérifier avant toute décision.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/picrights-afp/' },
}

const lead = 'Vous venez de recevoir un courrier de PicRights mentionnant l’Agence France-Presse (AFP) et vous réclamant plusieurs centaines, parfois plusieurs milliers d’euros. Pourquoi l’AFP est-elle mentionnée, et que faut-il en conclure ?'

const blocks = [
  ['key', 'Le fait que l’AFP soit mentionnée dans votre courrier ne signifie pas que vous êtes automatiquement tenu de payer. Le courrier est une réclamation amiable — ni une décision de justice, ni une condamnation.'],
  ['h2', 'Pourquoi l’AFP apparaît-elle dans le courrier ?'],
  ['p', 'Beaucoup pensent que PicRights et l’AFP sont une seule et même société. Ce n’est généralement pas le cas. PicRights intervient comme société chargée de détecter certaines utilisations de photographies et de gérer les premières démarches amiables pour le compte de titulaires de droits.'],
  ['p', 'Lorsqu’une photographie est détectée, plusieurs étapes peuvent intervenir : détection automatisée, ouverture d’un dossier, envoi d’une demande amiable, puis — dans certains dossiers seulement — transmission à un cabinet d’avocats. C’est cette succession d’intervenants qui explique qu’un même courrier mentionne PicRights, l’AFP et parfois un cabinet.'],
  ['h2', 'Ce que signifie réellement un courrier « PicRights AFP »'],
  ['p', 'Beaucoup raisonnent ainsi : « Si l’AFP est mentionnée, c’est forcément que je dois payer. » Ce raisonnement est trop rapide. La présence du nom de l’AFP signifie qu’une réclamation est formulée au nom d’un titulaire présenté comme concerné — mais elle ne répond pas aux questions essentielles :'],
  ['ul', ['la photographie bénéficie-t-elle effectivement de la protection du droit d’auteur ?', 'les droits invoqués sont-ils démontrés ?', 'les preuves produites sont-elles suffisantes ?', 'le montant demandé est-il juridiquement justifié ?']],
  ['p', 'Une réclamation amiable exprime la position du demandeur ; elle ne préjuge pas de la décision d’un tribunal. La bonne question n’est donc pas « l’AFP est-elle mentionnée ? » mais **« les conditions permettant de réclamer cette indemnisation sont-elles réellement réunies ? »**'],
  ['h2', 'Pourquoi les dossiers AFP sont-ils souvent plus techniques ?'],
  ['p', 'Les photographies de presse concernent fréquemment des événements publics : conférences de presse, manifestations, cérémonies officielles, reportages d’actualité. Chaque dossier soulève alors des questions particulières :'],
  ['ul', ['la photographie résulte-t-elle de véritables choix créatifs, ou d’une captation documentaire de l’événement ?', 'a-t-elle été reproduite intégralement, recadrée, intégrée dans un article d’actualité, ou utilisée dans un contexte commercial ?']],
  ['p', 'Toutes ces circonstances peuvent avoir une incidence sur l’analyse juridique.'],
  ['h2', 'Notre objectif dans un dossier PicRights AFP'],
  ['p', 'Une confusion revient souvent : beaucoup pensent que notre rôle consiste uniquement à négocier une réduction. Ce n’est pas notre première démarche. Notre première mission est de **déterminer si la réclamation est juridiquement fondée**. Lorsque certains éléments apparaissent discutables, l’objectif est d’obtenir l’abandon de la réclamation ou, à défaut, d’adopter la stratégie la plus favorable. Une discussion amiable n’intervient qu’ensuite, si nécessaire.'],
  ['h2', 'Les erreurs les plus fréquentes'],
  ['ul', ['**Payer immédiatement** par crainte d’une procédure, sans avoir vérifié le bien-fondé', '**Répondre dans la précipitation** en reconnaissant l’utilisation, ce qui peut compliquer la défense', '**Ignorer totalement** la réclamation, ce qui peut conduire à des relances puis à une procédure']],
]

const faq = [
  ['PicRights représente-t-elle réellement l’AFP ?', 'PicRights intervient généralement pour le compte du titulaire de droits mentionné. La réalité des droits et la qualité pour agir doivent toujours être vérifiées au regard des éléments du dossier.'],
  ['Les dossiers AFP sont-ils différents des autres dossiers PicRights ?', 'Ils concernent souvent des photographies de presse, mais les questions restent les mêmes : la photo est-elle protégée, les droits démontrés, les preuves suffisantes, le montant justifié ?'],
  ['Vais-je forcément être poursuivi ?', 'Non. La procédure judiciaire n’est qu’une issue possible ; la majorité des dossiers s’arrêtent au stade amiable.'],
]

export default function Page() {
  return <ArticleLayout slug="picrights-afp" lead={lead} blocks={blocks} faq={faq} />
}
