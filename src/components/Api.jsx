import React, {useState , useEffect} from 'react'
import { Box ,Paper , Typography } from '@material-ui/core';
import "./api.css"
import axios from 'axios';

function Api() {

  const [randomData , setRandomData] = useState("");
  useEffect(() => {
    fetchRandomData().then(randomData =>{
      setRandomData(randomData || 'No Vaccination Data found ');
    })
    
  }, []);
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
    </Typography >
    </Paper>
    {/* <button onClick={()=>{
      fetchRandomData();
    }}>Vaccination Data</button> */}
    <Typography>
      {randomData}
    </Typography>
    </Box>
    </>
  )
}
const fetchRandomData = () => {
  return axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
  .then(({data}) => {
    //handle success
    console.log(data);
    return JSON.stringify(data);
  })
  .catch(err => {
    //handle error 
    console.log(err);
    return err;
  })
}
export default Api