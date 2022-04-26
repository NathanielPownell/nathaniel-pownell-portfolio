import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import MenuFrame from './components/menu-wrapper';
import Alienswap from "./components/Alienswap";
import StudyPortfolio from "./components/StudyPortfolio";
import Invstr from "./components/Invstr";
import Estatesio from "./components/estatesio";
import Main from "./components/Main";
import Random from "./components/Random";
import Survey from "./components/Survey";
import Blog from "./components/blog/Blog";
import BlogInfo from "./components/Blog"
import Bankio from "./components/Bankio";


function App() {


  return (
    <div className="App">

      <Router>
          <Routes>

            <Route exact path='/' element={< Main />}></Route>
            <Route exact path='/projects/alienswap' element={< Alienswap />}></Route>
            <Route exact path='/projects/portfolio' element={< StudyPortfolio />}></Route>
            <Route exact path='/projects/invstr' element={< Invstr />}></Route>
            <Route exact path='/projects/estatesio' element={< Estatesio />}></Route>
            <Route exact path='/projects/survhey' element={< Survey />}></Route>
            <Route exact path='/projects/random' element={< Random />}></Route>
            <Route exact path='/projects/bankio' element={< Bankio />}></Route>
            {/* <Route exact path='/projects/blog' element={< BlogInfo />}></Route> */}
            <Route exact path='/blog' element={< Blog />}></Route>
            <Route exact path='/blog/:slug' element={< Blog />}> </Route>
            <Route exact path='/blog/:id' element={< Blog />}> </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
