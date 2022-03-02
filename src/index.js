import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App';
import Covidstats from './components/CovidStats/Covidstats'
import Footer from './components/Footer'


ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Routes>
      {/* {routes goes here !! } */}
      <Route path="/" exact element={<App />}></Route>
      <Route path="/covid-stats" element={<Covidstats />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
  </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);

