import React from "react";
import "../css/Project.css";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img7.jpg";
// import img4 from "../assets/img5.jpg";
// import img5 from "../assets/img2.jpg";
// import img6 from "../assets/img9.jpg";
// import img7 from "../assets/img8.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Project = () => {
  let projects = [
    {
      id: 1,
      url: "https://a2z.com.ng/",
      img: project1,
      text: "A2Z",
    },
    {
      id: 2,
      url: "https://expressworldtrade.netlify.app/",
      img: project2,
      text: "EXPTESSWORLD TRADE",
    },
    {
      id: 3,
      url: "https://gracee-foods.netlify.app/",
      img: project3,
      text: "GRACEE FOOD",
    },
    {
      id: 4,
      url: "https://gb-hngx-task-two.netlify.app/",
      img: project4,
      text: "MOVIE BOX",
    },
    {
      id: 5,
      url: "https://gb-hngx-task-three.netlify.app/",
      img: project5,
      text: "PICTURE GRAM",
    },
    {
      id: 6,
      url: "https://gb-netflixclone.vercel.app/",
      img: project6,
      text: "NETFLIX CLONE",
    },
  ];
  return (
    <div className="project-container" id="projects">
      <div className="text">
        <h1>Milestones Of Projects</h1>
        <p>Here are a few people and projects I have worked on</p>
      </div>
      {/* <div className="row grid-image">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div className="text">
            <img
              src={img1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="content">
              <h3>E-commerce website</h3>
            </div>
          </div>

          <div className="text">
            <img
              src={img2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <div className="content">
              <h3>Forex Website</h3>
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
              <h3>Project Management</h3>
            </div>
          </div>

          <div className="text">
            <img
              src={img5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="content">
              <h3>School Website</h3>
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
              <h3>Web development training</h3>
            </div>
          </div>

          <div className="text">
            <img
              src={img7}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <div className="content">
              <h3>Coffee Website</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="project-grid">
        {projects.map((x) => (
          <a href={x.url} key={x.id}>
            <span className="bg"></span>
            <img src={x.img} alt="" />
            <h3>{x.text}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
