import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const GrandChild = () => {
    const data = useContext(UserContext);
  return (
    <div> Hello, {data} </div>
  )
}

export default GrandChild