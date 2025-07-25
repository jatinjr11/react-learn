import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruit = (fruitName)=> {
    // alert('Apple');
    alert(fruitName); 
  }

  return (
   <>
   <h1>Event and Function Call</h1>
   <button onClick={fruit} > CLick Me</button>
   <button onClick={()=>fruit("banana")} > CLick Me</button>
   </>
  )
}

export default App
