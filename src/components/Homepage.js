import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import "./Homepage.css";
import image from "../assets/isaac-smith-6EnTPvPPL6I-unsplash.jpg";
import image2 from "../assets/hakan-nural-YCVUR2JgfHA-unsplash.jpg";
import image3 from "../assets/photo-1569758267239-d08deb78bb1a.jpg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="cards-container">
        <Grid container spacing={3} justifyContent="center">
          <Grid item component={Card} xs={12} md={3} className="card-card">
            <CardMedia
              component="img"
              alt="Covid Graph"
              height={100}
              image={image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="covid-stats"
              >
                Covid Stats
              </Typography>
              <Typography variant="body2" align="justify">
                Shows the Covid-19 Stats of all the countries with Visaulization
                techniques of Graph and slope.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/covid-stats">
                Learn More
              </Button>
            </CardActions>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="card-card">
            <CardMedia
              component="img"
              alt="Vaccination Graph"
              height={100}
              image={image2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vaccination Stats
              </Typography>
              <Typography variant="body2" align="justify">
                Shows the Covid-19 Vaccination Stats of all the countries with
                Visaulization techniques of Graph and slope.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/vaccination-details">
                Learn More
              </Button>
            </CardActions>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="card-card">
            <CardMedia
              component="img"
              alt="Mumbai SKyline"
              height={100}
              image={image3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Travelling Details
              </Typography>
              <Typography variant="body2" align="justify">
                Shows the Various rules and regulation of the Covid Protocol of
                Each countries , which could make your life easy
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/travel-details">
                Learn More
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Homepage;
