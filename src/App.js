import React from 'react';
import {Box, WorldMap} from 'grommet';
import {Container, Typography} from '@material-ui/core'
import Homepage from './components/Homepage';
import Footer from './components/Footer'
// import { DistortionText } from 'react-text-fun'
import './App.css'
import Navbar from './components/Navbar';


function App() {
  return (
            <>
                <div className='container'>
                <div className='Header-Name'>   
                <Typography align='justify' gutterBottom={false} variant='h4'> Covid-Tracker</Typography>
                {/* <DistortionText
                  text = "Covid-Tracker"
                  speed={1.5}
                  rotation={45.0}
                  distortX={4.9}
                  distortY={6.5}
                  noiseAmplitude={0.8}
                  noiseVolatility={1.2}
                  fontSize={120}
                /> */}
                <div className='navbar'><Navbar /></div>
                </div>
                <div className='containerWorldMap'>
                <Box
                alignContent='start'
                align="center" 
                pad="small" 
                responsive={true}
                style={
                    {
                        width:'80rem',
                        height:'20rem'
                    }
                }
                >
                <WorldMap color="#A020F0" />
                </Box>
                <Container maxWidth='sm'>
                <Typography align='justify' variant='overline' paragraph={true} noWrap={false}>A Covid Tracker built by developers based out of India For the People of India , 
                A vision to prevent and make India free from covid uptill 2023 , We currently Provide Vaccination Details, Vaccination Slot-Details
                new covid Strain Details, precaution for Preventing the Covid and also Health Advisory from Various API's, Traveling Details etc
                and adding More features Soon , stay tuned !
                </Typography>
                </Container>
                </div>
                </div>

                {/* Here we go for the slecetion of routes On Homepage component cards for COvid stats and also Vaccination details */}
                <div className='second-container'>
                <Homepage />
                </div>
                {/* {rest of the components goes here !!} */}
                <Footer />

            </>
  );
}

export default App;
