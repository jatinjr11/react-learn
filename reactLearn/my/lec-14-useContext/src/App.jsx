import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'
// import app.css
import './App.css'

// step-1 create context
// const UserContext = createContext();
// step-2 wrap all the child inside a context provider
// step-3 access the context value in the child component

const ThemeContext = createContext();


const App = () => {
  /*
  const [user, setUser] = useState({name: "ram"})
  */

  const [theme, setTheme] = useState("light")

  return (
    <>
      {/* <UserContext.Provider value={user} >
      <ChildA/>
    </UserContext.Provider> */}

      <ThemeContext.Provider value={{ theme, setTheme }} >
        <div className="container" style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>

    </>
  )
}

export default App
// export {UserContext}
export { ThemeContext }