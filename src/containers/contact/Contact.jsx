import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mrgrqoyk");
    if (state.succeeded) {
        window.location.reload()
    }
    return (
        <Box width={'100%'} paddingTop={'10rem'} minHeight={'100vh'} bgcolor={'#000000'}>
            <Box id='contact'>
                <Typography fontWeight={'bold'} variant='h3' color={'secondary.main'}>Let's<span style={{ color: '#F9BE08' }}> Talk.</span></Typography>
                <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'center'}>
                    <form onSubmit={handleSubmit} id="my-form">
                        <TextField
                            variant='outlined'
                            id="email"
                            fullWidth
                            placeholder='email'
                            sx={{ input: { color: '#DFDFD9' } ,border:'1px solid #F9BE08' }}
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <TextField
                            variant='outlined'
                            id="message"
                            fullWidth
                            // multiline = {true}
                            // rows={5}
                            placeholder='message'
                            name="message"
                            sx={{input: { color: '#DFDFD9 ' },border:'1px solid #F9BE08' }} 
                            />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <Button variant='contained' type="submit" disabled={state.submitting}>
                            Submit
                        </Button>
                    </form>
                </Box>
                <div id="status"></div>
            </Box>
        </Box>
    )
}

export default Contact
