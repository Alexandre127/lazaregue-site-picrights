import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure Reuters : faut-il payer ? Guide complet',
  description: 'Vous avez reçu une réclamation Reuters pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/reuters/' },
}

export default function Reuters() {
  return (
    <AgencyPage
      name="Reuters"
      kind="Agence de presse"
      intro="Reuters est l'une des plus grandes agences de presse internationales. Ses photographies, très diffusées, font l'objet de réclamations en cas d'utilisation non autorisée — fréquemment via des sociétés de recouvrement. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="Agence de presse internationale"
      whoText="Reuters (groupe Thomson Reuters) produit et distribue de l'information et des photographies dans le monde entier. L'utilisation d'une de ses images sans licence peut donner lieu à une demande d'indemnisation, adressée directement ou par l'intermédiaire d'un mandataire de recouvrement."
    />
  )
}
