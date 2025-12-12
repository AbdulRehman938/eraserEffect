import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleReset = () => {
    if (window.resetEraser) {
      window.resetEraser()
    }
  }

  return (
    <motion.div 
      className="relative min-h-screen bg-transparent text-white select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ willChange: 'opacity', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 25, pointerEvents: 'none' }}
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
          Contact Us
        </h2>
        <div className="space-y-6 text-lg">
          <p>
            We'd love to hear from you! Get in touch with us for any questions, feedback, or collaboration opportunities.
          </p>
          
          <div className="space-y-4 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Belleza, sans-serif' }}>Email</h3>
              <p className="text-gray-300">contact@erasereffect.com</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Belleza, sans-serif' }}>Social Media</h3>
              <p className="text-gray-300">Follow us on Twitter, Instagram, and LinkedIn</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Belleza, sans-serif' }}>Location</h3>
              <p className="text-gray-300">Worldwide, Remote</p>
            </div>
          </div>
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

export default Contact
