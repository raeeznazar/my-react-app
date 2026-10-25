// Decorative, slowly-swaying flower tucked in a section corner.
export default function CornerFlower({
  emoji = '🌸',
  className = '',
  style = {},
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none animate-sway ${className}`}
      style={style}
    >
      {emoji}
    </span>
  )
}
