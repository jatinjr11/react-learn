import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <div className='header'>
        <Link className='link'>Login</Link>
    </div>
    <div>
        <ul>
            <li>
                <Link className='link' to={'/'}>Home</Link>
            </li>
            <li>
                <Link className='link' to={'/login'}>Login</Link>
            </li>
            <li>
                <Link className='link' to={'/about'}>About</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar