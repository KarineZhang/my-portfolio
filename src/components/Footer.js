import './FooterStyles.css'

import React from 'react'
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <h2>Contact Informations</h2>
          <div className='info location'>
            <FaHome size={30} style={{ color: 'white', marginRight: '2rem' }} />
            <p>Montreal, Quebec</p>
          </div>
          <div className='info phone'>
            <FaPhone
              size={30}
              style={{ color: 'white', marginRight: '2rem' }}
            />
            <p>438-868-5208</p>
          </div>
          <div className='info email'>
            <FaMailBulk
              size={30}
              style={{ color: 'white', marginRight: '2rem' }}
            />
            <p>karinee.zhangg@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          <div className='social'>
            <h2>More About Me</h2>
            <p>My name is Karine Zhang, feel free to connect with me!</p>
            <a href='https://www.linkedin.com/in/karine-zhang/'>
              <FaLinkedin
                size={50}
                style={{
                  color: 'white',
                  marginRight: '1rem',
                  cursor: 'pointer'
                }}
              />
            </a>
            <a href='https://github.com/KarineZhang'>
              <FaGithub
                size={50}
                style={{
                  color: 'white',
                  marginRight: '1rem',
                  cursor: 'pointer'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
