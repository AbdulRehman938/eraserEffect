import React, { useEffect, useRef } from 'react'

const Snowflakes = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createSnowflake = () => {
      const snowflake = document.createElement('div')
      snowflake.classList.add('snowflake')
      snowflake.innerHTML = '❄'
      snowflake.style.left = Math.random() * window.innerWidth + 'px'
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'
      snowflake.style.opacity = Math.random() * 0.6 + 0.4
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'
      
      container.appendChild(snowflake)

      setTimeout(() => {
        snowflake.remove()
      }, 5000)
    }

    const interval = setInterval(createSnowflake, 200)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="snowflakes-container" />
      <style>{`
        .snowflakes-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
          overflow: hidden;
        }
        
        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          user-select: none;
          animation: fall linear infinite;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default Snowflakes
