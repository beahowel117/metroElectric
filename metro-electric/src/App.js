import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import FeaturedWork from "./components/FeaturedWork";
import About from "./components/About";
import Services from "./components/Services";
import RenewableEnergy from "./components/RenewableEnergy";
import ControlledAgriculture from "./components/ControlledAgriculture";
import PowerInfrastructure from "./components/PowerInfrastructure";
import TestingMaintenance from "./components/TestingMaintenance";
import EmergencyResponse from "./components/EmergencyResponse";

import Box from "@mui/material/Box";
// import { ThemeProvider } from "@emotion/react";

// const theme = {
//   colors: {
//     primary:'#244ba6',

//   }
// };

function App() {
  return (
      <Box>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/work' exact element={<FeaturedWork />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/services/power-infrastructure' exact element={<PowerInfrastructure />} />
          <Route path='/services/testing-maintenance' exact element={<TestingMaintenance />} />
          <Route path='/services/renewable-energy' exact element={<RenewableEnergy />} />
          <Route path='/services/emergency-response' exact element={<EmergencyResponse />} />
          <Route path='/services/controlled-environment-agriculture' exact element={<ControlledAgriculture />} />
        </Routes>
      </Box>
  );
}

export default App;
