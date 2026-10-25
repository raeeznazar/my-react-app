import { useEffect } from 'react'
import gsap from 'gsap'

const EMOJI = ['🌸', '🌺', '🌼', '🌷', '✨']

// A few seconds of flowers raining down the whole screen, triggered once
// a button on TheAsk has been clicked.
export default function CelebrationShower({ active }) {
  useEffect(() => {
    if (!active) return undefined

    const spawn = () => {
      const el = document.createElement('span')
      el.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)]
      el.style.position = 'fixed'
      el.style.top = '-40px'
      el.style.left = `${Math.random() * window.innerWidth}px`
      el.style.fontSize = `${18 + Math.random() * 14}px`
      el.style.pointerEvents = 'none'
      el.style.zIndex = '60'
      document.body.appendChild(el)

      gsap.to(el, {
        y: window.innerHeight + 60,
        x: `+=${(Math.random() - 0.5) * 160}`,
        rotation: Math.random() * 360,
        duration: 3 + Math.random() * 1.5,
        ease: 'power1.in',
        onComplete: () => el.remove(),
      })
    }

    const interval = setInterval(spawn, 90)
    const stop = setTimeout(() => clearInterval(interval), 2600)

    return () => {
      clearInterval(interval)
      clearTimeout(stop)
    }
  }, [active])

  return null
}
