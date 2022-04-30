import React from 'react'
import './helpguide.css'
import {Button} from "@material-ui/core"
import image from '../assets/strain.jpg'
import image2 from '../assets/precaution.jpg'
import image3 from '../assets/support.jpg'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import {Link} from 'react-router-dom'
>>>>>>> 4a40e17d55555b4b77bc7782fdae689067dc76cd
function Helpguide() {
  return (
    <div className="h-container">
        <div className="helpguide">Your help guide to fight Covid-19</div>
      
        <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={image} class="img-fluid1" alt=""/>
            </div>
            <div class="col textblock1">
                <div class="card-block px-2">
                    
                    <p class="card-text">Find more about the new strain</p>
                    <Button component={Link} to ="/covidstrain" variant="text">LEARN MORE</Button>
                </div>

            </div>
        </div>
  </div>
  <hr class="hr"/>
  <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={image2} class="img-fluid2" alt=""/>
            </div>
            <div class="col textblock2">
                <div class="card-block px-2">
                    
                    <p class="card-text text2">precaution measures to fight against covid-19</p>
                    <Button href="#" variant="text">LEARN MORE</Button>
                </div>

            </div>
        </div>
  </div>
  <hr class="hr"/>
  <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={image3} class="img-fluid3" alt=""/>
            </div>
            <div class="col textblock3">
                <div class="card-block px-2">
                    
                    <p class="card-text">covid support and help</p>
                    <Button href="#" variant="text"component={Link} to ="/support" >LEARN MORE</Button>
                </div>

            </div>
        </div>
  </div>
    </div> 
  )
}

export default Helpguide