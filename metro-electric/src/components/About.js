import React from "react";
import Box from "@mui/material/Box";
import aboutHome from "../images/About/AboutHome(2000X1000).jpg";
import "../index.css";
import Footer from './Footer';

function About() {
  const styles = {
    responsiveHero: {
      width: "100%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  return (
    <>
      <Box className='image-wrap'>
        <img src={aboutHome} alt='Contact' style={styles.responsiveHero} />
      </Box>
      <Footer />
    </>
  );
}

export default About;
