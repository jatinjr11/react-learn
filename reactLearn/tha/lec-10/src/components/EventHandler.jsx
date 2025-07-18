import React from 'react'

const EventHandler = () => {
    
    function handleButtonClick(){
        alert(" Button Clicked")
    } 

  return (
    <>
    <button onClick={handleButtonClick}>Click Me!!</button>
    </>
  )
}

export default EventHandler