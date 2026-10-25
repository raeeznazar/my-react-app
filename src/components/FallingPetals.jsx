// Continuous, gentle flower rain across the whole page. Positions are
// hand-picked (not randomized) so render stays pure.
const PETALS = [
  { id: 0, emoji: '🌸', left: 4, delay: 0, duration: 15, size: 22 },
  { id: 1, emoji: '🌺', left: 14, delay: 3.2, duration: 19, size: 18 },
  { id: 2, emoji: '🌼', left: 24, delay: 6.4, duration: 16, size: 20 },
  { id: 3, emoji: '🌷', left: 34, delay: 1.1, duration: 21, size: 24 },
  { id: 4, emoji: '🌸', left: 44, delay: 8.5, duration: 15, size: 16 },
  { id: 5, emoji: '🌺', left: 54, delay: 4.6, duration: 20, size: 22 },
  { id: 6, emoji: '🌼', left: 64, delay: 9.8, duration: 17, size: 18 },
  { id: 7, emoji: '🌷', left: 74, delay: 2.3, duration: 22, size: 20 },
  { id: 8, emoji: '🌸', left: 84, delay: 7.1, duration: 16, size: 24 },
  { id: 9, emoji: '🌺', left: 94, delay: 5.5, duration: 19, size: 18 },
  { id: 10, emoji: '🌼', left: 9, delay: 11.2, duration: 20, size: 16 },
  { id: 11, emoji: '🌷', left: 60, delay: 13.4, duration: 15, size: 22 },
]

export default function FallingPetals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {PETALS.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-10%] animate-petal-fall"
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}
