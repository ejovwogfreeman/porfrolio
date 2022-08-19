import React from 'react'
import SocialMedia from "./SocialMedia"
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import "../css/Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="text">
                <h1>Get In Touch</h1>
                <p>Get in touch with me through my social media handles below.</p>
                <SocialMedia color="#2351DC"/>
                <div className="reach">
                    <HiOutlineMail className='icon'/>
                    <div className="touch">
                        <p>ejovwogfreeman007@gmail.com</p>
                        <small>Send a message Anytime!</small>
                    </div>
                </div>
                <div className="reach">
                    <BsTelephone className='icon'/>
                    <div className="touch">
                        <p>+234(0)816 447 1007</p>
                        <small>Place a call Anttime!</small>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <form action="">
                    <h3>Need My Service?</h3>
                    <h2>Send a Message</h2>
                    <input type="text" placeholder='Enter Fullname'/>
                    <input type="email" placeholder='Enter Email Address'/>
                    <textarea name="" id="" placeholder='Type A Message'></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
      )
    }
    
export default Contact;