import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHoverStart)
        el.addEventListener('mouseleave', handleLinkHoverEnd)
      })
    }

    addHoverListeners()

    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let animationFrameId
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        }
      })
      animationFrameId = requestAnimationFrame(updateTrail)
    }

    animationFrameId = requestAnimationFrame(updateTrail)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position])

  if (hidden) return null

  return (
    <>
      <div
        className="cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
          backgroundColor: linkHovered ? '#f97316' : '#ef4444',
          boxShadow: linkHovered 
            ? '0 0 15px #f97316, 0 0 30px rgba(249, 115, 22, 0.3)' 
            : '0 0 15px #ef4444, 0 0 30px rgba(239, 68, 68, 0.3)'
        }}
      />
      <div
        className="cursor-trail hidden md:block"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : linkHovered ? 1.8 : 1})`,
          borderColor: linkHovered ? '#f97316' : '#ef4444',
          backgroundColor: linkHovered ? 'rgba(249, 115, 22, 0.1)' : 'transparent'
        }}
      />
    </>
  )
}

export default CustomCursor
