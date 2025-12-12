import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Privacy = () => {
  const handleReset = () => {
    if (window.resetEraser) {
      window.resetEraser()
    }
  }

  return (
    <motion.div 
      className="relative min-h-screen bg-transparent text-white select-none"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ type: "tween", duration: 0.7, ease: "easeInOut", delay: 0.2 }}
    >
      {/* Header */}
      <header className="relative z-40 bg-gradient-to-b from-black/50 to-transparent p-6 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-black hover:text-gray-300 transition" style={{ fontFamily: 'Belleza, sans-serif' }}>
            Eraser Effect
          </Link>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleReset}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition backdrop-blur-sm"
              style={{ fontFamily: 'Belleza, sans-serif' }}
            >
              Reset
            </button>
            <nav className="flex gap-6">
              <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-30 max-w-4xl mx-auto px-6 py-20 pointer-events-none">
        <h2 className="text-5xl font-black mb-8" style={{ fontFamily: 'Belleza, sans-serif' }}>
          Privacy Policy
        </h2>
        <div className="space-y-6 text-lg">
          <p className="text-gray-400 text-sm">Last updated: December 12, 2025</p>
          
          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Introduction</h3>
            <p>
              Welcome to Eraser Effect. We respect your privacy and are committed to protecting your personal data.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Information We Collect</h3>
            <p>
              This website is primarily interactive and does not collect personal information. Any usage data collected is anonymous and used solely for improving user experience.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Cookies</h3>
            <p>
              We may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Belleza, sans-serif' }}>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-blue-400 hover:text-blue-300">contact us</Link>.
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
    </motion.div>
  )
}

export default Privacy
