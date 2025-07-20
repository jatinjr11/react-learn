import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Parent = () => {
    const data = useContext(UserContext)
  return (
    <div>Parent, {data}</div>
  )
}

export default Parent