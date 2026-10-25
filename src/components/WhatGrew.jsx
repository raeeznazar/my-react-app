import CornerFlower from './CornerFlower'
import DistanceMap from './DistanceMap'
import RevealLines from './RevealLines'

export default function WhatGrew() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <CornerFlower
        emoji="🌷"
        className="top-6 left-10 text-4xl opacity-30 sm:text-5xl"
      />
      <CornerFlower
        emoji="🌺"
        className="right-10 bottom-8 text-3xl opacity-35 sm:text-4xl"
        style={{ animationDelay: '1s' }}
      />
      <div className="relative z-10 rounded-3xl bg-white/60 px-6 py-10 shadow-[0_8px_30px_rgba(190,100,110,0.1)] backdrop-blur-sm sm:px-10 sm:py-12">
        <h2 className="mb-8 font-serif text-xl tracking-tight text-rose-400 sm:text-2xl">
          🌺 What Grew 🌺
        </h2>
        <RevealLines
          className="max-w-sm space-y-5"
          lineClassName="text-lg leading-relaxed text-stone-600 sm:text-xl"
          lines={[
            "Kochi to Indore isn't exactly next door.",
            'But somehow the distance never really felt like distance.',
            "Just a lot of calls, a lot of random talks, and 'chaanta maarun' becoming our thing.",
          ]}
        />
        <DistanceMap />
      </div>
    </section>
  )
}
