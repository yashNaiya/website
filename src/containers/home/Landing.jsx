import { Box, Typography } from '@mui/material'
import image from '../../Assets/pfp.png'
import React from 'react'
import './styles.css'
import { TypeAnimation } from 'react-type-animation'
const Landing = () => {
    return (
        <Box width={"90%"} height={'100vh'} bgcolor={'secondary.main'}>
            <Box display={'flex'} width='100%' marginTop={'10rem'} position={'absolute'} flexDirection={'row'} height={'fit-content'}>
                <Box width={'100%'} display={'flex'} flexWrap={'wrap'} sx={{flexDirection: 'row' }} id={window.innerWidth>=700?'home':'mobilehome'} paddingY={'35px'}>
                    <Box>
                        <Typography variant='h3' fontWeight={'bold'} color={'secondary.main'}>Hii There!</Typography>
                        <Typography variant='h3' fontWeight={'bold'} color={'secondary.main'}>I'M <span style={{ color: '#F9BE08' }}>YASH NAIYA</span></Typography>
                        <Typography marginTop={'2rem'} fontWeight={'bold'} color={'primary.main'}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Freelancer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Software Developer',
                                    1000,
                                    'MERN Stack Delevpoer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </Typography>
                    </Box>
                    <Box marginLeft={'8rem'} width={'200px'} height={'200px'}>
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                            <path id="blob" d="M424,358Q375,466,264,442Q153,418,117,334Q81,250,126,181Q171,112,263,90.5Q355,69,414,159.5Q473,250,424,358Z" fill="#F9BE08"></path>
                            <image style={{ transform: 'translate(95px,65px)' }} width={'23rem'} height={'23rem'} href={image}></image>
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Landing
