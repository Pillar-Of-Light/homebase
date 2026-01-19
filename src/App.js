import React from "react";

// layout
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

// sections
import Landing from "./components/sections/landing";
import Doctrine from "./components/sections/doctrine";
import Music from "./components/sections/music";
import Visuals from "./components/sections/visuals";
import Writings from "./components/sections/writings";
import Communion from "./components/sections/communion";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Landing />
        <Doctrine />
        <Music />
        <Visuals />
        <Writings />
        <Communion />
      </main>

      <Footer />
    </div>
  );
}

export default App;