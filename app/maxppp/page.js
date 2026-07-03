import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure MaxPPP : faut-il payer ? Guide complet',
  description: 'Vous avez reçu une réclamation MaxPPP pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://www.lazaregue-avocats.fr/maxppp/' },
}

export default function Maxppp() {
  return (
    <AgencyPage
      name="MaxPPP"
      kind="Agence photographique"
      intro="MaxPPP est une agence française de diffusion photographique. Ses images font l'objet de réclamations en cas d'utilisation non autorisée. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="Agence française de diffusion photographique"
      whoText="MaxPPP agrège et distribue les photographies de nombreuses agences et photographes. En cas de reprise sans licence d'une image de son catalogue, MaxPPP peut adresser une demande d'indemnisation, éventuellement par l'intermédiaire d'un partenaire de recouvrement."
    />
  )
}
