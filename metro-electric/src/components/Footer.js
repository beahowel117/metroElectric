import React from 'react';
import { NavLink } from 'react-router-dom';
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
    display='flex'
    justifyContent='center'
    borderTop='5px solid blue'
    width='797px'
    margin='40px auto 0'
   >
    <Box
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
   </Box>
  )
}

export default Footer
