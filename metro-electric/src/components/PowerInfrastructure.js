import React from 'react';
import { Box, Typography } from "@mui/material";

import GreyGallery from "./GreyGallery";
import Footer from "./Footer";

import pi_cover from "../images/Services/pi-cover(2000x1000).jpg";
import first_image from "../images/Services/pi-1(2000x1000).jpg";
import second_image from "../images/Services/pi-2(1024x768).jpg";
import third_image from "../images/Services/pi-3(2000x1000).jpg";
import slider_1 from "../images/Services/pi-slider1(2000x1000).jpg";
import slider_2 from "../images/Services/pi-slider2(2000x1000).jpg";
import mini_slider1_1 from "../images/Services/pi-minislider1.1(1024x768).jpg";
import mini_slider1_2 from "../images/Services/pi-minislider1.2(1024x768) (1).jpg";
import mini_slider1_3 from "../images/Services/pi-minislider1.3(1024x768).jpg";
import mini_slider2_1 from "../images/Services/pi-minislider2.1(1024x768).jpg";
import mini_slider2_2 from "../images/Services/pi-minislider2.2(1024x768).jpg";
import mini_slider2_3 from "../images/Services/pi-minislider2.3(1024x768).jpg";
import mini_slider2_4 from "../images/Services/pi-minislider2.4(1024x768).jpg";



function PowerInfrastructure() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
  };

  return (
    <>
      <Box
      className='image-container'
      >
      <Box className='image-wrap'>
          <img src={pi_cover} alt='Power Infrastructure' style={styles.responsiveHero} />
      </Box>
      <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
      >
          power infrastructure
      </Typography>
      </Box>

      <GreyGallery />
      <Footer />
    </>
  )
}

export default PowerInfrastructure
