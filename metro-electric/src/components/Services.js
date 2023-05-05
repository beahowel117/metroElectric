import React from "react";
import Box from "@mui/material/Box";
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
      <Box className='image-wrap'>
        <img src={servicesHome} alt='Contact' style={styles.responsiveHero} />
      </Box>
      <GreyGallery />
      <Footer />
    </>
  );
}

export default Services;
