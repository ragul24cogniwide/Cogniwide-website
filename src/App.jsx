import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header';

import Home from "./Pages/Home";
import CogniXcelerate from "./Pages/Products/CogniXcelerate";
import CogniLoom from './Pages/Products/CogniLoom';

import Solutions from "./Pages/Solutions"


function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <Router>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cognixcelerate" element={<CogniXcelerate />} />
        <Route path='/cogniloom' element={<CogniLoom/>}/>
        <Route path="/solutions" element={<Solutions/>/>}
      </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;

