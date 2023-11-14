import React from 'react'
import {Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-main'>
        <ul className='header-list'>
            <li>
                <Link to={'/'}>
                  Home
                </Link>
            </li>
            <li>
                <Link to={'/contact'}>
                  Contact
                </Link>
            </li>
            <li>
                <Link to={'/about'}>
                  About
                </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Header