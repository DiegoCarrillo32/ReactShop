import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'
export const NotFound = () => {
  return (
    <div className='container'>
        
            <h1>Not found</h1>
            <h1>404</h1>

            <span>Redirect to <Link to={'/login'}>Home</Link> menu or contact support for help</span>
    </div>
  )
}
