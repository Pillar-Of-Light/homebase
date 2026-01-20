import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingMain from './pages/landing';
import AllMusic from './pages/allmusic';
import MoreVisuals from "./pages/morevisuals";
/* import VisualsPage from './pages/VisualsPage';
import WritingsPage from './pages/WritingsPage'; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/music" element={<AllMusic />} />
        <Route path="/visuals" element={<MoreVisuals />} />
      </Routes>
    </Router>
  );
}

export default App;