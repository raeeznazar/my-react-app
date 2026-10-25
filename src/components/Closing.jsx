import { forwardRef } from 'react'
import CornerFlower from './CornerFlower'
import RevealLines from './RevealLines'

const Closing = forwardRef(function Closing({ answered }, ref) {
  if (!answered) {
    return <section ref={ref} className="h-0" />
  }

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <CornerFlower
        emoji="🌷"
        className="top-10 left-8 text-4xl opacity-35 sm:text-5xl"
      />
      <CornerFlower
        emoji="🌺"
        className="right-8 bottom-10 text-4xl opacity-40 sm:text-5xl"
        style={{ animationDelay: '2.2s' }}
      />
      <CornerFlower
        emoji="🌼"
        className="top-6 right-6 text-2xl opacity-30 sm:text-3xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="animate-rise-in relative z-10 rounded-3xl bg-amber-100/70 px-8 py-10 shadow-[0_8px_30px_rgba(190,100,110,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
        <RevealLines
          immediate
          className="max-w-sm"
          lineClassName="font-serif text-xl leading-relaxed tracking-tight text-stone-700 sm:text-2xl"
          lines={[
            "Whatever you pick — I'm really glad Muzz messed with both our algorithms that one day. 🌸",
          ]}
        />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 text-sm text-rose-400 underline-offset-4 transition-colors hover:text-rose-500 hover:underline"
        >
          ↺ Watch it again
        </button>
      </div>
    </section>
  )
})

export default Closing
