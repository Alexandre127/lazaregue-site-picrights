import AgencyPage from '../components/AgencyPage'

export const metadata = {
  title: 'Mise en demeure PA Images : faut-il payer ? Guide complet',
  description: 'Vous avez reçu une réclamation PA Images pour une photographie ? Découvrez qui réclame, si vous devez payer et comment réagir. Avocat spécialisé — forfait 200 € HT.',
  alternates: { canonical: 'https://lazaregue-avocats.fr/pa-images/' },
}

export default function PaImages() {
  return (
    <AgencyPage
      name="PA Images"
      kind="Banque d'images de presse"
      intro="PA Images est la banque d'images de la Press Association, l'agence de presse nationale du Royaume-Uni. Ses photographies sont fréquemment détectées et réclamées via des sociétés de recouvrement. Voici ce qu'il faut savoir avant de répondre ou de payer."
      whoTitle="La banque d'images de l'agence de presse britannique"
      whoText="PA Images distribue les photographies de la Press Association (PA Media). Ses contenus, largement repris dans les médias, font l'objet de réclamations lorsqu'ils sont utilisés sans licence, souvent par l'intermédiaire de partenaires de recouvrement comme PicRights."
    />
  )
}
