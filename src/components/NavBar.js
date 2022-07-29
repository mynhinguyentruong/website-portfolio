import React from 'react'
import { Link } from 'react-router-dom'

import './NavBarStyles.css'

import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

const [click, setClick] = React.useState(false)

const handleClick = () => {
  setClick(prevClick => !prevClick)
}

  return (
    <div className='header'>
      <Link to='/'><h1 >Portfolio</h1></Link>
      <ul className={click ? "nav-menu active" : "nav-menu" }>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/project'>Project</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? 
        <FaTimes size={20} style={{color: 'white', cursor:'pointer'}} /> : 
        <FaBars size={20} style={{color: 'white', cursor:'pointer'}} />}
      </div>
    </div >
  );
}

export default Navbar;