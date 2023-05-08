import React from "react";
import { Box, Typography } from "@mui/material";
import aboutHome from "../images/About/AboutHome(2000X1000).jpg";
import leftImage_1 from "../images/About/about-Left1(1024X768).jpg";
import BrewLogo from "../images/logos/bew_logo.jpg";
import "../index.css";
import Footer from "./Footer";

function About() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  return (
    <>
      <Box
      className='image-container'
      >
        <Box className='image-wrap'>
          <img src={aboutHome} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
        >
            about metrotek
        </Typography>
      </Box>
      <Box>
        <h1>
          exceptional electrical solutions
        </h1>
        <Box
           borderTop='5px solid #244ba6'
           maxWidth='300px'
           margin='40px auto 0'
        >
        </Box>

            <p>
            Founded in 1974, MetroTek is a privately owned full service industrial, commercial & utility-scale power infrastructure solutions specialist capable of providing critical electrical services involving engineering, installation, repair, maintenance and testing of all types of electrical infrastructure up through 345kV.
            </p>

      </Box>
      <Box
        display="flex"
      >
         <Box
           order='1'
         >
        <img src={leftImage_1}
          alt="leftImg_1"
          width='585px'
          height='483px'
        />
        </Box>
        <Box
           order='2'
         >
        <img src={BrewLogo}
          alt="brew logo"
          width='438px'
          height='442px'
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default About;
