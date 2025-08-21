import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from "./Pages/Home";

// products imports
import CogniXcelerate from "./Pages/Products/CogniXcelerate";
import CogniLoom from './Pages/Products/CogniLoom';
import CogniAssist from './Pages/Products/CogniAssist';
import CogniAgent from "./Pages/Products/CogniAgent";

// services Import
import PlatformEngineering from "./Pages/Services/PlatformEngineering"
import AIPoweredSDLC from "./Pages/Services/AIPoweredSDLC"


// loading import
import LoadingPage from "./Components/LoadingPage";
import Solutions from "./Pages/Solutions"

import Footer from './Components/Footer';
import AIPoweredQA from './Pages/Services/AIPoweredQA';



function App() {
  return (
    <Router>
      <Routes>
        {/* Loader route (no header) */}
        <Route path="/" element={<LoadingPage />} />


        {/* All other routes should include Header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <div style={{ paddingTop: '60px' }}>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/cognixcelerate" element={<CogniXcelerate />} />
                  <Route path="/cogniloom" element={<CogniLoom />} />
                  <Route path="/cogniassist" element={<CogniAssist />} />
                  <Route path="/cogniagent" element={<CogniAgent />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path='/platformengineering' element={<PlatformEngineering/>}/>
                  <Route path='/aipoweredsdlc' element={<AIPoweredSDLC/>}/>
                  <Route path='/aipoweredqa' element={<AIPoweredQA/>}/>
                </Routes>
              </div>
              <Footer/>
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
