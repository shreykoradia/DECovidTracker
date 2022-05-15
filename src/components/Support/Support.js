import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {Grid , Typography } from "@material-ui/core";
import Footer from '../Footer'

// npm i @emailjs/browser

const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
        <Grid container spacing ={3} justifyContent='center'>
            <Grid item>
          <Typography variant="h3">Support and Contact</Typography>
          </Grid>  
          <br />
          <br />
          <Grid item>
        <Typography variant="h4">
        Media inquiries
        </Typography>
        <br />
        <Typography>
        If you are a journalist and would like an on-the-record quote for an article or would like to interview someone from The COVID Tracking Project, you can write us at <a href="www.github.com/shreykoradia/DECovidTracker">CovidTracking Project</a>.
        </Typography>
        </Grid>
        </Grid> 
        <br />
        <br />
        <Typography variant="h4">
        General questions and comments 
        </Typography>
        <br />
        <Typography>
        If you have a general question or comment, you can write at <a href="www.github.com/shreykoradia/DECovidTracker">Contact CovidTracking Project</a>..
        </Typography>
        <br />
        <br />
        <Typography variant="h4">
        We are going Open Source Soon !
        </Typography>
        <br />
        <Typography>
       Visit At <a href="www.github.com/shreykoradia/DECovidTracker">Covid Tracking Project</a> for Open Source and Documentation We will Start Opensourcing soon and have various Issue open !
        </Typography> 
        <br />
        <br />
        <Typography variant = "h4">
            Tell us Your Stories or Queries We are collecting
        </Typography>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer />
    </div>
  );
};

export default Support;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;