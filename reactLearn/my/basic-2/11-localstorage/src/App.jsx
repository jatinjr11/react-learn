import React from 'react'

const App = () => {
  /*
  localStorage.clear();
  sessionStorage.clear();
  
  // to store a object in local storage
  const user = {
    username: "Sachin",
    age: 18,
    city: "Indore"
  }
  
  localStorage.setItem("user", JSON.stringify(user));
  */

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  console.log(typeof user);
  return (
    <div>App</div>
  )
}

export default App