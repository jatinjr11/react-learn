import React from 'react'

const App = () => {
  function inputFieldChanging(dets) {
    // console.log("User is Typing...");
    console.log(dets.target.value)
    
  }
  return (
    <div>
      <input type="text" onChange={inputFieldChanging} />
    </div>
  )
}

export default App