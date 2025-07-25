import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Outlet /> { /* Outlet is used to render the child component */}


      {/* <NavLink
        to={'/about'}
        style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
      >
        About
      </NavLink> */}
    </>

  )
}

export default Dashboard