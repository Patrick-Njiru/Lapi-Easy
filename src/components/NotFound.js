import React from 'react'

function NotFound() {
  return (
    <div style={{height: '100vh'}}>
        <h1 style={{
            color:'red',
            fontSize: '3em',
            position: 'relative',
            top: "30vh",
            left: '20vw',
            }}
            >
            The page you are looking for does not exist!
        </h1>
    </div>
  )
}

export default NotFound