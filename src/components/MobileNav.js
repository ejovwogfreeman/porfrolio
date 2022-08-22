import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { MdPermContactCalendar } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { MdComputer } from 'react-icons/md'
import SocialMedia from './SocialMedia'
import '../css/Navbar.css';

const MobileNav = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)}>
            <AiOutlineMenu style={{color: 'black', fontSize:'30px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon'>
                <AiOutlineClose onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'>
                <Typography variant='h6' component='div'>
                    <li className='li'><a href="#about" onClick={()=> setOpenDrawer(false)}><MdPermContactCalendar  style={{marginRight: '10px'}}/>About Me</a></li>
                    <li className='li'><a href="#services" onClick={()=> setOpenDrawer(false)}><MdOutlineMiscellaneousServices style={{marginRight: '10px'}}/>Services</a></li>
                    <li className='li'><a href="#projects" onClick={()=> setOpenDrawer(false)}><MdComputer style={{marginRight: '10px'}}/>Projects</a></li>
                    <li className='li'><a href="#contact" onClick={()=> setOpenDrawer(false)}><BsTelephone style={{marginRight: '10px'}}/>Contact Me</a></li>
                    <li className='li'><SocialMedia color="#2351DC"/></li>
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MobileNav


