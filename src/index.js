import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Covidstats from "./components/CovidStats/Covidstats";
import Traveldetails from "./components/TravelDetails/Traveldetails";
import Footer from "./components/Footer";
import Review from "./components/Team/Review";

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
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
