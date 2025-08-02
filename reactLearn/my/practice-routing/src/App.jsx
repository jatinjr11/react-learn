import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ParamsComp from './components/ParamsComp'
import Courses from './components/Courses'
import Mock from './components/Mock'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>,
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Navbar />
        <Contact />
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
          path: 'mock-test',
          element: <Mock />
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
    {
      path: '/student/:id',
      element: <div>
        <Navbar />
        <ParamsComp />
      </div>
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
