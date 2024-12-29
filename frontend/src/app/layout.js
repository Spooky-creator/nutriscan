import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'NutriScanner',
  description: 'Get nutritional information for your food products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}

