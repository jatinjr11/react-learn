import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900 text-white'>
      <h2 className='text-xl font-bold'>Sachin</h2>
      <div className='flex gap-8'>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/about">About</a>
        <a className='text-lg font-bold' href="/product">Product</a>
      </div>

    </div>
  )
}

export default Navbar