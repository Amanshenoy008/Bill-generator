import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='flex justify-center items-center bg-blue-400 h-screen '>
        You are LOST !!!!!!!!!!

       <Link to={'/'}>
        <div className='text-red-300 text-underline'>
            Redirect To Home page 
       </div>
       </Link>
    </div>
  )
}

export default Error