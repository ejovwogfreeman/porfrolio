import React from 'react'
import img from "../assets/gbprofile.png"
import SocialMedia from "./SocialMedia"
import "../css/Header.css"
// import Typed from 'react-typed';

const Header = () => {
  return (
    <header>
        <div className="main-header" id='home'>
            <p>HI THERE...</p>
            <h5>I AM EJOVWO GODBLESS</h5>
            <h1>
              A Top-notch Developer, <br /> Writer and Blogger.
            </h1>
            <SocialMedia color="#2351DC"/>
        </div>
        <div className="side-header">
            <img src={img} alt="header-description" />
        </div>
    </header>
  )
}

export default Header