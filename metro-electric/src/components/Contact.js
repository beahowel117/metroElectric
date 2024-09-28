import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";
import BrewLogo2 from "../images/logos/Bew2_logo.png";
import contact from "../images/Contact/contact(2000x1000).jpg";
import newContact from "../images/Contact/NewContact.jpg";
import "../index.css";
import MainContainer from "./MainContainer";

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
  const matches = useMediaQuery("(max-width:800px)");
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
          <img src={newContact} alt='Contact' style={styles.responsiveHero} />
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
          alignItems='center'
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
            px={matches ? undefined : "15px"}
          >
            <Typography color="#244ba6" fontSize="20px" paddingBottom="15px">
            <strong>MetroTek Electrical Services Company</strong>
            </Typography>
            <Typography fontSize='20px' textAlign='center' paddingBottom="15px">
              <strong><em>Headquarters:</em></strong>
              <br></br>
              <a
                href='https://goo.gl/maps/osx1xEArwyzn9zDo8'
                target='_blank'
                rel='noreferrer'
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                2200 Northwood Avenue, Unit 2<br></br>
                Easton, PA 18045
              </a>
            </Typography>
            <Typography fontSize='20px' textAlign='center'>
              <strong><em>Logistics / Operations:</em></strong>
              <br></br>
              <a
                href='https://www.google.com/maps/search/?api=1&query=164+State+Route+173,+Stewartsville,+NJ+08886'
                target='_blank'
                target='_blank'
                rel='noreferrer'
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                164 State Route 173<br></br>
                Stewartsville, NJ 08886
              </a>
            </Typography>
            <br></br>
            <Typography
              fontSize={{ xs: "20px", sm: "20px" }}
              textAlign='center'
            >
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='6px'
              >
               <Box width='100px'>
                   Toll Free:
               </Box>
                <a href='tel:8882494684' style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}> 888.249.4684</a>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='6px'
              >
                <Box width='100px'>
                   Office:
               </Box>
                <a href='tel:6103652390' style={{ color: 'inherit', textDecoration: 'none', marginLeft: '7px' }}> 610.365.2390</a>
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
                Email:
                <RouterLink to='mailto:operations@metroelectrical.com' style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>
                  operations@metroelectrical.com
                </RouterLink>
              </Box>
            </Typography>
          </Box>
          <Box order={matches ? "2" : "3"} marginTop='25px' marginLeft='10px'>
            <img src={NECALogo} alt='Footer Logos' width='140px' />
          </Box>
        </Box>
        <Box
          backgroundColor='#244ba6'
          height='14px'
          margin='10px auto 0'
          borderRadius='5px'
          width='100%'
          mt='80px'
        />
        <Box maxWidth='797px' margin='0 auto '>
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
