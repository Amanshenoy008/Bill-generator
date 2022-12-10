import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className=''>
        You are LOST !!!!!!!!!!

       <Link to={'/'}>
        <div>
            Redirect To Home page 
       </div>
       </Link>
    </div>
  )
}

export default Error