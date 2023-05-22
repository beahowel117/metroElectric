import React from "react";
import { Box, Typography } from "@mui/material";
import PStorm from "./P_Storm";
import stormRestoration_cover from "../images/Portfolio/stormRestoration-cover.JPG";

function PortfolioStormRestoration() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img
            src={stormRestoration_cover}
            alt='Storm Restoration'
            style={styles.responsiveHero}
          />
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
          storm restoration
        </Typography>
      </Box>
      <PStorm />
    </>
  );
}

export default PortfolioStormRestoration;
