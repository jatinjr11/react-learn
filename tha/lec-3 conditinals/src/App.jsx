import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "Queen of tears"
  const rating = 8.2;
  const summary = "Queen of Tears is a 2022 Indian Hindi-language romantic drama film directed by Rajat Kapoor and written by Kapoor and Anubhav Sinha. The film stars Ranbir Kapoor, Anushka Sharma, and Radhika Apte. The film was released on 18 November 2022 on Netflix.";
  let age = 16;

  const reutrnGenre = () => {
    return "Hello Ji"
  }

  const canWatch = () => {
    if (age >= 18 && age <= 25) return "Watch Now"
    return "Not Avail"
  }

  return (
    <>

      <div>
        <div>
          <img src="queen.webp" alt="" width="40%" height="40%" />
        </div>
        <h2>Name: {name} </h2>
        <h3>Rating: {rating}</h3>
        <p>{summary}</p>
        <p>Genre: {reutrnGenre()}</p>
      <button>{canWatch()}</button>
      </div>


      {/* <button> {age>= 18 ? "Watch now" : "Not Avail"} </button> */}
    </>
  )
}

export default App
