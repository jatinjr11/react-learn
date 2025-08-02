import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/about');
  }

  return (
    <>
    <div>Home </div>
    <button onClick={handleClick}  > Move to About Page...  </button>
    </>
  )
}

export default Home