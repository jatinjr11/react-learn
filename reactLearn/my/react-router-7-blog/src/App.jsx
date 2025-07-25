import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import {Routes, Route, Link} from 'react-router'
import Login from './Login'
import Navbar from './Navbar'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Link to={'/'} >Home</Link>
    <Link to={'/about'} > About </Link>
    <Link to={'/login'} >Login</Link> */}
    {/* <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}  />
      <Route path={'/about'} element={<About/>}  />
      <Route path={'/login'} element={<Login/>}  />

    </Routes> */}
    <Todo/>
    </>
  )
}

export default App
