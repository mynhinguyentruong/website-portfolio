import React from 'react'

import "./ContactStyles.css"
import IntroImg from '../images/intro-bg.jpg'

export default function Contact() {

  return (
    <div className='form'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="Intro Background" />
      </div>
      <h1>Let's connect</h1>
      <form>
        <label htmlFor='name'>Your Name</label>
        <input id='name' type="text"/>
        <label htmlFor='email'>Email</label>
        <input id='email' type="email"/>
        <label htmlFor='subject'>Subject</label>
        <input id='subject' type="text"/>
        <label htmlFor='message'>Message</label>
        <textarea placeholder='Type your message here' id='message'/>
        <button>Submit</button>
      </form>
    </div>
  )
}