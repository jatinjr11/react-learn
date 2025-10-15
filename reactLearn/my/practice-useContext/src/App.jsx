import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';

// Steps:-
// 1. create Context
// const UserContext = createContext();

// 2. wrap all the child component inside context provider
// 3. pass the value to the context provider
// 4. use the context value in the child component

const ThemeContext = createContext();

function App() {

  // const [user, setUser] = useState({ name: "Sachin Kumar" });
  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}  >
        <div className='container' style={{ backgroundColor: theme === 'light' ? "whitesmoke" : "black" }}>

        </div>
        <ChildA />
      </ThemeContext.Provider>
    </>
    // <> 
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  )
}

export default App
// export { UserContext }
export { ThemeContext }