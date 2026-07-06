import ArticleLayout from '../../components/guide/ArticleLayout'

export const metadata = {
  title: 'Comment est calculé le montant réclamé par PicRights ?',
  description: 'Les montants réclamés par PicRights varient fortement : valeur de licence, durée, frais de gestion, préjudice. Mais ces montants ne s’imposent pas au juge, qui procède à sa propre appréciation.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/picrights/montant-reclame-picrights/' },
}

const lead = 'Beaucoup de destinataires s’étonnent des sommes demandées, qui peuvent varier fortement d’un dossier à l’autre. Comprendre comment ces montants sont construits — et pourquoi ils ne s’imposent pas au juge — change la manière d’y répondre.'

const blocks = [
  ['h2', 'Les éléments généralement invoqués'],
  ['p', 'Pour justifier la somme demandée, plusieurs éléments sont habituellement mis en avant :'],
  ['ul', ['la valeur de licence de la photographie', 'la durée d’utilisation', 'l’absence d’autorisation', 'des frais de gestion', 'un préjudice économique', 'un préjudice moral']],
  ['h2', 'Ces montants ne s’imposent pas au juge'],
  ['p', 'Le fait qu’une somme soit réclamée ne signifie pas qu’elle sera automatiquement retenue par un tribunal. Les juridictions procèdent à leur **propre appréciation** du préjudice réellement démontré.'],
  ['p', 'Dans les faits, il existe des écarts importants entre les montants initialement réclamés et les condamnations effectivement prononcées. C’est précisément ce qui rend une discussion possible.'],
  ['h2', 'Ce que le juge apprécie réellement'],
  ['ul', ['la valeur économique réelle de la photographie', 'la durée d’utilisation', 'l’importance de la diffusion', 'l’existence d’un préjudice concrètement démontré']],
  ['key', 'Même lorsqu’une atteinte est caractérisée, le montant demandé peut être discuté. Contester le quantum fait partie intégrante de la défense — pas seulement contester le principe.'],
  ['link', ['/jurisprudence/', 'Voir la jurisprudence sur le préjudice et le montant']],
]

const faq = [
  ['Le montant réclamé est-il négociable ?', 'Souvent oui. De nombreux dossiers se règlent à un montant très inférieur à la demande initiale, selon les preuves et la jurisprudence applicable.'],
  ['Pourquoi les montants varient-ils autant ?', 'Ils dépendent de la photographie, de l’usage, de la durée et de l’évaluation du préjudice — autant de paramètres appréciés au cas par cas.'],
]

export default function Page() {
  return <ArticleLayout slug="montant-reclame-picrights" lead={lead} blocks={blocks} faq={faq} />
}
