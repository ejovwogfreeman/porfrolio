import React from 'react'
// import { FaChalkboardTeacher } from 'react-icons/fa'
// import { CgWebsite } from 'react-icons/cg'
// import { MdDeveloperBoard } from 'react-icons/md'
// import { GrCloudSoftware } from 'react-icons/gr'
// import { BsJournalBookmarkFill } from 'react-icons/bs'
// import { GrTechnology } from 'react-icons/gr'
// import { HiOutlineDesktopComputer } from 'react-icons/hi'
// import { MdOutlinePhonelink } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg' 
// import { GrUserSettings } from 'react-icons/gr'
import "../css/Services.css"

const Services = () => {
    const services = [
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
                {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
        },
        {
            id: 1, 
            icon: <CgFileDocument/>, 
            title: 'programming', 
            content: 'into web development'
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
                        <h2>{service.title}</h2>
                        <p>{service.content}</p>
                    </div>
                )
            })}
        </div> 
    </div>
  )
}

export default Services