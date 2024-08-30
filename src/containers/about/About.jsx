import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import { ArrowRight } from '@mui/icons-material'

const About = () => {
  return (
    <Box display={'flex'} paddingY={'10rem'} flexDirection={'column'} alignItems={'center'} width={'100%'} minHeight={'100vh'} bgcolor={'#000000'}>
      <Box sx={{ marginX: '4rem', width: { xs: '60%', mid: '40%' } }}>
        <Typography fontWeight={'bold'} variant='h3' color={'secondary.main'}>About <span style={{ color: '#F9BE08' }}>Me.</span></Typography>
        <Typography fontSize={'20px'} variant='h6' color={'secondary.main'}>Hi Everyone,I am <span style={{ color: '#F9BE08' }}>Yash Naiya</span> from <span style={{ color: '#F9BE08' }}>Gujarat,India.</span></Typography>
        <Typography fontSize={'20px'} variant='h6' color={'secondary.main'}>Graduate Computer Engineer with experience in building Web applications using different
          technologies. Skilled in working with HTML, CSS, React Js, JavaScript and eager to learn new
          technology based on what work demands. I am currently working as <span style={{ color: '#F9BE08' }}>freelancer</span>.</Typography>
          <Typography marginTop={'2rem'} fontSize={'20px'} variant='h6' color={'secondary.main'}>
            Apart from coding, Here are some other things I like to do.
          </Typography>
          <Box marginTop={'1rem'} marginLeft={'3rem'} >
            <Typography display={'flex'} alignItems={'center'} fontSize={'20px'} variant='h6' color={'secondary.main'}><ArrowRight/>Music</Typography>
            <Typography display={'flex'} alignItems={'center'} fontSize={'20px'} variant='h6' color={'secondary.main'}><ArrowRight/>Reading</Typography>
            <Typography display={'flex'} alignItems={'center'} fontSize={'20px'} variant='h6' color={'secondary.main'}><ArrowRight/>Travelling</Typography>
          </Box>
      </Box>
      <Box id={window.innerWidth >= 700 ? 'skills' : 'mobileskills'} marginY={'10rem'} >
        <Typography fontWeight={'bold'} variant='h3' color={'secondary.main'}>Professional <span style={{ color: '#F9BE08' }}>Skills.</span></Typography>
        <Box>
          <Box>
            <Button className='skill' disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >ReactJs</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >NodeJs</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >JavaScript</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >HTML</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >MongoDB</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >CSS</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >SQL</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >PHP</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >Java</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >C++</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >C</Button>
            <Button disableRipple sx={{ ":hover": { backgroundColor: 'transparent', color: '#F9BE08', cursor: 'auto' }, fontSize: '20px', borderRadius: '1rem', margin: '2rem' }} variant='contained' >Python</Button>
          </Box>
        </Box>
      </Box>
      <Box width={'90%'} marginX={'4rem'} marginTop={'3rem'}>
        <Typography fontWeight={'bold'} variant='h3' color={'secondary.main'}>Personal <span style={{ color: '#F9BE08' }}>Information.</span></Typography>
        <Box height={'15rem'} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} marginY={'2rem'}>
          <Typography variant='h6' color={'secondary.main'}><span className='data'>Name</span><span> : Yash Naiya</span></Typography>
          <Typography variant='h6' color={'secondary.main'}><span className='data'>Age</span> : <span>21</span></Typography>
          <Typography variant='h6' color={'secondary.main'}><span className='data'>Adress</span> : <span>Gujarat, India</span></Typography>
          <Typography variant='h6' color={'secondary.main'}><span className='data'>Email</span> : <span>yashnaiya16@gmail.com</span></Typography>
          <Typography variant='h6' color={'secondary.main'}><span className='data'>Contact</span> : <span>+91 9081819007</span></Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About
