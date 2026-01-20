import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Landing from "../components/sections/landing";
import Doctrine from "../components/sections/doctrine";
import Music from "../components/sections/music";
import Visuals from "../components/sections/visuals";
import Writings from "../components/sections/writings";
import Communion from "../components/sections/communion";

export default function LandingMain() {
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