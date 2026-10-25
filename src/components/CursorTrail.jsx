import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const GLYPHS = ['♥', '✦']
const COLORS = ['#fb7185', '#fcd34d']

// A soft heart/sparkle trail following the cursor. Desktop-with-a-mouse
// only — skipped on touch devices and reduced-motion to avoid lag.
export default function CursorTrail() {
  const lastSpawnRef = useRef(0)

  useEffect(() => {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!canHover || reduceMotion) return undefined

    const handleMove = (event) => {
      const now = performance.now()
      if (now - lastSpawnRef.current < 90) return
      lastSpawnRef.current = now

      const particle = document.createElement('span')
      particle.textContent = GLYPHS[Math.random() > 0.5 ? 0 : 1]
      particle.style.position = 'fixed'
      particle.style.left = `${event.clientX}px`
      particle.style.top = `${event.clientY}px`
      particle.style.color = COLORS[Math.random() > 0.5 ? 0 : 1]
      particle.style.fontSize = '14px'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '40'
      particle.style.transform = 'translate(-50%, -50%)'
      document.body.appendChild(particle)

      gsap.to(particle, {
        y: '+=24',
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'power1.out',
        onComplete: () => particle.remove(),
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return null
}
