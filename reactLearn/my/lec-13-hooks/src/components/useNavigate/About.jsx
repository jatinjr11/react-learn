import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.state);
    console.log(location.state.name);
    
  return (
    <div>
        About...
    </div>
  )
}

export default About