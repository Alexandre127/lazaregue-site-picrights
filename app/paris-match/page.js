import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure Paris Match : faut-il payer ? Guide complet',
  description: 'Vous avez reçu une réclamation Paris Match pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/paris-match/' },
}

export default function ParisMatch() {
  return (
    <AgencyPage
      name="Paris Match"
      kind="Fonds photographique de presse"
      intro="Paris Match dispose d'un important fonds photographique. La reprise de ses images sans autorisation peut donner lieu à des réclamations. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="Un fonds photographique de presse magazine"
      whoText="Paris Match, magazine d'actualité, possède et exploite un vaste fonds de photographies. L'utilisation non autorisée de ces images sur un site internet peut donner lieu à une demande d'indemnisation au titre des droits d'auteur."
    />
  )
}
