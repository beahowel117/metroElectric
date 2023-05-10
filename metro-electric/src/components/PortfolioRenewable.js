import React from 'react';
import Footer from './Footer';
import { Box, Typography } from "@mui/material";

import renewableEnergy_cover from "../images/Portfolio/renewableEnergy-cover.jpg";

function PortfolioRenewable() {
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
          <img src={renewableEnergy_cover} alt='Renewable Energy' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
        >
            renewable energy
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default PortfolioRenewable
