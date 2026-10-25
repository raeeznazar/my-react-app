import gsap from 'gsap'
import { useRef, useState } from 'react'
import CornerFlower from './CornerFlower'
import FlowerCharacter from './FlowerCharacter'
import Typewriter from './Typewriter'

const PARTICLE_GLYPHS = ['♥', '✦', '♥', '✧', '🌸', '🌺']
const PARTICLE_COLORS = ['#fb7185', '#fcd34d', '#f9a8d4', '#fde68a']

function canHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

// A big heart/flower/sparkle burst, in soft pastel tones, from the
// clicked button's position.
function burstFrom(button) {
  const rect = button.getBoundingClientRect()
  const originX = rect.left + rect.width / 2
  const originY = rect.top + rect.height / 2

  for (let i = 0; i < 28; i++) {
    const glyph = PARTICLE_GLYPHS[i % PARTICLE_GLYPHS.length]
    const particle = document.createElement('span')
    particle.textContent = glyph
    particle.style.position = 'fixed'
    particle.style.left = `${originX}px`
    particle.style.top = `${originY}px`
    if (glyph === '♥' || glyph === '✦' || glyph === '✧') {
      particle.style.color = PARTICLE_COLORS[i % PARTICLE_COLORS.length]
    }
    particle.style.fontSize = `${14 + Math.random() * 14}px`
    particle.style.pointerEvents = 'none'
    particle.style.zIndex = '50'
    document.body.appendChild(particle)

    const angle = Math.random() * Math.PI * 2
    const distance = 90 + Math.random() * 140

    gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 40,
      rotation: Math.random() * 360,
      opacity: 0,
      scale: 0.4,
      duration: 1.1 + Math.random() * 0.7,
      ease: 'power2.out',
      onComplete: () => particle.remove(),
    })
  }
}

export default function TheAsk({ onAnswer }) {
  const [headlineDone, setHeadlineDone] = useState(false)
  const [showObviously, setShowObviously] = useState(false)
  const dodgeCountRef = useRef(0)
  const dodgeBtnRef = useRef(null)
  const yesHoverTimerRef = useRef(null)

  const handleClick = (event) => {
    burstFrom(event.currentTarget)
    onAnswer()
  }

  const handleDodgeEnter = () => {
    if (!canHover() || dodgeCountRef.current >= 2) return
    dodgeCountRef.current += 1
    const dx = (Math.random() - 0.5) * 120
    const dy = (Math.random() - 0.5) * 40
    gsap.to(dodgeBtnRef.current, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' })
    if (dodgeCountRef.current >= 2) {
      gsap.to(dodgeBtnRef.current, {
        x: 0,
        y: 0,
        duration: 0.4,
        delay: 0.5,
        ease: 'power2.inOut',
      })
    }
  }

  const handleYesEnter = () => {
    if (!canHover() || showObviously) return
    yesHoverTimerRef.current = setTimeout(() => setShowObviously(true), 1400)
  }

  const handleYesLeave = () => {
    clearTimeout(yesHoverTimerRef.current)
  }

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <CornerFlower
        emoji="🌺"
        className="top-10 left-6 text-4xl opacity-40 sm:text-5xl"
      />
      <CornerFlower
        emoji="🌸"
        className="right-6 bottom-10 text-4xl opacity-35 sm:text-5xl"
        style={{ animationDelay: '1.8s' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <FlowerCharacter className="mb-2 h-40 w-32 sm:h-48 sm:w-40" />

        <div className="relative rounded-3xl bg-white/60 px-6 py-10 shadow-[0_8px_30px_rgba(190,100,110,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
          <span className="animate-pulse-glow absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/60 blur-3xl sm:h-80 sm:w-80" />

          <Typewriter
            text="So — will you be mine?"
            className="font-serif text-3xl font-medium tracking-tight text-stone-700 sm:text-4xl"
            onDone={() => setHeadlineDone(true)}
          />

          {headlineDone && (
            <div className="animate-rise-in mt-10 flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={handleClick}
                  onMouseEnter={handleYesEnter}
                  onMouseLeave={handleYesLeave}
                  className="rounded-full bg-gradient-to-br from-rose-400 to-rose-500 px-8 py-3 font-medium text-white shadow-lg shadow-rose-300/60 transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  Yes
                </button>
                <button
                  ref={dodgeBtnRef}
                  type="button"
                  onClick={handleClick}
                  onMouseEnter={handleDodgeEnter}
                  className="rounded-full border border-rose-300 bg-white/70 px-8 py-3 font-medium text-rose-500 shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  Chaanta maarun? 😏
                </button>
              </div>

              {showObviously && (
                <button
                  type="button"
                  onClick={handleClick}
                  className="animate-rise-in rounded-full bg-amber-300/80 px-6 py-2 text-sm font-medium text-stone-700 shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
                >
                  Obviously yes
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
