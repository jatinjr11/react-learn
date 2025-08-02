import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamsComp from './components/ParamsComp'
import Courses from './components/Courses'
import Reports from './components/Reports'
import MockTest from './components/MockTest'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },

    {
      path: '/dashboard',
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'courses',
          element: <Courses />
        },
        {
          path: 'mock-tests',
          element: <MockTest />
        },
        {
          path: 'reports',
          element: <Reports />
        }
      ]
    },

    {
      path: '/student/:id',
      element: <div>
        <Navbar />
        <ParamsComp />
      </div>
    },

    {
      path: '*',
      element: <div>404 Not Found</div>
    }
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
