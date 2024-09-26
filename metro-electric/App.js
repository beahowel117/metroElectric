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
import EnergyStorage from "./components/EnergyStorage";
import TerminationSplice from "./src/components/TerminationSplice";
import EmergencyResponse from "./components/EmergencyResponse";
import PortfolioRenewable from "./components/PortfolioRenewable";
import PortfolioCEA from "./components/PortfolioCEA";
import PortfolioOverHeadConstruction from "./components/PortfolioOverHeadConstruction";
import PortfolioTransformer from "./components/PortfolioTransformer";
import PortfolioStormRestoration from "./components/PortfolioStormRestoration";
import ScrollToTop from "./components/ScrollToTop";
import TermsWorkPDF from "./components/pdf/TermsWorkPDF";
import TermsSalesPDF from "./components/pdf/TermsSalesPDF";
import Terms from "./components/pdf/Terms";
function App() {
  let location = useLocation();

  return (
    <>
      <Box>
        {location.pathname === "/terms" || location.pathname === "/items/equipsales" ||
        location.pathname === "/items/work" ? null : (
          <Nav />
        )}

        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/work' exact element={<FeaturedWork />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route
            path='/services/termination-splicing'
            exact
            element={<TerminationSplice />}
          />
          <Route
            path='/services/energy-storage'
            exact
            element={<EnergyStorage />}
          />
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
          <Route path='/items/work' exact element={<TermsWorkPDF />} />
          <Route path='/items/equipsales' exact element={<TermsSalesPDF />} />
          <Route path='/terms' exact element={<Terms />} />
        </Routes>
        {location.pathname === "/terms" || location.pathname === "/items/equipsales" ||
        location.pathname === "/items/work" ||
        location.pathname === "/contact" ? null : (
          <Footer />
        )}
      </Box>
    </>
  );
}

export default App;
