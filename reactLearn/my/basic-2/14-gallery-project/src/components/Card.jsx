import React from 'react'

const Card = (props) => {
  return (
    <div>
         <a href={props.user.url} target='_blank'>
          <div className='h-40 w-44  rounded-xl overflow-hidden'>
            <img src={props.user.download_url} alt="" className='h-full w-full object-cover' />
          </div>
          <h2 className='font-bold text-lg'>{props.user.author}</h2>
        </a>
    </div>
  )
}

export default Card