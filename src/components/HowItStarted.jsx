import CornerFlower from './CornerFlower'
import RevealLines from './RevealLines'

export default function HowItStarted() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <CornerFlower
        emoji="🌼"
        className="top-8 right-8 text-4xl opacity-35 sm:text-5xl"
      />
      <CornerFlower
        emoji="🌸"
        className="bottom-10 left-8 text-3xl opacity-25 sm:text-4xl"
        style={{ animationDelay: '2s' }}
      />
      <div className="relative z-10 rounded-3xl bg-white/60 px-6 py-10 shadow-[0_8px_30px_rgba(190,100,110,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
        <h2 className="mb-8 font-serif text-xl tracking-tight text-rose-400 sm:text-2xl">
          🌸 How It Started 🌸
        </h2>
        <RevealLines
          className="max-w-sm space-y-5"
          lineClassName="text-lg leading-relaxed text-stone-600 sm:text-xl"
          lines={[
            'Somewhere between swipes and chances, Muzz decided we should talk.',
            "I didn't expect much. Then we started talking.",
            'And somehow, one call turned into many hours. Then many more.',
          ]}
        />
      </div>
    </section>
  )
}
