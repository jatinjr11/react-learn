import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/StopWatch';
// we can use useRef to create a variable that persist value across re-render
function App() {

  const [count, setCount] = useState(0);
  // let val = 1 ;
  let val = useRef(0); // val is object now and we can access it using val.current

  let btnRef = useRef();

  function handleInc() {
    val.current = val.current + 1;
    console.log("value of val: ", val.current)

    setCount(count + 1);
  }

  useEffect(() => {
    console.log("i am again re-render");
  })

  function changeColor() {
    if (btnRef.current.style.backgroundColor === "red") {
      btnRef.current.style.backgroundColor = "blue";
    } else {
      btnRef.current.style.backgroundColor = "red";
    }
  }

  return (
    <>

      <div>
      <h2>  Count: {count}</h2>
      </div>
      <br />

      <button ref={btnRef} onClick={handleInc} >Click Me!</button>

      <br /><br />

      <button onClick={changeColor} >Change Color of 1st Button</button>

      {/* <StopWatch/> */}

    </>
  )
}

export default App
