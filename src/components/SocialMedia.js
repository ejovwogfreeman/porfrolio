import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import '../css/SocialMedia.css'

const SocialMedia = ({color}) => {
  return (
    <div className='social-icons' style={{color: color, borderColor: color}}>
        <a href="#contact" style={{color: color, borderColor: color}}><AiFillFacebook/></a>
        <a href="#contact" style={{color: color, borderColor: color}}><AiFillInstagram/></a>
        <a href="#contact" style={{color: color, borderColor: color}}><FaTwitterSquare/></a>
        <a href="#contact" style={{color: color, borderColor: color}}><AiFillLinkedin/></a>
        <a href="#contact" style={{color: color, borderColor: color}}><FaGithubSquare/></a>
    </div>
  )
}

export default SocialMedia