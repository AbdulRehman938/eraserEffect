import React, { useRef, useEffect, useState } from 'react'

const Home = () => {
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Fill canvas with black
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const handleResize = () => {
      const tempCanvas = document.createElement('canvas')
      const tempCtx = tempCanvas.getContext('2d')
      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height
      tempCtx.drawImage(canvas, 0, 0)
      
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(tempCanvas, 0, 0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getPos = (e, rect) => {
    if (e.type.includes('touch')) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  const startDrawing = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const pos = getPos(e, rect)
    setLastPos(pos)
    setIsDrawing(true)
    // Don't call erase here, just set the starting position
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const handleMouseEnter = (e) => {
    // If mouse enters with button pressed, continue drawing
    if (e.buttons === 1) {
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const pos = getPos(e, rect)
      setLastPos(pos)
      setIsDrawing(true)
    }
  }

  const erase = (e) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const pos = getPos(e, rect)

    ctx.globalCompositeOperation = 'destination-out'
    
    // Create brush stroke effect with multiple strands
    const brushSize = 160
    const strands = 20 // Number of brush strands
    
    for (let i = 0; i < strands; i++) {
      const offsetX = (Math.random() - 0.5) * brushSize * 0.6
      const offsetY = (Math.random() - 0.5) * brushSize * 0.6
      const thickness = Math.random() * 3 + 1
      
      ctx.lineWidth = thickness
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.globalAlpha = Math.random() * 0.3 + 0.4
      
      ctx.beginPath()
      ctx.moveTo(lastPos.x + offsetX, lastPos.y + offsetY)
      ctx.lineTo(pos.x + offsetX, pos.y + offsetY)
      ctx.stroke()
    }
    
    // Draw main stroke
    ctx.globalAlpha = 1
    ctx.lineWidth = brushSize * 0.5
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    ctx.beginPath()
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    
    setLastPos(pos)
  }

  const handleMouseMove = (e) => {
    if (isDrawing) {
      erase(e)
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/50 to-transparent p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-black" style={{ fontFamily: 'Belleza, sans-serif' }}>
            Eraser Effect
          </h1>
          <nav className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition">About</a>
            <a href="#" className="text-white hover:text-gray-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Lorem Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none text-center">
        <p className="text-white text-5xl font-black mb-4" style={{ fontFamily: 'Belleza, sans-serif' }}>
          Erase me to see the video
        </p>
        <p className="text-white text-xl" style={{ fontFamily: 'Belleza, sans-serif' }}>
          consectetur adipiscing elit
        </p>
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-screen h-screen object-cover z-10"
        src="https://cdn.pixabay.com/video/2021/07/25/82663-580974605_large.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Black Cover Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-20"
        style={{ width: '100vw', height: '100vh' }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={erase}
      />

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/50 to-transparent p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm" style={{ fontFamily: 'Belleza, sans-serif' }}>
            © 2025 Eraser Effect. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300 transition text-sm">Privacy</a>
            <a href="#" className="text-white hover:text-gray-300 transition text-sm">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home