// src\App.js
import React from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import bgImage from './assets/bg.png';
import axios from 'axios';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Hero />
      <div className="mainContainer" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
