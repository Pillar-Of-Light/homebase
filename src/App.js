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

// ui
import GlowText from "./components/ui/glow-text";
import GoldDivider from "./components/ui/gold-divider";
import CosmicContainer from "./components/ui/cosmic-container";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* test components here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;