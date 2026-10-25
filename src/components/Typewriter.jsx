import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Types text out character by character once it scrolls into view,
// like the line is being written to her live.
export default function Typewriter({
  text,
  className = '',
  speed = 45,
  startDelay = 0,
  onDone,
}) {
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? text : '',
  )
  const [done, setDone] = useState(() => prefersReducedMotion())
  const containerRef = useRef(null)
  const startedRef = useRef(false)
  const doneCalledRef = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (!doneCalledRef.current) {
        doneCalledRef.current = true
        onDone?.()
      }
      return undefined
    }

    const el = containerRef.current
    if (!el) return undefined

    let timer
    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      let i = 0
      timer = setInterval(() => {
        i += 1
        setDisplay(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(timer)
          setDone(true)
          onDone?.()
        }
      }, speed)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(start, startDelay)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <p ref={containerRef} className={className}>
      {display}
      {!done && <span className="animate-pulse">|</span>}
    </p>
  )
}
