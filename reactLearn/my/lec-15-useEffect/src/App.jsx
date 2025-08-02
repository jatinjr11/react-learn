import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/LoggerComponent';
import DataFetcher from './components/DataFetcher';

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal] = useState(1);

  // first -> side effect function
  // second -> cleanup function
  // third -> dependency array

  /*
  // vriation-1
  // runs on every render
  useEffect(() => {
    // alert("i will run on every render")
    console.log(count);
    
  });
  */

  /*
  // variation-2
  // runs only on first render
  useEffect(() => {
    alert("i will run on first render")
  },[])
  */

  // variation-3
  // runs on first render and also when count changes
  // useEffect(() => {
  //   alert("i will run on first render and also when count changes")
  // },[count])

  // variation-4
  // this time to add cleanup function
  // useEffect(() => {
  //   alert("i will run on first render and also when count changes")
  //   return () => {
  //     alert("count will unmounted from UI")
  //   }
  // }, [count])

  function handleClick(){
    setCount(count + 1)
  }

  function handleClickTotal(){
    setTotal(total + 1)
  }

  return (
    // <>
    // <button onClick={handleClick}>
    //   Click Me
    // </button>
    // <br />
    // Count is: {count}
    // <br />
    // <button onClick={handleClickTotal}>
    //   Click Update
    // </button>
    // <br />
    // total is: {total}
    // </>
    <>
    {/* <LoggerComponent/> */}
    <DataFetcher/>
    </>
  )
}

export default App
