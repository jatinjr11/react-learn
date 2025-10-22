import React from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = (dets) => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  const jumpByFive = () => {
    setCounter(counter + 5);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      {/* <button onClick={decreaseCounter} disabled={counter === 0}>Decrease</button> */}
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={jumpByFive}>Jump By 5</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App