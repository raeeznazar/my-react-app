import { useRef, useState } from 'react'
import Background from './components/Background'
import CelebrationShower from './components/CelebrationShower'
import Closing from './components/Closing'
import CursorTrail from './components/CursorTrail'
import FallingPetals from './components/FallingPetals'
import HowItStarted from './components/HowItStarted'
import Opening from './components/Opening'
import ScrollProgress from './components/ScrollProgress'
import ThePoint from './components/ThePoint'
import TheAsk from './components/TheAsk'
import WhatGrew from './components/WhatGrew'

function App() {
  const [answered, setAnswered] = useState(false)
  const closingRef = useRef(null)

  const handleAnswer = () => {
    setAnswered(true)
    setTimeout(() => {
      closingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 450)
  }

  return (
    <>
      <Background warm={answered} />
      <FallingPetals />
      <CelebrationShower active={answered} />
      <CursorTrail />
      <ScrollProgress />
      <main className="relative z-10">
        <Opening />
        <HowItStarted />
        <WhatGrew />
        <ThePoint />
        <TheAsk onAnswer={handleAnswer} />
        <Closing ref={closingRef} answered={answered} />
      </main>
    </>
  )
}

export default App
