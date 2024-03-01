import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { Close } from '@mui/icons-material'
const NavBox = (props) => {
    return (
        <Box id='box' position='fixed' sx={{display:{xs:'block',mid:'none'}}} width={'100%'} maxHeight={'100vh'} minHeight={'100vh'} zIndex={'1000'} bgcolor={'#1d1d1d'} >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} padding={'2rem'}>
                <IconButton id='closebutton' onClick={()=>{props.setdisplay(false)}} sx={{ backgroundColor: '#F9BE08' }}><Close /></IconButton>
            </Box>
            <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Box className='link'>
                    <Link onClick={()=>{props.setdisplay(false)}} style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Home</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link onClick={()=>{props.setdisplay(false)}} style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/about'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>About</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link onClick={()=>{props.setdisplay(false)}} style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/projects'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Projects</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link onClick={()=>{props.setdisplay(false)}} style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/resume'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Resume</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link onClick={()=>{props.setdisplay(false)}} style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/contact'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Contact</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default NavBox
