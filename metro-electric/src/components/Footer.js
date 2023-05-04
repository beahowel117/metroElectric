import React, { useState } from 'react';
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

  const navButtons = [
    {
      button: "Services",
      link: "/services",
    },
    {
      button: "Featured Work",
      link: "/work",
    },
    {
      button: "About",
      link: "/about",
    },
    {
      button: "Contact",
      link: "/contact",
    },
  ];
  const [isHover, setIsHover] = useState(false)
  return (
   <Box
    borderTop='14px solid blue'
    width='797px'
    margin='40px auto 0'
   >
    <Box
      display='flex'
      justifyContent='center'
      marginTop='20px'
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
        marginTop='50px'
      >
      {navButtons.map(({button, link}) => (
        <Button
          to={link}
          component={Link}
          sx={{
            color: isHover ? 'green':'black',
            fontSize: '16px'
          }}
        >
          {button}
        </Button>
      ))}
      </Box>
      <Box
      display='flex'
      justifyContent='space-around'
      marginTop='50px'
      >
        <Box
          order='1'
        >
          <img src={BrewLogo}
          alt="Footer Logos"
          width='193px'
          height='194px'/
          >
        </Box>
        <Box
          order='2'
        >
          <Typography>
            MetroTek Electrical Services Company
            <br></br>
            2200 Northwood Avenue, Unit 2
            <br></br>
            Easton, PA 18045
          </Typography>
          <br></br>
          <Typography>
            EMERGENCY - 888.249.4684
            <br></br>
            OFFICE - 610.365.2390
            <br></br>
            operations@metroelectrical.com
          </Typography>
        </Box>
        <Box
          order='3'
        >
          <img src={NECALogo} alt="Footer Logos"/>
        </Box>
      </Box>
   </Box>
  )
}

export default Footer
