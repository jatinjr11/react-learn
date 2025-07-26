import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para' >You have Clicked {count} times</p>
        <button id='btn' onClick={()=> setCount(prev => prev + 1)} >Click Me</button>
    </div>
  )
}

export default Counter