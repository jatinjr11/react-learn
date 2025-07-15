import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/Greetings';

function App() {
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <>
    <Greetings name="Sachin" age={24} />
    </>
  )
}

export default App
