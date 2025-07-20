import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const {userID} = useParams(); // this is how we get the params from the url


  return (
    <>
    <div>UserProfile Page...</div>
    <div>UserID: {userID}</div>
    </>
  )
}

export default UserProfile