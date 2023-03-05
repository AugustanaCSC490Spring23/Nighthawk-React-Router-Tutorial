import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './layout.css'

export default function Layout() {
  return (
    <div>
        <main>
            <nav>
                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='contact'>Contact</Link></li>
                    <li><Link className='link' to='about'>About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </main>
        
    </div>
  )
}
