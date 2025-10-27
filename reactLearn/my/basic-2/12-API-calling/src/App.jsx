import React from 'react'
import axios from 'axios';

const App = () => {
  const getData = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users'); 
    console.log(response.data)
  }

  const getImages = async () => {
    const response = await axios('https://picsum.photos/v2/list');
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getImages}>Get Images</button>
    </div>
  )
}

export default App