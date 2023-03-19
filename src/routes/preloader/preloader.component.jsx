import "./preloader.styles.scss";
import React, { useState, useEffect } from "react";

const Preloader = ({ progress }) => {
  return (
    <div className="preloader-component">
      <p>Loading {progress}%</p>
    </div>
  );
};

export default Preloader;
