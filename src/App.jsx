import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CogniXcelerate from "./Pages/CogniXcelerate";
import './App.css'
import Header from './Components/Header';


function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <Router>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cognixcelerate" element={<CogniXcelerate />} />
      </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;

