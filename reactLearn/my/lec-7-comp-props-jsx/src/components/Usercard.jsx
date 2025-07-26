import React from 'react'
import './Usercard.css'

const Usercard = (props) => {
  return (
    <div className='user-container' style={{borderRadius: "10px"}}>
        <p id='user-name'>{ props.name } </p>
        <img id='user-img' src="tony-stark.jpg" alt="sachin.jpg"  width={'500px'} height={'310px'} />
        <p id='user-desc'>Description of Sachin</p>
    </div>
  )
}

export default Usercard