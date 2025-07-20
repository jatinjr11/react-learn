import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import("./Home"))
const About = lazy(() => import('./About'))
import Contact from './Contact'
import UserProfile from './UserProfile'
import Dashboard from './Dashboard'
import PropsDrilling from './PropsDrilling'
import { UserContext } from './UserContext'
import Parent from './Parent'
import GrandChild from './GrandChild'
import MyPureComponent from './MyPureComponent'
import FuncPureComp from './FuncPureComp'
// import Profile
const Profile = lazy(() => import('./Profile'))
const Setting = lazy(() => import('./Setting'));
// import Setting from "./Setting"

function App() {
  const [count, setCOunt] = useState(0);
  return (
    <>
      {/* <div>
        <Routes>
          <Route path='/' element={<Suspense fallback="Loading Home page...." > <Home /> </Suspense>} />
          <Route path='/about' element={<Suspense fallback="Loading About page..." > <About />  </Suspense>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users/:userID' element={<UserProfile />} />
          <Route path='/dashboard' element={<Suspense fallback="Loading dasboard..." > <Dashboard /></Suspense>}>
            <Route path='setting' element={<Suspense fallback="Loading setting page..."> <Setting /> </Suspense>} />
            <Route path='profile' element={<Suspense fallback="Loading Profile page..." > <Profile /> </Suspense>} />
          </Route>
        </Routes>
      </div> */}

      {/* <PropsDrilling/> */}

      {/* <UserContext.Provider value={"Sachin"}>
        <GrandChild />
        <Parent />
      </UserContext.Provider> */}

      {/* <MyPureComponent name={"Sachin Saini"} age={23} /> */}

      <button onClick={() => setCOunt(count + 1)} >Increment</button>
      {/* <FuncPureComp name={"Sachin"} /> */}
      <FuncPureComp count={count} />
    </>
  )
}

export default App
