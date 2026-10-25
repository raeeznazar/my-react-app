import { useState } from 'react'
import CornerFlower from './CornerFlower'
import RevealLines from './RevealLines'
import ScrollCue from './ScrollCue'
import Typewriter from './Typewriter'

export default function Opening() {
  const [greeted, setGreeted] = useState(false)

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <CornerFlower
        emoji="🌸"
        className="top-10 left-6 text-4xl opacity-40 sm:text-5xl"
      />
      <CornerFlower
        emoji="🌺"
        className="right-6 bottom-16 text-4xl opacity-30 sm:text-5xl"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="relative">
        <span className="animate-pulse-glow absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="relative z-10 max-w-md space-y-5">
          <Typewriter
            text="Hey Roshni. 🌷"
            className="text-balance font-serif text-3xl tracking-tight text-stone-700 sm:text-4xl"
            onDone={() => setGreeted(true)}
          />
          {greeted && (
            <RevealLines
              immediate
              className="space-y-5"
              lineClassName="text-balance font-serif text-3xl tracking-tight text-stone-700 sm:text-4xl"
              lines={[
                <span key="ask">
                  Before you scroll further{' '}
                  <span className="text-rose-400 italic">
                    chaanta maarun?
                  </span>{' '}
                  <span className="inline-block animate-wiggle">😄</span>
                </span>,
                <span
                  key="aside"
                  className="block font-sans text-base text-stone-500"
                >
                  (Don&rsquo;t worry, this isn&rsquo;t that kind of page.)
                </span>,
              ]}
            />
          )}
        </div>
      </div>
      <ScrollCue />
    </section>
  )
}
