import Link from 'next/link'
import { useState } from 'react'
import Script from 'next/script'

export default function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <Script src="https://unpkg.com/html5-qrcode" strategy="beforeInteractive" />
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">NutriScanner</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/create-user" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                Create User
              </Link>
              <Link href="/login" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                Login
              </Link>
              <Link href="/sources" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                Our Sources
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, { isLoggedIn, setIsLoggedIn })
            : child
        )}
      </main>
    </div>
  )
}

