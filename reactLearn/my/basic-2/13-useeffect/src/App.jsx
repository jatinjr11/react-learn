import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(function () {
    console.log("use effect is running...")
  }, [num]);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Click Here</button>
    </>
  )
}

export default App