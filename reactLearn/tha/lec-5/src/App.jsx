import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NetFlixSeries, {Footer, Header } from './components/NetFlixSeries'

function App() {
  return (
    <>
    <Header/>
    <NetFlixSeries/>
    <NetFlixSeries/>
    <Footer/>    
    </>
  )
}

export default App
