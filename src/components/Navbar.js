import React from 'react'
import SocialMedia from './SocialMedia'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='main-nav'>
            <h1>Ejovwo Godbless.</h1>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
        <ul className='side-nav'>
          <SocialMedia color="#2351DC"/>
        </ul>
    </nav>
  )
}

export default Navbar