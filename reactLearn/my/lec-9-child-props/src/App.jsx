import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ChildComp from './components/ChildComp'

function App() {
  const data = {
    name: "Sachin",
    age: 21,
    city: "Khandwa"
  }
  return (
    <>
    {/* <Card name="sachin">
      <h1>I am Sachin</h1>
      <p>I am from khandwa</p>
      <p>I am a CSE Student</p>
    </Card> */}

<ChildComp   {...data} />
    
    </>
  )
}

export default App
