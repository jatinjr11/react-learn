/*
import { useContext } from "react"
import { UserContext } from "../App"

const ChildC = () => {
  const user = useContext(UserContext); // useContext hook is used to access the context value
  console.log(user);
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.gender}</li>
      </ul>
    </div>
  )
}

export default ChildC

*/
import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <button onClick={toggleTheme} >Change Theme</button>
    </div>
  )
}

export default ChildC