import React from 'react'
import img from "../assets/gbprofile.png"
import SocialMedia from "./SocialMedia"
import "../css/Header.css"
// import Typed from 'react-typed';

const Header = () => {
  return (
    <header>
        <div className="main-header">
            <p>HI THERE...</p>
            <h5>I AM EJOVWO GODBLESS</h5>
          <div className="typed">
            <h1>
              {/* <Typed
                className="typed-text"
                strings={[
                  'A Top-notch Developer',
                  'Front End Web Developer',
                  'Writer and Blogger',
                ]}
                typeSpeed={80}
                backSpeed={80}
                loop
              /> */}
              A Top-notch Developer <br /> Writer and Blogger.
            </h1>
          </div> 
          <SocialMedia color="#2351DC"/>
        </div>
        <div className="side-header">
            <img src={img} alt="" />
        </div>
    </header>
  )
}

export default Header