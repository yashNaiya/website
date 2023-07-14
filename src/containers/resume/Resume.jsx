import { Box, Button } from '@mui/material'
import React from 'react'
import pdf from '../../Assets/Resume.pdf'
import jpg from '../../Assets/Resume.jpg'
import { Document } from "react-pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const Resume = () => {
    return (
        <Box bgcolor={'#1d1d1d'} width={'100%'} minHeight={'100vh'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={'10rem'}>
                <Button download href={pdf} variant='contained'>Download Resume</Button>
                <img style={{marginTop:'3rem', marginBottom:'3rem'}} src={jpg} width={'70%'} height={'auto'}></img>
                <Button download href={pdf} variant='contained'>Download Resume</Button>
            </Box>
        </Box>
    )
}

export default Resume
