import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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
          About Eraser Effect
        </h2>
        <div className="space-y-6 text-lg">
          <p>
            Welcome to Eraser Effect, an interactive web experience that combines creative design with engaging user interaction.
          </p>
          <p>
            Our project demonstrates the power of modern web technologies, featuring a unique eraser reveal effect that allows users to uncover hidden content through intuitive mouse gestures.
          </p>
          <p>
            Built with React, Tailwind CSS, and HTML5 Canvas, this project showcases the possibilities of creative web development.
          </p>
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

export default About
