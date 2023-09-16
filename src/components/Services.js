import React from "react";
import { MdOutlinePhonelink } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";

// import { GrTechnology } from 'react-icons/gr'
// import { GrUserSettings } from 'react-icons/gr'
import "../css/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdOutlinePhonelink />,
      title: "FRONTEND WEB DEVELOPMENT",
      content:
        "I am proficient in front-end web development, utilizing HTML, CSS, Vanilla JavaScript, Bootstrap, Tailwind CSS, Material-UI, React.js, Redux, and SCSS to create responsive and visually engaging websites and applications.",
    },
    {
      id: 2,
      icon: <FiDatabase />,
      title: "BACKEND WEB DEVELOPMENT",
      content:
        "I employ a range of back-end technologies, including Node.js, Express, MongoDB, PHP, MySQL, Python, and Django. These tools facilitate the development of scalable web applications with efficient data management.",
    },
    {
      id: 3,
      icon: <BiWorld />,
      title: "FULL STACK WEB DEVELOPMENT",
      content:
        "I excel in full-stack development, harnessing front-end and back-end expertise to craft holistic web solutions. I create user-friendly, responsive websites, enhancing online presence and driving success for diverse clients.",
    },
    {
      id: 4,
      icon: <AiOutlineYoutube />,
      title: "WEB DEVELOPMENT INSTRUCTOR",
      content:
        "I offer web development education with a focus on HTML, CSS, and JavaScript. My tailored instruction provides practical skills, empowering students for rewarding tech careers and ongoing learning.",
    },
  ];

  return (
    <div className="servicesset-container" id="services">
      <div className="text">
        <h1>Services I Render</h1>
        <p>Here are the services I render</p>
      </div>
      <div className="services-container">
        {services.map((service) => {
          return (
            <div key={service.id}>
              <p className="icons">{service.icon}</p>
              <h4>{service.title}</h4>
              <p>{service.content}</p>
            </div>
          );
        })}
      </div>
      <div className="iframe-box">
        <h3>MY JAVASCRIPT CRASH COURSE</h3>
        <iframe
          width="100%"
          style={{ marginTop: "20px", borderRadius: "10px" }}
          src="https://www.youtube.com/embed/esD38JRk50Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Services;
