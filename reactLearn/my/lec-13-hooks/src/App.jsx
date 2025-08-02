import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComp from './components/useLocation/MyComp'
import { Route, Routes } from 'react-router-dom'
import About from './components/useNavigate/About'
import Home from './components/useNavigate/Home'
import InputFocus from './components/useRef/InputFocus'
import Parent from './components/useCallback/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <MyComp/> */}

    {/* useNavigate */}
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes> */}

    {/* useRef */}
    {/* <InputFocus/> */}

    <Parent/>

    </>
  )
}

export default App
