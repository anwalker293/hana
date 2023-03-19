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
        position: "relative",
        zIndex: 1, // set the z-index to a lower value than the parallax components
      }}
    >
      <Home />
    </div>
  );
};

const ParallaxComponent = ({ speed, zIndex }) => {
  return (
    <ParallaxLayer speed={speed} offset={0.7} style={{ zIndex }}>
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
      <Parallax
        pages={3}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 2,
        }}
      >
        <ParallaxComponent speed={0.5} zIndex={3} />
      </Parallax>
      <MainComponent />
    </div>
  );
};

export default App;
