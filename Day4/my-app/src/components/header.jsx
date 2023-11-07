import React from 'react'

function Header() {
  return (
    <div className='header'>
        <ul>
            <a href='home'>Home</a><span>
            <a href='contact'>Contact</a>
            <a href='github'>GitHub</a>
            <a href='linkedIn'>LinkedIn</a>
            </span>
        </ul>
    </div>
  )
}

export default Header