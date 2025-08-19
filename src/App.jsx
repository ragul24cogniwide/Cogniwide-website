import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CogniXcelerate from "./Pages/CogniXcelerate";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cognixcelerate" element={<CogniXcelerate />} />
      </Routes>
    </Router>
  )
}


export default App
