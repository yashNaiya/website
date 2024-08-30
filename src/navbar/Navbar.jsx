import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Dehaze } from '@mui/icons-material'

const Navbar = (props) => {
    return (
        <Box position='fixed' zIndex={'1000'} bgcolor={'#000000'} width={'100%'} height={'6rem'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Box marginLeft={'2rem'}>
                <Typography fontWeight={'bold'} color={'primary.main'} variant='h3'>Yn.</Typography>
            </Box>
            {window.innerWidth >= 700 && 
            <Box display={'flex'} marginRight={'2rem'} width={'50%'} justifyContent={'space-evenly'}>
                <Box className='link'>
                    <Link style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Home</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/about'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>About</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/projects'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Projects</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/resume'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Resume</Typography>
                    </Link>
                </Box>
                <Box className='link'>
                    <Link style={{ textDecoration: 'none' }} onMouseOver={(e) => {
                        e.target.style.cursor = 'pointer'
                    }} to='/contact'>
                        <Typography color={'secondary.main'} fontSize={'22px'}>Contact</Typography>
                    </Link>
                </Box>
            </Box> ||
                <Box marginX={'1rem'}>
                    <IconButton onClick={()=>{props.setdisplay(true)}} size='large'>
                        <Dehaze sx={{ color: '#DFDFD9' }} />
                    </IconButton>
                </Box>}
        </Box>
    )
}

export default Navbar
