import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
    <div>
    { isLoggedIn ? <Login/> : <Logout/> }
    </div>
    </>
  )
}

export default App
