import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className='bg-black text-white h-screen'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex justify-between flex-col gap-4 items-start p-10'>
            <input
              type="text"
              placeholder='Enter Notes Heading'
              className='px-5 py-2 border-2 rounded w-full font-medium'
            />
            <textarea
              type="text"
              placeholder='Write Details'
              className='px-5 h-32 py-2 border-2 rounded w-full font-medium '
            />
            <button className='bg-white w-full text-black px-5 py-2 rounded font-medium outline-none'>Add Note</button>
        </form>
        <div></div>
      </div>
    </>
  )
}

export default App