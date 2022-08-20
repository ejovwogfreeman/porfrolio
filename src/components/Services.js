import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { MdDeveloperBoard } from 'react-icons/md'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { MdOutlinePhonelink } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg' 
// import { GrTechnology } from 'react-icons/gr'
// import { GrUserSettings } from 'react-icons/gr'
import "../css/Services.css"

const Services = () => {
    const services = [
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'Docs online', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <CgWebsite/>, 
            title: 'Web design', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <MdOutlinePhonelink/>, 
            title: 'Cloud computing', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <BsJournalBookmarkFill/>, 
            title: 'Blog websites', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <MdOutlinePhonelink />, 
            title: 'Email marketing', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
                {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'Word processing', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <FaChalkboardTeacher/>, 
            title: 'School management system', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <MdOutlinePhonelink />, 
            title: 'Email and sms marketing', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <HiOutlineDesktopComputer/>, 
            title: 'Computer sales and repair', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <MdOutlinePhonelink />, 
            title: 'Tech projects', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <MdDeveloperBoard/>, 
            title: 'School project', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
        {
            id: 1, 
            icon: <FaChalkboardTeacher/>, 
            title: 'Web development training', 
            content: 'Lorem insum dolor sit amet. the house of gb is the best place to be.'
        },
    ]

  return (
    <div className="servicesset-container" id="services">
        <div className="text">
            <h1>Services I Render</h1>
            <p>Here are the services I render</p>
        </div>
        <div className="services-container">
            {services.map(service=> {
                return (
                    <div key={service.id}>
                        <p className='icons'>{service.icon}</p>
                        <h3>{service.title}</h3>
                        <p>{service.content}</p>
                    </div>
                )
            })}
        </div> 
    </div>
  )
}

export default Services