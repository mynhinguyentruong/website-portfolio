import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavBarStyles.css'

import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [toggleNavBar, setToggleNavBar] = useState(false)
  const handleClick = () => setToggleNavBar(prevState => !prevState)

  return (
    <div className='header'>
      <div className='hamburger' onClick={handleClick}>
        {toggleNavBar ? <FaBars size={20} style={{color: '#fff'}}/> : <FaTimes size={20} style={{color: '#fff'}}/>}
        
      </div>
      <Link to='/'><h1 >Portfolio Logo</h1></Link>
      <ul className={toggleNavBar ? "nav-menu-active" : "nav-menu"}>
        <li><Link to='/'>Home</Link></li>
       
        <li><Link to='/project'>Project</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      
    </div >
  );
}

export default Navbar;