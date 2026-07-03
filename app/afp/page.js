import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure AFP : faut-il payer ? Guide complet',
  description: 'Vous avez reçu une réclamation de l\'AFP (Agence France-Presse) pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — 200 € HT.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/afp/' },
}

export default function Afp() {
  return (
    <AgencyPage
      name="AFP"
      kind="Agence de presse"
      intro="L'Agence France-Presse (AFP) est l'une des principales agences de presse mondiales. Ses photographies font l'objet de réclamations lorsqu'elles sont réutilisées sans licence — souvent par l'intermédiaire de sociétés de recouvrement comme PicRights. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="La première agence de presse française"
      whoText="Fondée en 1835, l'AFP produit et diffuse textes, photographies et vidéos dans le monde entier. Lorsqu'une de ses images est utilisée sans autorisation, l'AFP — directement ou par l'intermédiaire d'un mandataire tel que PicRights — adresse une demande d'indemnisation au responsable du site concerné."
    />
  )
}
