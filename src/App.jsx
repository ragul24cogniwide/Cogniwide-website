import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
<<<<<<< HEAD
import CogniXcelerate from "./Pages/CogniXcelerate";
import './App.css'
=======
import Header from './Components/Header';
import './App.css';
>>>>>>> aa0ac2cdb10781cd9094f7f7f987d51183da5ede

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

