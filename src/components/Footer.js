import React from 'react';
import { Button,TextField,Link, Paper, Typography } from '@material-ui/core'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

  import { FiMail,FiInstagram , FiTwitter , FiGithub , FiLinkedin} from "react-icons/fi";

    
const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "white", 
                     textAlign: "center", 
                     marginTop: "-50px",
                      fontFamily:"monospace",
                      userSelect : "none",
                      cursor:"pointer",
                     }}>
          Connect with us 
        </h1>
        <Container>
          <Row>
            <Column>
            <Button variant="text">
              <Heading style={{ color: "white", 
                      userSelect : "none",
                      cursor:"pointer",
                     }}><Typography variant='body2'>Subscribe to our NewsLetter</Typography></Heading>
              </Button>
            </Column>
            <Column>
              <Heading><Typography variant='h5'>Services</Typography></Heading>

              <FooterLink href="#"><Typography variant='overline'>Covid-Stats</Typography></FooterLink>
              <FooterLink href="#"><Typography variant='overline'>Vaccination-Stats</Typography></FooterLink>
              <FooterLink href="#"><Typography variant='overline'>New-Strain</Typography></FooterLink>
              <FooterLink href="#"><Typography variant='overline'>Travelling Details</Typography></FooterLink>
            </Column>
            <Column>
              <Heading style={{ color: "white", 
                      userSelect : "none",
                      cursor:"pointer",
                     }}><Typography variant='h5'>Contact Us</Typography></Heading>
              <FooterLink href="#"><FiMail /> <br /> <Typography variant='overline'>webmaster-mohfw@gov.in

</Typography></FooterLink>
            </Column>
            <Column style={{ color: "white",
                    margin:"50px", 
                     textAlign: "center", 
                      userSelect : "none",
                      cursor:"pointer",
                      display:"flex",
                     }}>
              <FooterLink href="#">
              </FooterLink>
              <FooterLink href="https://www.instagram.com/covidtrackingproject/">
                <FiInstagram /> 
              </FooterLink>
              <FooterLink href="https://twitter.com/COVID19Tracking">
                <FiTwitter />
              </FooterLink>
              <FooterLink href="https://github.com/shreykoradia/DECovidTracker">
                <FiGithub /> 
              </FooterLink>
              <FooterLink href="#">
                <FiLinkedin /> 
              </FooterLink>

            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;
  