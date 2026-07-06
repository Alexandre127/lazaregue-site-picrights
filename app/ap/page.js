import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure Associated Press (AP) : faut-il payer ? Guide',
  description: 'Vous avez reçu une réclamation d\'Associated Press (AP) pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/ap/' },
}

export default function Ap() {
  return (
    <AgencyPage
      name="Associated Press (AP)"
      kind="Agence de presse"
      intro="Associated Press (AP) est une agence de presse américaine de référence. Ses photographies font l'objet de réclamations lorsqu'elles sont reprises sans licence, souvent via des sociétés de recouvrement. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="L'agence de presse américaine de référence"
      whoText="Associated Press diffuse dépêches et photographies utilisées par les médias du monde entier. Lorsqu'une de ses images est utilisée sans autorisation, AP — directement ou par un mandataire de recouvrement — peut réclamer une indemnisation au responsable du site."
    />
  )
}
