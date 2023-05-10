import React from 'react';
import Footer from './Footer';
import { Box, Typography } from "@mui/material";
import transformer_cover from "../images/Portfolio/transformerReplacement-cover.jpg";

function PortfolioTransformer() {
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
          <img src={transformer_cover} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
        >
            transformer replacements
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default PortfolioTransformer
