import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer";
import cea_cover from "../images/Portfolio/cea-cover.PNG";

function PortfolioCEA() {
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
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={cea_cover} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          controlled environment agriculture
        </Typography>
      </Box>
    </>
  );
}

export default PortfolioCEA;
