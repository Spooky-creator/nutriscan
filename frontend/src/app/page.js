'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to NutriScanner
      </motion.h1>
      <motion.p 
        className="text-xl text-center text-gray-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get the nutritional score of your food products with a simple scan!
      </motion.p>
      {isLoggedIn && (
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/scan" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Scan QR Code
          </Link>
        </motion.div>
      )}
      <motion.div 
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8"
        role="alert"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="font-bold">Disclaimer:</p>
        <p>This website is not a replacement for professional medical advice and is not recommended for pregnant women. Always consult with a qualified healthcare provider before making any changes to your diet or nutrition plan.</p>
      </motion.div>
    </div>
  )
}

