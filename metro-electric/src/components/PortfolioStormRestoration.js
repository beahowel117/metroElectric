import React from 'react';
import { Box, Typography } from "@mui/material";
import Footer from './Footer';

import stormRestoration_cover from "../images/Portfolio/stormRestoration-cover.JPG";

function PortfolioStormRestoration() {
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
          <img src={stormRestoration_cover} alt='Storm Restoration' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
        >
            storm restoration
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default PortfolioStormRestoration
