import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Locations from "./routes/locations/locations.component";

const Menu = () => {
  return <h1>Menu page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/locations" element={<Locations />} />
    </Routes>
  );
};

export default App;
