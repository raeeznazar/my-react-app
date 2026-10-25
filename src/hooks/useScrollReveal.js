import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Reveals [data-reveal] children one at a time, either as soon as they
// mount (immediate) or the first time the container scrolls into view.
export function useScrollReveal({
  stagger = 0.22,
  y = 26,
  scale = 0.94,
  duration = 0.9,
  threshold = 0.3,
  immediate = false,
} = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 })
      return
    }

    gsap.set(targets, { opacity: 0, y, scale })

    const play = () =>
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: 'back.out(1.4)',
      })

    if (immediate) {
      play()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [stagger, y, scale, duration, threshold, immediate])

  return containerRef
}
