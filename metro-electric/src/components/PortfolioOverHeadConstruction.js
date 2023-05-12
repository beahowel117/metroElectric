import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer";
import overHead_cover from "../images/Portfolio/overHead-cover.jpg";

function PortfolioOverHeadConstruction() {
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
          <img
            src={overHead_cover}
            alt='Over Head Construction'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          overhead construction
        </Typography>
      </Box>
    </>
  );
}

export default PortfolioOverHeadConstruction;
