import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/Greetings';
const LazyComp = lazy(() => import('./components/LazyComp'))

function App() {
  // const [count, setCount] = useState(0); // initial value = 0

  return (
    <>
      {/* <Greetings name="Sachin" age={24} /> */}
      <div>
        <h1>My App...</h1>
        <Suspense fallback={<div>Loading... Comp....</div>} >
          <LazyComp />
        </Suspense>
      </div>
    </>
  )
}

export default App
