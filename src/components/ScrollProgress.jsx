import { useEffect, useState } from 'react'

const SECTION_COUNT = 6

// A quiet dot-trail on the side showing how far through the story she's
// scrolled. Hidden on small screens so it never sits over the content.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex"
    >
      {Array.from({ length: SECTION_COUNT }).map((_, i) => {
        const threshold = i / (SECTION_COUNT - 1)
        const active = progress >= threshold - 0.02
        return (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              active ? 'scale-125 bg-rose-400' : 'bg-rose-200'
            }`}
          />
        )
      })}
    </div>
  )
}
