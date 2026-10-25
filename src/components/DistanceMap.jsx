import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Two pins — Kochi and Indore — joined by a line that draws itself in,
// with a little plane flying along it, once it scrolls into view.
export default function DistanceMap() {
  const wrapperRef = useRef(null)
  const pathRef = useRef(null)
  const planeRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const path = pathRef.current
    const plane = planeRef.current
    if (!wrapper || !path || !plane) return

    const length = path.getTotalLength()
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    if (reduceMotion) {
      gsap.set(path, { strokeDashoffset: 0 })
      const end = path.getPointAtLength(length)
      plane.setAttribute('transform', `translate(${end.x}, ${end.y})`)
      gsap.set(plane, { opacity: 1 })
      return
    }

    gsap.set(plane, { opacity: 0 })
    const start = path.getPointAtLength(0)
    plane.setAttribute('transform', `translate(${start.x}, ${start.y})`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap
            .timeline({ delay: 0.3 })
            .to(plane, { opacity: 1, duration: 0.2 })
            .to(path, {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: 'power2.inOut',
              onUpdate() {
                const point = path.getPointAtLength(this.progress() * length)
                plane.setAttribute(
                  'transform',
                  `translate(${point.x}, ${point.y})`,
                )
              },
            })
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="mx-auto w-full max-w-xs py-6">
      <svg viewBox="0 0 300 80" className="w-full" aria-hidden="true">
        <path
          ref={pathRef}
          d="M30,55 Q150,-10 270,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-rose-300"
        />
        <circle cx="30" cy="55" r="5" className="fill-rose-400" />
        <circle cx="270" cy="55" r="5" className="fill-amber-400" />
        <g ref={planeRef}>
          <text x="0" y="5" textAnchor="middle" fontSize="14">
            ✈️
          </text>
        </g>
      </svg>
      <div className="-mt-1 flex justify-between px-1 text-sm tracking-wide text-stone-500">
        <span>Kochi</span>
        <span>Indore</span>
      </div>
    </div>
  )
}
