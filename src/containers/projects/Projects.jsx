import React from 'react'
import './styles.css'
import { Box, Button, Typography } from '@mui/material'
import data from './utils'
const Projects = () => {
    return (
        <Box width={'100%'} paddingY={'10rem'} minHeight={'100vh'} bgcolor={'#000000'}>
            <Box id='projects'>
                <Typography fontWeight={'bold'} variant='h3' color={'secondary.main'}>My<span style={{ color: '#F9BE08' }}> Work.</span></Typography>
                <Box id='cards'>
                    {
                        data.projects.map((item, i) => (
                            <Box className='card'>
                                <Box className='card__image'>
                                    <img width={'270px'} src={item.image}></img>
                                </Box>
                                <Typography textAlign={'center'} variant='h6'>{item.name}</Typography>
                                <Box className='card__desc'>
                                    <Typography>{item.desc}</Typography>
                                </Box>
                                <Box>
                                    <Button href={item.link} target='_blank' sx={{backgroundColor:'#1d1d1d',color:'#F9BE08', ":hover":{backgroundColor:'#1A1A19'}}} variant='contained'>github</Button>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Projects
