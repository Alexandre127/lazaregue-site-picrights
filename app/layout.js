import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.lazaregue-avocats.fr'),
  title: { default: 'Lazarègue Avocats — Mise en demeure photographique', template: '%s | Lazarègue Avocats' },
  description: 'Vous avez reçu une mise en demeure de PicRights, Copytrack ou Getty Images ? Cabinet d\'avocats spécialisé. Prise en charge complète — forfait 200 € HT.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Lazarègue Avocats',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
