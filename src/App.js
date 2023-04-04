import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
// now learning the use effect
import { useEffect } from 'react';
import Home from "./components/Home";
import Error from './components/Error';
import Mail from "./components/Mail";
import Insta from "./components/Insta";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HeadsetSharp } from "@mui/icons-material";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home/> } />
          

          {/* About  */}
          <Route path="/About" element={<About/> } />



          {/* Contact  */}
          <Route path="/Contact" element={<Contact/> }>
           <Route path='insta' element={<Insta/>}/>
           <Route path='mail' element={<Mail/>}/>
          </Route>



          


          <Route path="*" element={<Error/>}/>
          {/* this is for the error page we have made  */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
