import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Typography, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
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
    navLink: {
      fontSize: '16px',
      color: 'black',
      "&:hover":{
        color:'green'
      }
    },
    active: {
      color: 'green'
    }
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
  const matches = useMediaQuery('(max-width:600px)');

  const addCopyYear = (copyTxt) => {
    let currYr = new Date().getFullYear();
    return copyTxt.replace("{YYYY}", currYr);
  };
  const footerDisclosure = addCopyYear('@Copyright {YYYY} | Metrotek Electrical | All Rights Reserved')
  const [isClicked, setIsClicked] = useState(2);
  const handleClick = (index) => {
    console.log('idex', index)
    setIsClicked(index)
  }
  const buttonColor = isClicked === true ? 'green' : 'black'
  const location = window.location.pathname;
  console.log('location', location)
  console.log('nav', navButtons[0].link)
  const currentTab = location === navButtons[0].link ? styles.active : styles.navLink

  return (
   <Box
    borderTop='14px solid blue'
    maxWidth='797px'
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
        {navButtons.map((el, index) => (
          <Button
              key={index}
              to={el.link}
              component={Link}
             // sx={currentTab}
              onClick={() => handleClick(index)}
              activeClassName={styles.active}
              sx={{
               color : isClicked === index ? "green" : "black",
                ":hover":{
                  color:'green'
                }
              }}
          >
            {console.log(isClicked, index)}
            {el.button}
          </Button>
        ))}
      </Box>
      <Box
        display='flex'
        justifyContent='space-around'
        marginTop={matches ? '20px' : '50px'}
        flexWrap= {matches ? 'wrap': undefined}
        marginBottom={matches? '25px': '5px'}
      >
         <Box
           order='1'
         >
          <img src={BrewLogo}
            alt="Footer Logos"
            width='193px'
            height='194px'
          />
        </Box>
        <Box
          order={matches ? '1': '2'}
        >
          <Typography
            fontSize='16px'
            textAlign='center'
          >
            MetroTek Electrical Services Company
             <br></br>
             2200 Northwood Avenue, Unit 2
             <br></br>
             Easton, PA 18045
          </Typography>
            <br></br>
          <Typography
            fontSize='16px'
            textAlign='center'
          >
           EMERGENCY - 888.249.4684
            <br></br>
           OFFICE - 610.365.2390
            <br></br>
           operations@metroelectrical.com
          </Typography>
        </Box>
        <Box
         order={matches ? '2': '3'}
         marginTop='25px'
        >
          <img src={NECALogo} alt="Footer Logos"/>
        </Box>
      </Box>

      <Box>
        <Typography
          textAlign='center'
          marginBottom='10px'
          fontSize='11px'
          color='#496079'
        >
           {footerDisclosure}
        </Typography>
      </Box>
   </Box>
  )
}

export default Footer
