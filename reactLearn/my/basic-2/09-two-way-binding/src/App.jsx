import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("From Submitted by", title);
    setTitle('')
  }

  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter Your Name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Current Value: {title}</p>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App