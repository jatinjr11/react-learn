import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';


const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  const getData = async () => {
    if (cache[index]) {
      setUserData(cache[index]);
      return;
    }
    setLoading(true);
    const repsonse = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(repsonse.data);
    setCache(prev => ({ ...prev, [index]: repsonse.data }));
    setLoading(false);
  }

  useEffect(function () {
    getData();
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  // if (userData.length > 0) {
  //   printUserData = 
  // }
  return (
    <>
      <div className='bg-black overflow-auto h-screen flex flex-col px-10 py-7 text-white'>
        <div className='flex flex-wrap gap-4 p-2'>
          {loading ? (
            <h3>Loading........</h3>
          ) : (
            userData.map((user, index) => {
              return <div key={index}>
                <Card user={user} />
              </div>
            })
          )
          }
        </div>

        <div className='flex justify-center gap-6 items-center p-4'>
          <button
            style={{ opacity: index === 1 ? 0.5 : 1 }}
            className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 px-4 py-2 rounded font-semibold'
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1)
                // setUserData([])
              }
            }}
          >
            Prev
          </button>
          <h4>Page {index}</h4>
          <button
            className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 px-4 py-2 rounded font-semibold'
            onClick={() => {
              setIndex(index + 1);
              // setUserData([])
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App