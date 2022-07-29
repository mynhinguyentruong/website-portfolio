import React from 'react'
import { Link } from 'react-router-dom'

import './NavBarStyles.css'

import { FaBars } from "react-icons/fa"

function Navbar() {
  return (
    <div className='header'>
      <div className='hamburger'>
        <FaBars size={20} style={{color: '#fff'}}/>
      </div>
      <Link to='/'><h1 >Portfolio Logo</h1></Link>
      <ul className='nav-menu'>
        <li><Link to='/'>Home</Link></li>
       
        <li><Link to='/project'>Project</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      
    </div >
  );
}

export default Navbar;