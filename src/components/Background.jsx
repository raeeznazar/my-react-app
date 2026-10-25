// Fixed, decorative gradient + soft floating particles behind every section.
// Positions are hand-picked (not randomized) so render stays pure.
const PARTICLES = [
  { id: 0, size: 90, left: 8, top: 10, delay: 0, duration: 14 },
  { id: 1, size: 60, left: 80, top: 6, delay: 1.5, duration: 11 },
  { id: 2, size: 110, left: 65, top: 28, delay: 3, duration: 16 },
  { id: 3, size: 50, left: 20, top: 40, delay: 0.8, duration: 12 },
  { id: 4, size: 75, left: 90, top: 48, delay: 4, duration: 13 },
  { id: 5, size: 55, left: 40, top: 62, delay: 2.2, duration: 10 },
  { id: 6, size: 95, left: 12, top: 75, delay: 5, duration: 15 },
  { id: 7, size: 65, left: 70, top: 82, delay: 1, duration: 12 },
  { id: 8, size: 45, left: 55, top: 12, delay: 3.6, duration: 11 },
  { id: 9, size: 80, left: 30, top: 90, delay: 2.8, duration: 14 },
]

// `warm` makes the whole page glow a touch warmer — used as a gentle
// screen transition once she's answered on The Ask.
export default function Background({ warm = false }) {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-rose-100 bg-[length:200%_200%] animate-gradient" />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-amber-200 via-rose-200 to-orange-200 transition-opacity duration-[1800ms] ${
          warm ? 'opacity-50' : 'opacity-0'
        }`}
      />
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white/50 blur-2xl animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
