import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate =  useNavigate();

    function handleCLick(){
        navigate('/about', {state: {name: "Sachin"}})
    }

  return (
    <button onClick={handleCLick} >Go to About Page</button>
  )
}

export default Home