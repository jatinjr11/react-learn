import React, { useState, useCallback } from "react";
import Child from "./Child"; // memoized

function Parent() {
  const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []); // no dependencies

const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;