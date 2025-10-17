import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className='parent'>
      <Card user="Sachin Ji" age={22} img="https://images.unsplash.com/photo-1760474927279-9bcdbb0fc838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"  />
      <Card user="Chiku" age={18} img="https://images.unsplash.com/photo-1760288290271-11c24dabf8c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" />
      </div>
    </>
  )
}

export default App