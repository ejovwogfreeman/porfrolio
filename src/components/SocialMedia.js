import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import '../css/SocialMedia.css'

const SocialMedia = ({color}) => {
  return (
    <div className='social-icons' style={{color: color, borderColor: color}}>
        <a href="#" style={{color: color, borderColor: color}}><AiFillFacebook/></a>
        <a href="#" style={{color: color, borderColor: color}}><AiFillInstagram/></a>
        <a href="#" style={{color: color, borderColor: color}}><FaTwitterSquare/></a>
        <a href="#" style={{color: color, borderColor: color}}><AiFillLinkedin/></a>
        <a href="#" style={{color: color, borderColor: color}}><FaGithubSquare/></a>
    </div>
  )
}

export default SocialMedia