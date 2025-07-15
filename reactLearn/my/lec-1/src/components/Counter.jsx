// Stateful (Parent)
function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <Display value={count} />  {/* Stateless child */}
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    );
  }
  
  // Stateless (Child)
  function Display({ value }) {
    return <p>Count: {value}</p>;
  }
  
  export default Counter;