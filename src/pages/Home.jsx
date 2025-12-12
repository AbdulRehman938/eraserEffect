import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const handleReset = () => {
    if (window.resetEraser) {
      window.resetEraser()
    }
  }

  return (
    <motion.div 
      className="relative w-full min-h-screen overflow-hidden select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ willChange: 'opacity', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 25, pointerEvents: 'none' }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/50 to-transparent p-6 pointer-events-auto">
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

      {/* Lorem Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none text-center">
        <p className="text-white text-5xl font-black mb-4" style={{ fontFamily: 'Belleza, sans-serif' }}>
          Erase me to see the video
        </p>
        <p className="text-white text-xl" style={{ fontFamily: 'Belleza, sans-serif' }}>
          you can hold and drag your mouse on empty black area to erase the black cover
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/50 to-transparent p-6 pointer-events-auto">
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

export default Home