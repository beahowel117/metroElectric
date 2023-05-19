import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Typography, Button, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";
import BrewLogo2 from "../images/logos/Bew2_logo.png";
import contact from "../images/Contact/contact(2000x1000).jpg";
import "../index.css";
import MainContainer from "./MainContainer";

const Contact = () => {
  const styles = {
    footerLogo: {
      width: '300px',
      height: '57px',
      align: 'center'
     },
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  const navButtons = [
    {
      button: "Home",
      link: "/",
    },
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

  const navButtonsMobile = [
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
  const useMobile = useMediaQuery("(max-width:600px)");

  const addCopyYear = (copyTxt) => {
    let currYr = new Date().getFullYear();
    return copyTxt.replace("{YYYY}", currYr);
  };

  const footerDisclosure = addCopyYear('@Copyright {YYYY} | Metrotek Electrical | All Rights Reserved')

  const location = window.location.pathname;

  return (
    <>
     <Box
      className='image-container'
     >
        <Box className='image-wrap'>
          <img src={contact} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
            className='lineUp'
            fontSize='40px'
            fontWeight='600'
          >
            contact metrotek
          </Typography>
        </Box>

    <MainContainer>
      <Box
        display='flex'
        justifyContent='space-around'
        marginTop={matches? '20px': '50px'}
        flexWrap= {matches ? 'wrap': undefined}
        marginBottom={matches? '25px': '5px'}
      >
         <Box
           order='1'
         >
          <img src={BrewLogo2}
            alt="Footer Logos"
            width='193px'
            height='194px'
            // marginRight='20px'
          />
        </Box>
        <Box
          order={matches ? '1': '2'}
          minWidth={matches ? "100%" : undefined}
          px='15px'
        >
          <Typography
            fontSize='24px'
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
            fontSize='24px'
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
         marginLeft='10px'
        >
          <img src={NECALogo} alt="Footer Logos" />
        </Box>
      </Box>

    <Box
      maxWidth='797px'
      margin='40px auto 0'
      px='20px'
    >
      <Box
        backgroundColor='#244ba6'
        height='14px'
        maxWidth='100%'
        margin='10px auto 0'
        borderRadius='5px'
      />
          <Box
          display='flex'
          justifyContent='center'
          marginTop='20px'
          >
          <NavLink to="/" >
            <img
              src={MetroTekLogo}
              alt="Footer Logo"
              style={styles.footerLogo}
            />
            </NavLink>
          </Box>

    {useMobile ? (
      <>
        <Box
          marginTop='10px'
          display='flex'
          justifyContent='center'
           height='86px'
        >
          {navButtonsMobile.map((el, index) => {
            const isFeaturedWork = el.button === "Feature Work";
            return (
            <Box
              textAlign={isFeaturedWork ? "center" : undefined}
              alignSelf={isFeaturedWork ? "start" : undefined}
            >
              <Button
                  key={index}
                  to={el.link}
                  component={NavLink}
                  sx={{
                  color :'blue'
                  }}
              >
                {el.button}
              </Button>
            </Box>
            );
            })}
        </Box>
      </>
      ):(
      <>
        <Box
          display='flex'
          justifyContent='space-around'
          margin='10px 0 30px'
        >
          {navButtons.map((el, index) => (
              <Button
                  key={index}
                  to={el.link}
                  component={NavLink}
                  sx={{
                  color : el.link === location ? "green" : "black",
                    ":hover":{
                      color:'green'
                    }
                  }}
              >
                {el.button}
              </Button>
            ))}
          </Box>
          </>
       )}

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



      </MainContainer>
    </>
  );
};
export default Contact;
