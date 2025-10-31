import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComp = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>ParamsComp: {id} </div>
  )
}

export default ParamsComp