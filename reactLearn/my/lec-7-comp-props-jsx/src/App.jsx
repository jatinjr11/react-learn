// import Usercard from "./components/Usercard"
// import "./App.css"
// import Welcome from "./components/Welcome"
// import React from "react";

import NormalComp from "./components/NormalComp";
import PureComp from "./components/PureComp";

// function App() {

//   return (
//     <>
//       {/* <div className="container">
//      <Usercard name="sachin" />
//      <Usercard name="adi" />
//      <Usercard name="dev" />
//    </div> */}

//    {/* class Comp... */}
//    {/* <Welcome name="sachin" /> */}


//     </>
//   )
// }

// export default App

// class App extends React.Component {
//   state = { name: "Mohit" }

//   render() {
//     return (
//       <div>
//         <NormalComp name={this.state.name} />
//         <PureComp name={this.state.name} />
//         <button onClick={() => this.setState({ name: "Sachin" })}>
//           Update
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import NameDisplay from "./components/NameDisplay";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jatin");

  return (
    <div>
      <NameDisplay name={name} />
      <button onClick={() => setCount(count + 1)}>Increment Count {count} </button>
    </div>
  );
}

export default App;

