import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const [color, setColor] = useState(false)
  const handleChangeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', handleChangeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='home' spy={true} smooth={true}>
        <h1 className='portfolio'>My Portfolio</h1>
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link activeClass='active' to='home' spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to='projects' spy={true} smooth={true}>
            Projects
          </Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={35} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={35} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  )
}

export default Navbar
