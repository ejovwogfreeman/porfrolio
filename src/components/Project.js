import React from "react";
import "../css/Project.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img7.jpg"
import img4 from "../assets/img5.jpg"
import img5 from "../assets/img2.jpg"
import img6 from "../assets/img9.jpg"
import img7 from "../assets/img8.jpg"

const Project = () => {

  return (
    <div className="project-container" id="projects">
        <div className="text">
            <h1>Milestones Of Projects</h1>
            <p>Here are a few people and projects I have worked on</p>
        </div>
      <div className="row grid-image">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="text">
                <img
                  src={img1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="content">
                  <h3>LOGO DESIGN</h3>
                </div>
              </div>

              <div className="text">
                <img
                  src={img2}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
                <div className="content">
                  <h3>FIXING OF HINGE</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="text">
                <img
                  src={img4}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />
                <div className="content">
                  <h3>SOCIAL MEDIA ADS</h3>
                </div>
              </div>

              <div className="text">
                <img
                  src={img5}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="content">
                  <h3>LAPTOP SERVICING</h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <div className="text">
                <img
                  src={img6}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />
                <div className="content">
                  <h3>WEB DEVELOPMENT</h3>
                </div>
              </div>

              <div className="text">
                <img
                  src={img7}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
                <div className="content">
                  <h3>MOTHERBOARD REPAIR</h3>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Project;
