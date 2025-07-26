import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return <>
    <h1>Counter: {counter}</h1>
    <button onClick={()=> setCounter(counter+1)} style={{marginRight: "20px"}}>Upd... Counter</button>
    
    <button onClick={()=> setCounter(prev => prev-1)}>Dec... Counter</button>
    </>
}

export default Counter;