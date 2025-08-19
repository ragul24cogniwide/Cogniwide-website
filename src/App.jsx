import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <Router>
          <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;

