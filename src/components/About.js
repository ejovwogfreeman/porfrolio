import React from "react";
import "../css/About.css";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <div className="about-me" id="about">
      <h1>About Me</h1>
      <p>
        Ejovwo Godbless is a goal driven <br />
        Techpreneur whose interest is in using technology to <br />
        build solutions to solve real world problems.
      </p>
      <SocialMedia color="#2351DC" />
      <a href="" className="download">
        DOWNLOAD RESUME
      </a>
    </div>
  );
};

export default About;
