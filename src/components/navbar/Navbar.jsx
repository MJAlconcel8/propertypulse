import {useState} from "react"
import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  const [open, setOpen] = useState(false)
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
        <div className="menuIcon">
          <img src="menu.png" alt="" onClick={()=>setOpen(!open)}/>
        </div>
        <div className={open ? "menu active": "menu"}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Content</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
