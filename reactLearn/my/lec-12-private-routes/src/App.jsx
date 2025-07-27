import { useState } from 'react'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Roti from './components/Roti'

function App() {
  return (
    <Roti/>
  )
}

export default App
