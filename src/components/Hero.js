import React from 'react'
import './Hero.css'
import { Button } from './Button';

function Hero() {
  return (
    <div className='hero-container' id='hero'>
      <p>Hello! My name is</p>
      <h1>Lei Ramirez</h1>
      <p>I'm a graduating BS Computer Science student from University of the Philippines Diliman.</p>
      <p>I'm an aspiring developer with a fascination for tech.</p>
      <div className='hero-btn'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
        >
          Contact Me
        </Button>
      </div>
    </div>
  )
}

export default Hero