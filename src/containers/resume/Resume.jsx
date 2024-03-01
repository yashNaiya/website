import { Box, Button } from '@mui/material'
import React from 'react'
import pdf from '../../Assets/Resume.pdf'
import jpg from '../../Assets/Resume.jpg'
import page1 from '../../Assets/Resume_page1.jpg'
import page2 from '../../Assets/Resume_page2.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import { Document } from "react-pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const images = [
    { url: page1 },
    { url: page2 }

];
const Resume = () => {
    return (
        <Box bgcolor={'#1d1d1d'} width={'100%'} minHeight={'100vh'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={'10rem'}>
                <Button download href={pdf} variant='contained'>Download Resume</Button>
                <div style={{paddingTop:"5px",paddingBottom:"5px"}}>
                    <SimpleImageSlider
                        width={896}
                        height={1200}
                        images={images}
                        showBullets={true}
                        showNavs={false}
                    />
                </div>
                <Button download href={pdf} variant='contained'>Download Resume</Button>
            </Box>
        </Box>
    )
}

export default Resume
