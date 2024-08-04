import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav>
        <div className="left">
          <a href='/' className='logo'>
            <img src='logo.png' alt=''/>
            <span>Property Pulse</span>
          </a>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Content</a>
          <a href='/'>Agents</a>
        </div>
        <div className="right">
        <a href='/'>Sign In</a>
        <a href='/' className='register'>Sign Up</a>
        </div>
    </nav>
  )
}

export default Navbar
