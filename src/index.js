import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App';
import Api from './components/Api';
import Covidstats from './components/CovidStats/Covidstats'
import Footer from './components/Footer'
import Support from './components/Support/Support';
import Review from './components/Team/Review' 
import Traveldetails from './components/TravelDetails/Traveldetails'

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* {routes goes here !! } */}
      <Route path="/" exact element={<App />}></Route>
      <Route path="/covid-stats" element={<Covidstats />}></Route>
      <Route path="/travel-details" element={<Traveldetails />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/team" element={<Review />}></Route>
      <Route path="/api" element={<Api />}></Route>
      <Route path="/support" element={<Support />}></Route>
  </Routes> 
  </BrowserRouter>,
  document.getElementById("root")
);
