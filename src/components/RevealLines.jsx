import { useScrollReveal } from '../hooks/useScrollReveal'

// Renders a list of lines that fade/slide in one at a time.
export default function RevealLines({
  lines,
  className = '',
  lineClassName = '',
  immediate = false,
}) {
  const containerRef = useScrollReveal({ immediate })

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <p key={i} data-reveal className={lineClassName}>
          {line}
        </p>
      ))}
    </div>
  )
}
