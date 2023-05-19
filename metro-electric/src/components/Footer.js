import React, { useState } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";

import BrewLogo2 from "../images/logos/Bew2_logo.png";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  const styles = {
    footerLogo: {
      width: "300px",
      height: "57px",
      align: "center",
    },
    navLink: {
      fontSize: "16px",
      color: "black",
      "&:hover": {
        color: "green",
      },
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
  const useMobile = useMediaQuery("(max-width:550px)");
  const matches = useMediaQuery("(max-width:600px)");

  const addCopyYear = (copyTxt) => {
    let currYr = new Date().getFullYear();
    return copyTxt.replace("{YYYY}", currYr);
  };

  const footerDisclosure = addCopyYear(
    "@Copyright {YYYY} | Metrotek Electrical | All Rights Reserved"
  );

  const location = window.location.pathname;

  return (
    <Box
      // borderTop='14px solid #244ba6'
      maxWidth='797px'
      margin='40px auto 0'
      px='20px'
    >
      <Box
        height='14px'
        backgroundColor='#244ba6'
        maxWidth='100%'
        borderRadius='5px'
        margin='40px auto 0'
      />
      <Box display='flex' justifyContent='center' marginTop='20px'>
        <NavLink to='/'>
          <img src={MetroTekLogo} alt='Footer Logo' style={styles.footerLogo} />
        </NavLink>
      </Box>

      {useMobile ? (
        <>
          {/* <ScrollToTop /> */}
          <Box
            display='flex'
            justifyContent='center'
            marginTop='30px'
            height='86px'
          >
            {navButtonsMobile.map((el, index) => {
              const isFeaturedWork = el.button === "Featured Work";
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
                      color: "blue",
                    }}
                  >
                    {el.button}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </>
      ) : (
        <>
          <Box display='flex' justifyContent='space-around' marginTop='50px'>
            {navButtons.map((el, index) => (
              <Button
                key={index}
                to={el.link}
                component={NavLink}
                sx={{
                  color: el.link === location ? "green" : "black",
                  ":hover": {
                    color: "green",
                  },
                }}
              >
                {el.button}
              </Button>
            ))}
          </Box>
        </>
      )}
      <Box
        display='flex'
        justifyContent='space-around'
        marginTop={matches ? "20px" : "50px"}
        flexWrap={matches ? "wrap" : undefined}
        marginBottom={matches ? "25px" : "5px"}
        alignItems='center'
      >
        <Box order='1'>
          <img
            src={BrewLogo2}
            alt='Footer Logos'
            width='193px'
            height='194px'
          />
        </Box>
        <Box
          order={matches ? "1" : "2"}
          minWidth={matches ? "100%" : undefined}
          px='15px'
        >
          <Typography fontSize='16px' textAlign='center'>
            MetroTek Electrical Services Company
            <br></br>
            <Button
              fontSize='16px'
              sx={{
                color: "#244ba6",
              }}
            >
              2200 Northwood Avenue, Unit 2<br></br>
              Easton, PA 18045
            </Button>
          </Typography>
          <br></br>
          <Typography fontSize='16px' textAlign='center'>
            EMERGENCY - 888.249.4684
            <br></br>
            OFFICE - 610.365.2390
            <br></br>
            operations@metroelectrical.com
          </Typography>
        </Box>
        <Box order={matches ? "2" : "3"} marginTop='25px'>
          <img src={NECALogo} alt='Footer Logos' />
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
  );
}

export default Footer;
