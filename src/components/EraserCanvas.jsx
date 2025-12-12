import React, { useRef, useEffect, useState } from 'react'

const EraserCanvas = () => {
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const video = videoRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Fill canvas with black
    const fillCanvas = () => {
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    fillCanvas()

    // Expose reset function globally
    window.resetEraser = fillCanvas

    // Define video event handlers at higher scope
    let handleVideoEnd = null
    let handleVideoPause = null

    // Ensure video plays and loops
    if (video) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log('Video autoplay prevented:', err)
          // Retry on user interaction
          document.addEventListener('click', () => video.play(), { once: true })
        })
      }

      // Ensure video keeps looping
      handleVideoEnd = () => {
        video.currentTime = 0
        video.play()
      }
      video.addEventListener('ended', handleVideoEnd)

      // Ensure video doesn't pause
      handleVideoPause = () => {
        if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {
          // Video is playing, do nothing
        } else {
          video.play().catch(() => {})
        }
      }
      video.addEventListener('pause', handleVideoPause)
    }

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
    
    return () => {
      window.removeEventListener('resize', handleResize)
      delete window.resetEraser
      if (video && handleVideoEnd && handleVideoPause) {
        video.removeEventListener('ended', handleVideoEnd)
        video.removeEventListener('pause', handleVideoPause)
      }
    }
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
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const handleMouseEnter = (e) => {
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
    
    const brushSize = 160
    const strands = 20
    
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
    <>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-screen h-screen object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="https://cdn.pixabay.com/video/2021/07/25/82663-580974605_large.mp4" type="video/mp4" />
      </video>

      {/* Black Cover Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-20 pointer-events-auto cursor-crosshair touch-none"
        style={{ width: '100vw', height: '100vh' }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={erase}
      />
    </>
  )
}

export default EraserCanvas
