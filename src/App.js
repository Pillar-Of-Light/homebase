import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingMain from './pages/landing';
import AllMusic from './pages/allmusic';
/* import VisualsPage from './pages/VisualsPage';
import WritingsPage from './pages/WritingsPage'; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/music" element={<AllMusic />} />
        { /* <Route path="/visuals" element={<VisualsPage />} />
        <Route path="/writings" element={<WritingsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;