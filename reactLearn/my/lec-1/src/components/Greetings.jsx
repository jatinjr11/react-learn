import React from 'react'

const Greetings = (props) => {
  return (
    <div>
        <h1>Hello, {props.name}, You are {props.age}</h1>
    </div>
  )
}

export default Greetings