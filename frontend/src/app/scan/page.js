'use client'

import { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import Layout from '../components/layout'

export default function ScanPage() {
  const [scanResult, setScanResult] = useState(null)
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    }, false)

    function success(result) {
      scanner.clear()
      setScanResult(result)
      setIsScanning(false)
    }

    function error(err) {
      console.warn(err)
    }

    const startScanning = () => {
      setIsScanning(true)
      scanner.render(success, error)
    }

    const stopScanning = () => {
      scanner.clear()
      setIsScanning(false)
    }

    return () => {
      scanner.clear()
    }
  }, [])

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Scan QR Code</h1>
        <div className="flex flex-col items-center">
          <div id="reader" className="w-full max-w-md"></div>
          <div className="mt-8">
            {!isScanning ? (
              <button
                onClick={() => setIsScanning(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Start Scanning
              </button>
            ) : (
              <button
                onClick={() => setIsScanning(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Stop Scanning
              </button>
            )}
          </div>
          {scanResult && (
            <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md transition-all duration-500 ease-in-out animate-fade-in-down">
              <h2 className="text-xl font-semibold mb-2">Scan Result:</h2>
              <p>{scanResult}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

