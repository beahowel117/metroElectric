import React from "react";
import { Box, Typography } from "@mui/material";
import aboutHome from "../images/About/AboutHome(2000X1000).jpg";
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
        >
            about metrotek
        </Typography>
      </Box>
      <Footer />
    </>
  );
}

export default About;
