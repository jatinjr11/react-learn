import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter count={count} />
    <button onClick={()=> setCount(4)} >Click To inc....</button>
    </>
  )
}

export default App
