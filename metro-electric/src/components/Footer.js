import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import NECALogo from "../images/logos/NECA-logo.jpg";
import BrewLogo2 from "../images/logos/Bew2_logo.png";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";

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
    <Box maxWidth='797px' margin='40px auto 0' px='20px'>
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
        // justifyContent='space-around'
        justifyContent='space-evenly'
        marginTop={matches ? "20px" : "50px"}
        flexWrap={matches ? "wrap" : undefined}
        marginBottom={matches ? "25px" : "5px"}
        alignItems='center'
        marginLeft={matches ? "0" : "-35px"}
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
          paddingRight='15px'
          paddingLeft={matches ? "15px": "10px"}
        >
          <Typography fontSize='16px' textAlign='center'>
            <strong>MetroTek Electrical Services Company</strong>
            <br></br>
            <Box
              fontSize='16px'
              sx={{
                color: "#244ba6",
              }}
            >
              <a
                href='https://goo.gl/maps/osx1xEArwyzn9zDo8'
                target='_blank'
                rel='noreferrer'
              >
                2200 Northwood Avenue, Unit 2<br></br>
                Easton, PA 18045
              </a>
            </Box>
          </Typography>

          <Typography fontSize='16px' textAlign='center'>
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
                sx={{ color: "#244BA6", "margin-right": "4px" }}
              />
              <RouterLink to='mailto:operations@metroelectrical.com'>
                operations@metroelectrical.com
              </RouterLink>
            </Box>
          </Typography>
        </Box>
        <Box order={matches ? "2" : "3"} marginTop='10px'>
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
