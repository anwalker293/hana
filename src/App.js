import React, { useEffect } from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Locations from "./routes/locations/locations.component";

const MainComponent = () => {
  return (
    <div
      className="main-component"
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        zIndex: 1, // set the z-index to a higher value than the Parallax components
      }}
    >
      <Home />
    </div>
  );
};

const ParallaxComponent = ({ speed, zIndex }) => {
  return (
    <ParallaxLayer speed={speed} offset={1} style={{ zIndex: 2 }}>
      <div>
        <Locations />
      </div>
    </ParallaxLayer>
  );
};

const App = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <MainComponent />
    </div>
  );
};

export default App;
