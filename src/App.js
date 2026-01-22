import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingMain from './pages/landing';
import AllMusic from './pages/allmusic';
import MoreVisuals from "./pages/morevisuals";
import AllWritings from "./pages/allwritings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/music" element={<AllMusic />} />
        <Route path="/visuals" element={<MoreVisuals />} />
        <Route path="/writings" element={<AllWritings />} />
      </Routes>
    </Router>
  );
}

export default App;