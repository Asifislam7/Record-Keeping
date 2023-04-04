import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const naviagte=useNavigate();
  return (
    <div>
      <h1>Error 404 page not found</h1>
      <button onClick={()=>{naviagte(-1)}}>
        Go back</button>
        {/* naviagte is the function of the use naviagte function of the react */}
    </div>
  )
}

export default Error
