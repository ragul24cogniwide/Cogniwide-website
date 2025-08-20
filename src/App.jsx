import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import Home from "./Pages/Home";

// products imports
import CogniXcelerate from "./Pages/Products/CogniXcelerate";
import CogniLoom from './Pages/Products/CogniLoom';
import CogniAssist from './Pages/Products/CogniAssist';
import CogniAgent from "./Pages/Products/CogniAgent"

import Solutions from "./Pages/Solutions"


function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <Router>
          <Routes>
        <Route path="/" element={<Home />} />

        {/* Products routes */}
        <Route path="/cognixcelerate" element={<CogniXcelerate />} />
        <Route path='/cogniloom' element={<CogniLoom/>}/>

        <Route path="/solutions" element={<Solutions/>}/>
        <Route path='/cogniassist' element={<CogniAssist/>}/>
        <Route path='/cogniagent' element={<CogniAgent/>}/>
      </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;

