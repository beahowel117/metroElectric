import React from "react";
import { Box, Typography } from "@mui/material";
import servicesHome from "../images/Services/servicesHome.jpg";
import "../index.css";
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";

/**THis is the grey section with the 5 clickable photos used throughout the platform */
function Services() {
  const styles = {
    responsiveHero: {
      width: "120%",

      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={servicesHome} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          services
        </Typography>
      </Box>
      <Box marginTop='50px'>
        <GreyGallery />
      </Box>
    </>
  );
}

export default Services;
