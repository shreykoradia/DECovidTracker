import React from 'react';
import { Link, Paper, Typography } from '@material-ui/core'
import  './footer.css'

function Footer() {
  return (
  
        <>
            <div className='container'>
                <div className='footer-container'>
                    <Paper elevation={0}>
                        <Typography align='justify' variant='overline' paragraph={true} noWrap={false} >
                            The core Team who have build this Web-Application : 
                            Shrey Koradia's <Link href='https://github.com/shreykoradia'>GitHub</Link> 
                        </Typography>
                    </Paper>
                </div>      
            </div>

        </>
    
    );
}

export default Footer;


