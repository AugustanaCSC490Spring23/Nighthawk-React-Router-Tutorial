import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facilis repudiandae ratione excepturi culpa non optio saepe, quidem laborum quo, officia vero, nemo sapiente debitis officiis ab repellat at necessitatibus?</p>

        <div className="btn"><Link className='button' to='/login'>Log In</Link></div>

        <div className="btn"><Link className='button' to='/signup'>Sign Up</Link></div>
    </div>
  )
}
