import CornerFlower from './CornerFlower'
import RevealLines from './RevealLines'
import Typewriter from './Typewriter'

export default function ThePoint() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <CornerFlower
        emoji="🌸"
        className="top-8 left-8 text-3xl opacity-35 sm:text-4xl"
      />
      <CornerFlower
        emoji="🌼"
        className="right-6 bottom-12 text-4xl opacity-30 sm:text-5xl"
        style={{ animationDelay: '2.5s' }}
      />
      <div className="relative z-10 rounded-3xl bg-white/60 px-6 py-10 shadow-[0_8px_30px_rgba(190,100,110,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
        <h2 className="mb-8 font-serif text-xl tracking-tight text-rose-400 sm:text-2xl">
          🌼 The Point of This Page 🌼
        </h2>
        <RevealLines
          className="max-w-sm space-y-5"
          lineClassName="text-lg leading-relaxed text-stone-600 sm:text-xl"
          lines={[
            "I'm not great at saying things out loud without overthinking them.",
            'So I made this instead.',
          ]}
        />
        <Typewriter
          text="I like you, Roishni. Not in a filmy, dramatic way — just in the quiet, I-look-forward-to-your-calls kind of way."
          className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-stone-600 sm:text-xl"
          startDelay={600}
        />
      </div>
    </section>
  )
}
