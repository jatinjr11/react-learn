
/*
import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
  const user = useContext(UserContext);
  
  return (
    <div>
    {user.name}
    </div>
  )
}

export default ChildC
*/

import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  function toggleTheme(){
    if(theme === 'light'){
      setTheme('dark');   
    }else {
      setTheme('light');
    }
  }
  return (
    <>
    <div>Theme Color: {theme}</div>
    <button className='btn' onClick={toggleTheme}>Change Theme</button>
    </>
    
  )
}

export default ChildC