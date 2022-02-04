import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import MenuFrame from './components/menu-wrapper';
import Loading from "./components/Loading";
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Alienswap from "./components/Alienswap";
import StudyPortfolio from "./components/StudyPortfolio";
import Invstr from "./components/Invstr";
import Estatesio from "./components/estatesio";
import Main from "./components/Main";
import Random from "./components/Random";
import Survey from "./components/Survey";



function App() {


  return (
    <div className="App">

      <Router>
          <MenuFrame>
            <Routes>
              
              <Route exact path='/' element={< Main />}></Route>
              <Route exact path='/projects/alienswap' element={< Alienswap />}></Route>
              <Route exact path='/projects/portfolio' element={< StudyPortfolio />}></Route>
              <Route exact path='/projects/invstr' element={< Invstr />}></Route>
              <Route exact path='/projects/estatesio' element={< Estatesio />}></Route>
              <Route exact path='/projects/survhey' element={< Survey />}></Route>
              <Route exact path='/projects/random' element={< Random />}></Route>
            </Routes>
          </MenuFrame>
      </Router>
    </div>
  );
}

export default App;
