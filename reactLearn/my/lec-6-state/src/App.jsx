import { useState } from "react"
import Counter from "./Counter";
import ToggleButton from "./ToggleButton";

function App() {
  const [fruit, setFruit] = useState("Apple");
  function handleFruit(){
    setFruit("Mango");
  }
  return (
    <>
      {/* <h1>State....</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter/> */}

      <ToggleButton/>
    </>
  )
}

export default App
