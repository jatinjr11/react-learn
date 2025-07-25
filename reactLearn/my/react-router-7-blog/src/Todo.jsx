import React from 'react'

const Todo = () => {
    function callFun(){
        alert("func called")
    }
  return (
    <div>
        <h1>React Comp....</h1>
        <img src="https://picsum.photos/200/300" alt="phot alt" />
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam vel aspernatur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam vel aspernatur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam vel aspernatur.</li>
        </ul>
        <button onClick={callFun}>Click Me</button>
    </div>
  )
}

export default Todo