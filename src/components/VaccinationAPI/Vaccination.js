import React from 'react'
import {Grid , Typography} from "@material-ui/core";

function Vaccination() {
  return (
    <div>
        <Grid container spacing ={3} justifyContent='center'>
          <Grid item>
          <Typography variant="h3">We will be Back Soon</Typography>
          </Grid>  
          <br />
          <br />
          <Grid item>
            <br />
        <Typography variant="h4">
            Our API have been Broken Error 500
        </Typography>
          </Grid>
        </Grid>
    </div>
  )
}

export default Vaccination