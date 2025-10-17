import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  // const arr = [10, 20, 30]
  const arr = [
    {
      name: "sachin"

    },
    {
      name: "Cheeku"
    },
    {
      name: "Peeku"
    }
  ]
  console.log(arr)
  return (
    <>
      <div className='parent'>
        {
          arr.map(function (elem) {
            return <User user={elem.name} />
          })
        }
      </div>
    </>

  )
}

export default App