/*
import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'
import './index.css'

// step-1: create context
const UserContext = createContext();

// step-2: wrap all the child components inside a context provider
// step-3: pass the data through context provider
// step-4: consume the data using context consumer or useContext hook


const App = () => {
  const [user, setUser] = useState({name: "Sachin"});
  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA />
    </UserContext.Provider>
    </>
    )
    }
    
    export default App
    export {UserContext}
    */

/*
*/
import { createContext, useState } from 'react'
import ChildA from './components/ChildA'

const ThemeContext = createContext();

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor: theme === 'light' ? 'beige' : 'black', color: theme === 'light' ? 'black': 'white' }}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }