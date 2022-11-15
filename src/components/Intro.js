import './Intro.css'
import { Link } from 'react-scroll'
import React from 'react'
import IntroImg from '../assets/background.png'

const Intro = () => {
  return (
    <div id='home' className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <p>Hi, I'm Karine Zhang</p>
        <h1>Front-End Developer</h1>
        <div>
          <Link to='projects' spy={true} smooth={true} className='btn'>
            Projects
          </Link>
          <Link to='about' spy={true} smooth={true} className='btn btn-light'>
            About
          </Link>

          {/* <button onClick={handleScrollTo} className='btn'>
            Projects
          </button>
          <button onClick={handleScrollTo} className='btn btn-light'>
            About
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Intro
