import React, { useState, useEffect } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  // ✅ MOUNTING (runs only once after component mounts)
  useEffect(() => {
    console.log('🟢 Component Mounted');

    // ✅ UNMOUNTING (return function runs before component unmounts)
    return () => {
      console.log('🔴 Component Unmounted');
    };
  }, []); // empty dependency array = runs once on mount

  // ✅ UPDATING (runs when count is updated)
  useEffect(() => {
    if (count !== 0) {
      console.log(`🔁 Component Updated - Count changed to ${count}`);
    }
  }, [count]); // runs whenever "count" changes

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>React Functional Lifecycle Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default LifecycleComponent;
