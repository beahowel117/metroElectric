import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Box from "@mui/material/Box";
// import { ThemeProvider } from "@material-ui/styles";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
import PortfolioRenewable from "./components/PortfolioRenewable";
import PortfolioCEA from "./components/PortfolioCEA";
import PortfolioOverHeadConstruction from "./components/PortfolioOverHeadConstruction";
import PortfolioTransformer from "./components/PortfolioTransformer";
import PortfolioStormRestoration from "./components/PortfolioStormRestoration";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  let location = useLocation();

  return (
    <>
      <Box>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/work' exact element={<FeaturedWork />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route
            path='/services/power-infrastructure'
            exact
            element={<PowerInfrastructure />}
          />
          <Route
            path='/services/testing-maintenance'
            exact
            element={<TestingMaintenance />}
          />
          <Route
            path='/services/renewable-energy'
            exact
            element={<RenewableEnergy />}
          />
          <Route
            path='/services/emergency-response'
            exact
            element={<EmergencyResponse />}
          />
          <Route
            path='/services/controlled-environment-agriculture'
            exact
            element={<ControlledAgriculture />}
          />

          <Route
            path='/portfolio-items/overhead-construction'
            exact
            element={<PortfolioOverHeadConstruction />}
          />
          <Route
            path='/portfolio-items/transformer'
            exact
            element={<PortfolioTransformer />}
          />
          <Route
            path='/portfolio-items/controlled-environment-agriculture'
            exact
            element={<PortfolioCEA />}
          />
          <Route
            path='/portfolio-items/renewable'
            exact
            element={<PortfolioRenewable />}
          />
          <Route
            path='/portfolio-items/storm'
            exact
            element={<PortfolioStormRestoration />}
          />
           <Route
            path='/items/work'
            exact
          />
           <Route
            path='/items/equipsales'
            exact
          />
        </Routes>
        {location.pathname !== "/contact"  && <Footer />}
      </Box>
    </>
  );
}

export default App;
