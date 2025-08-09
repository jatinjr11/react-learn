import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function expensiveTask(num) {
    console.log("Inside Expensive task")
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }

  let doubleValue = expensiveTask(4)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <div>
        Double Value: {doubleValue}
      </div>
    </>
  )
}

export default App
