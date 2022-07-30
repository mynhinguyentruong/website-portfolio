import React from 'react'
import {Link} from 'react-router-dom'

import IntroImg from '../images/intro-bg.jpg'

import './HeroImgStyles.css'

export default function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="Intro Background" />
      </div>
      <div className='content'>
        <p>Hi, I'm Nhi</p>
        <span>Your Friendly Neighbor...</span>
        <h1>React Developer</h1>
        <div>
          <Link to path='/project' className='btn'>Projects</Link>
          <Link to path='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
