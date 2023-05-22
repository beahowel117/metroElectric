import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer";
import CEA from "./P-CEA";
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
        <Typography
          className='lineUp'
          fontWeight='600'
          fontSize={{
            lg: 40,
            md: 30,
            sm: 25,
            xs: 25,
          }}
        >
          controlled environment agriculture
        </Typography>
      </Box>
      <CEA />
    </>
  );
}

export default PortfolioCEA;
