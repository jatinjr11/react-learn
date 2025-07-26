import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);
  return (
    <>
    <button style={{backgroundColor: isOn ? "green" : "red"}}  onClick={()=> setIsOn(!isOn)}  > {isOn ? "ON" : "OFF"} </button>
    </> 
  )
}

export default ToggleButton