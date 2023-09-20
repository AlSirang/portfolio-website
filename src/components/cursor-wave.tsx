'use client'
import { useState, useEffect } from 'react'

const CursorWave = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return setPosition({ x: e.clientX, y: e.clientY })
      setPosition({ x: e.clientX, y: e.clientY + window.scrollY })
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px , rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  )
}

export default CursorWave
