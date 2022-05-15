import React from 'react'
import { Box ,Paper , Typography } from '@material-ui/core';
import "./api.css"
function Api() {
  return (
    <>   
    <div className='header-name'>
        <Typography align='center' variant='h4'> 
        We are Backed by 
        </Typography>
    </div>
    <br />
    <br />
    <br />
    <Box>
    <Paper variant="elevation" elevation={2}>
    <Typography align='center' variant='h5'> 
    Diseases.sh
    </Typography>
    <Typography align='center' variant='h5'> 
    <a href='www.disease.sh'>API</a>
    </Typography>
    </Paper>
    </Box>
    </>
  )
}

export default Api