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
import Box from "@mui/material/Box";

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
      </Routes>
    </Box>
  );
}

export default App;
