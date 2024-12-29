import './globals.css'

export const metadata = {
  title: 'NutriScanner',
  description: 'Get nutritional information for your food products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

