import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App';
import Api from './components/Api';
import Covidstats from './components/CovidStats/Covidstats'
import Covidstrain from './components/CovidStrain/Covidstrain';
import Footer from './components/Footer'
import Support from './components/Support/Support';
import Review from './components/Team/Review' 

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Routes>
      {/* {routes goes here !! } */}
      <Route path="/" exact element={<App />}></Route>
      <Route path="/covid-stats" element={<Covidstats />}></Route>
<<<<<<< HEAD
      <Route path="/team" element={<Footer />}></Route>
      <Route path="/covidstrain" element={<Covidstrain />}></Route>
=======
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/team" element={<Review />}></Route>
      <Route path="/api" element={<Api />}></Route>
      <Route path="/support" element={<Support />}></Route>
>>>>>>> 4a40e17d55555b4b77bc7782fdae689067dc76cd
  </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);

