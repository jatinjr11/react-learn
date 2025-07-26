import Usercard from "./components/Usercard"
import "./App.css"

function App() {

  return (
   <div className="container">
     <Usercard name="sachin" />
     <Usercard name="adi" />
     <Usercard name="dev" />
   </div>
  )
}

export default App
