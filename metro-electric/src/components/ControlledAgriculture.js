import React from 'react';
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

import ca_pipes from "../images/Services/ca_pipes.jpeg";
import ca_cover from "../images/Services/ca_cover.jpg";
import ca_slider_1 from "../images/Services/ca_slider1.jpg";
import ca_slider_2 from "../images/Services/ca_slider2.jpg";
import ca_slider_3 from "../images/Services/ca_slider3.jpeg";
import ca_slider_4 from "../images/Services/ca_slider4.jpeg";



function ControlledAgriculture() {
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
          <img src={ca_cover} alt='Controlled Agriculture' style={styles.responsiveHero} />
        </Box>
        <Typography
            className='lineUp'
            fontSize='40px'
            fontWeight='600'
        >
          controlled environmental agriculture
        </Typography>
      </Box>

      <Box>
        <img src={ca_slider_1} alt="controlled agriculture" />
      </Box>

     <Box>
        <h1>controlled environment agriculture</h1>
        <h3>Design-Build Services</h3>
        <Typography>
           We have designed, engineered, built and tested energy delivery systems for some of the largest controlled environment agriculture facilities in North America.
        </Typography>
        <Typography>
          Our portfolio of work is second to none and has included individual facilities in excess of 3 million square feet in size with electrical loads in excess of 50 Megawatts.
        </Typography>
        <img src={ca_pipes}
          alt="pipes"
          width="600px"
        />
     </Box>
      <GreyGallery />
      <Footer />
    </>
  )
}

export default ControlledAgriculture;

