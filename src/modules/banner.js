import './banner.css'

import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/system';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });



function banner() {
    return (
        <div className="banner">
            <div className="banner__info">
             <h1> Try hosting</h1>
             <p>Earn extra income and
                 unlock new <br/> opportunities
                 by sharing your space.<br/>
             </p>
             <BootstrapButton variant="contained" disableRipple>
                <span style={{color:"black"}}>Learn more</span>
            </BootstrapButton>
            </div>
        </div>
    )
}

export default banner 
