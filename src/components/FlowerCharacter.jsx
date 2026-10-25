import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// A small illustrated figure whose arm rises to offer a flower once it
// scrolls into view, then idles with a gentle bob.
export default function FlowerCharacter({ className = '' }) {
  const wrapperRef = useRef(null)
  const armRef = useRef(null)
  const flowerRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const arm = armRef.current
    const flower = flowerRef.current
    if (!wrapper || !arm || !flower) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    gsap.set(wrapper, { opacity: 0, x: -50 })
    gsap.set(arm, { rotate: -55, transformOrigin: '136px 128px' })
    gsap.set(flower, { opacity: 0, scale: 0.4 })

    if (reduceMotion) {
      gsap.set(wrapper, { opacity: 1, x: 0 })
      gsap.set(arm, { rotate: -8 })
      gsap.set(flower, { opacity: 1, scale: 1 })
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        gsap
          .timeline()
          .to(wrapper, { opacity: 1, x: 0, duration: 0.8, ease: 'back.out(1.3)' })
          .to(
            arm,
            { rotate: -8, duration: 0.9, ease: 'elastic.out(1, 0.55)' },
            0.3,
          )
          .to(flower, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' }, 0.95)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="h-full w-full animate-character-bob"
        aria-hidden="true"
      >
        <rect x="78" y="188" width="16" height="42" rx="8" fill="#a8a29e" />
        <rect x="106" y="188" width="16" height="42" rx="8" fill="#a8a29e" />
        <rect x="66" y="118" width="68" height="78" rx="28" fill="#fda4af" />
        <rect x="56" y="128" width="16" height="54" rx="8" fill="#fda4af" />
        <g ref={armRef}>
          <rect x="128" y="124" width="16" height="54" rx="8" fill="#fda4af" />
        </g>
        <circle cx="100" cy="84" r="36" fill="#fcd9b8" />
        <path
          d="M64 78 Q68 34 100 34 Q132 34 136 78 Q118 58 100 58 Q82 58 64 78 Z"
          fill="#8b5e3c"
        />
        <circle cx="87" cy="88" r="3.5" fill="#57534e" />
        <circle cx="113" cy="88" r="3.5" fill="#57534e" />
        <path
          d="M87 101 Q100 110 113 101"
          stroke="#57534e"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span
        ref={flowerRef}
        aria-hidden="true"
        className="animate-sway absolute top-[52%] left-[74%] -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl"
      >
        🌹
      </span>
    </div>
  )
}
