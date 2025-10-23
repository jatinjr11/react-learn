import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("From Submitted")
  }
  return (
    <>
      <form onSubmit={(e)=> {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App