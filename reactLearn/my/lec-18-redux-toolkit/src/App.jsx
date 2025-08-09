import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleReset() {
    dispatch(reset())
  }

  function handleIncByNum() {
    dispatch(incrementByAmount(num))
  }

  return (
    <>
      <div>
        <button onClick={handleIncrementClick} >+</button>
        <p>Count: {count} </p>
        <button onClick={handleDecrementClick}  >-</button>
        <br /><br />
        <button onClick={handleReset} >Reset</button>
        <br /> <br />
        <input type="number" value={num} placeholder='Enter a number' onChange={(e) => setNum(e.target.value)} />
        <br /> <br />
        {/* {num} */}
        {/* <br /> <br /> */}

        <button onClick={handleIncByNum} >Inc By Number</button>
      </div>
    </>
  )
}

export default App
