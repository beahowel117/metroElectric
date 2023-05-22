import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";
import BrewLogo2 from "../images/logos/Bew2_logo.png";
import contact from "../images/Contact/contact(2000x1000).jpg";
import "../index.css";
import MainContainer from "./MainContainer";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";

const Contact = () => {
  const styles = {
    footerLogo: {
      width: "300px",
      height: "57px",
      align: "center",
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
      button: "Work",
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
      button: "Work",
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
  const matches = useMediaQuery("(max-width:600px)");
  const useMobile = useMediaQuery("(max-width:600px)");

  const addCopyYear = (copyTxt) => {
    let currYr = new Date().getFullYear();
    return copyTxt.replace("{YYYY}", currYr);
  };

  const footerDisclosure = addCopyYear(
    "@Copyright {YYYY} | Metrotek Electrical | All Rights Reserved"
  );

  const location = window.location.pathname;

  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={contact} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontWeight='600'
          fontSize={{
            lg: 40,
            md: 30,
            sm: 25,
            xs: 25,
          }}
          sx={{ animationIterationCount: "1" }}
        >
          contact metrotek
        </Typography>
      </Box>

      <MainContainer>
        <Box
          display='flex'
          justifyContent='space-around'
          marginTop={matches ? "20px" : "50px"}
          flexWrap={matches ? "wrap" : undefined}
          marginBottom={matches ? "25px" : "5px"}
        >
          <Box order='1'>
            <img
              src={BrewLogo2}
              alt='Footer Logos'
              width='193px'
              height='194px'
              // marginRight='20px'
            />
          </Box>
          <Box
            order={matches ? "1" : "2"}
            minWidth={matches ? "100%" : undefined}
            px='15px'
          >
            <Typography fontSize='24px' textAlign='center'>
              <strong>MetroTek Electrical Services Company</strong>
              <br></br>
              <a
                href='https://goo.gl/maps/osx1xEArwyzn9zDo8'
                target='_blank'
                rel='noreferrer'
              >
                2200 Northwood Avenue, Unit 2<br></br>
                Easton, PA 18045
              </a>
            </Typography>
            <br></br>
            <Typography fontSize='24px' textAlign='center'>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='6px'
              >
                <PhoneIphoneRoundedIcon sx={{ color: "#244BA6" }} /> EMERGENCY -
                <a href='tel:8882494684'>888.249.4684</a>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='6px'
              >
                <PhoneIphoneRoundedIcon sx={{ color: "#244BA6" }} /> OFFICE -
                <a href='tel:6103652390'>610.365.2390</a>
              </Box>
              <Box
                mt='6px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                onClick={(e) =>
                  (window.location = "mailto:operations@metroelectrical.com")
                }
              >
                <MailOutlineTwoToneIcon
                  sx={{ color: "#244BA6", "margin-right": "3px" }}
                />
                <RouterLink to='mailto:operations@metroelectrical.com'>
                  operations@metroelectrical.com
                </RouterLink>
              </Box>
            </Typography>
          </Box>
          <Box order={matches ? "2" : "3"} marginTop='25px' marginLeft='10px'>
            <img src={NECALogo} alt='Footer Logos' />
          </Box>
        </Box>

        <Box maxWidth='797px' margin='40px auto 0' px='20px'>
          <Box
            backgroundColor='#244ba6'
            height='14px'
            maxWidth='100%'
            margin='10px auto 0'
            borderRadius='5px'
          />
          <Box display='flex' justifyContent='center' marginTop='20px'>
            <NavLink to='/'>
              <img
                src={MetroTekLogo}
                alt='Footer Logo'
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
