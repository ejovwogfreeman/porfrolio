import React from 'react'
import SocialMedia from './SocialMedia'
import MobileNav from './MobileNav'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='main-nav'>
            <h1><a href="#home" className='gb-logo'>Ejovwo Godbless.</a></h1>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
        <ul className='side-nav'>
          <div className="desktop-nav">
            <SocialMedia color="#2351DC"/>
          </div>
          <div className="mobile-nav">
            <MobileNav/>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar