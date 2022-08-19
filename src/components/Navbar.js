import React from 'react'
import SocialMedia from './SocialMedia'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='main-nav'>
            <h1>Ejovwo Godbless.</h1>
            <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contac Me</a></li>
            </ul>
        </div>
        <ul className='side-nav'>
          <SocialMedia color="#2351DC"/>
        </ul>
    </nav>
  )
}

export default Navbar