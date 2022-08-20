import React from 'react'
import { FaPhp, FaWordpress, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoJavascript, IoLogoPython } from "react-icons/io"
import { TiVendorMicrosoft } from "react-icons/ti"
import { SiCss3 } from "react-icons/si"
import Progress from './Progress'
import "../css/Skills.css"


const Skills = () => {
  return (
    <div className='skillset-container'>
      <div className="text">
        <h1>My Skills</h1>
        <p>Here are a few skills I possess</p>
      </div>
      <div className="skill-container">
      <div className='skill-range'>
        <FaHtml5 className='icon'/>
        <div className='skill'>
          <p>HTML</p>
          <Progress completed={90}/>
        </div>
      </div>
      <div className='skill-range'>
        <SiCss3 className='icon'/>
        <div className='skill'>
          <p>CSS</p>
          <Progress completed={85}/>
        </div>
      </div>
      <div className='skill-range'>
        <IoLogoJavascript className='icon'/>
        <div className='skill'>
          <p>JAVASCRIPT</p>
          <Progress completed={80}/>
        </div>
      </div>
      <div className='skill-range'>
        <FaReact className='icon'/>
        <div className='skill'>
          <p>REACT JS</p>
          <Progress completed={93}/>
        </div>
      </div>
      <div className='skill-range'>
        <IoLogoPython className='icon'/>
        <div className='skill'>
          <p>PYTHON</p>
          <Progress completed={77}/>
        </div>
      </div>
      <div className='skill-range'>
        <FaPhp className='icon'/>
        <div className='skill'>
          <p>PHP</p>
          <Progress completed={70}/>
        </div>
      </div>
      <div className='skill-range'>
        <FaWordpress className='icon'/>
        <div className='skill'>
          <p>WORDPRESS</p>
          <Progress completed={75}/>
        </div>
      </div>
      <div className='skill-range'>
        <TiVendorMicrosoft className='icon'/>
        <div className='skill'>
          <p>MICROSOFT OFFICE</p>
          <Progress completed={87}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills