import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{height: '100vh'}}>
        <h1 style={{
            color:'red',
            fontSize: '3em',
            position: 'relative',
            top: "30vh",
            left: '20vw',
            width: "70vw"
            }}
            >
            The page you are looking for does not exist! <br />
            <span> Visit The <NavLink to='/'> Home Page </NavLink>.</span>
        </h1>
    </div>
  )
}

export default NotFound