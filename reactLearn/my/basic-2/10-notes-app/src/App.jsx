import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }


  return (
    <>
      <div className='bg-black lg:flex text-white h-screen '>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex  flex-col p-10 gap-4 lg:w-1/2 items-start'>

          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 py-2 border-2 rounded w-full font-medium'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <textarea
            type="text"
            placeholder='Write Details'
            className='px-5 h-32 py-2 border-2 rounded w-full font-medium '
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className='bg-white w-full text-black px-5 py-2 rounded font-medium outline-none'>Add Note</button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='font-bold text-3xl'>Your Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
            {task.map(function (elem, idx) {
              return <div key={idx} className='flex justify-between flex-col items-start
              relative h-52 w-40 rounded-xl text-black p-4 bg-white'>
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight font-medium flex flex-col '>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-600 text-white'>Delete Note</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App