import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked")
  }

  function handleMouseOver(){
    alert("Mouse is Over on para")
  }

  return (
    <>
      <div>

        <p onMouseOver={handleMouseOver} style={{border: "1px solid red", marginBottom: "6px"}}>
          I am a Para
        </p>


        <button onClick={handleClick}>
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
