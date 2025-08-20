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

// loading import
import LoadingPage from "./Components/LoadingPage";

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
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
