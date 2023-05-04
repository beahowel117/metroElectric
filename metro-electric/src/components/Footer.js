import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Typography, Box } from "@mui/material";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";
import BrewLogo from "../images/logos/bew_logo.jpg";


function Footer() {
  const styles = {
    footerLogo: {
     width: '300px',
     height: '57px',
     align: 'center'
    },
  };
  return (
   <Box
    borderTop='5px solid blue'
    width='797px'
    margin='40px auto 0'
   >
    <Box
      display='flex'
      justifyContent='center'
      paddingTop='8px'
    >
      <NavLink
        to="/"
      >
        <a href=" " className="footer-logo">
         <img src={MetroTekLogo} alt="Footer Logo" style={styles.footerLogo}/>
        </a>
      </NavLink>
    </Box>
      <Box
        display='flex'
        justifyContent='space-around'
      >
        <Link
          to="/"
          style={{textDecoration: "none", color: "black"}}
        >HOME</Link>
         <Link
          style={{textDecoration: "none", color: "black"}}
          to="/services"
          >SERVICES</Link>
        <Link
          to="/work"
        >FEATURED WORK</Link>
        <Link
          to="/about"
        >ABOUT</Link>
        <Link
          to="/contact"
        >CONTACT</Link>
      </Box>
   </Box>
  )
}

export default Footer
