import { useState } from 'react'
import useTimer from './useTimer'

function App() {

  let [timer, isRunning, startTimer, stopTimer, resetTimer] = useTimer()

  return (
    <>
      <h1>{isRunning && 'Timer Starts'}</h1>
      <h1>{timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
