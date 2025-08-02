import React from 'react'

const Child = (props) => {

    console.log(props.onClick())
  return (
    <div>Child</div>
  )
}

export default Child