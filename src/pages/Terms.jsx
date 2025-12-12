import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white select-none">
      {/* Header */}
      <header className="relative z-40 bg-gradient-to-b from-black/50 to-transparent p-6 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-black" style={{ fontFamily: 'Belleza, sans-serif' }}>
            Eraser Effect
          </h1>
          <nav className="flex gap-6">
            <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-30 max-w-4xl mx-auto px-6 py-20 pointer-events-none">
        <h2 className="text-5xl font-black mb-8" style={{ fontFamily: 'Belleza, sans-serif' }}>
          Terms of Service
        </h2>
        <div className="space-y-6 text-lg">
          <p className="text-gray-400 text-sm">Last updated: December 12, 2025</p>
          
          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Use License</h3>
            <p>
              Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Disclaimer</h3>
            <p>
              The materials on Eraser Effect's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Limitations</h3>
            <p>
              In no event shall Eraser Effect or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Contact</h3>
            <p>
              For any questions regarding these terms, please <Link to="/contact" className="text-blue-400 hover:text-blue-300">contact us</Link>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/50 to-transparent p-6 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm" style={{ fontFamily: 'Belleza, sans-serif' }}>
            © 2025 Eraser Effect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-white hover:text-gray-300 transition text-sm">Privacy</Link>
            <Link to="/terms" className="text-white hover:text-gray-300 transition text-sm">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Terms
