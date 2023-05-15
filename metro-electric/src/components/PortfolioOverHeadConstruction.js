import React from "react";
import { Box, Typography } from "@mui/material";
import overHead_cover from "../images/Portfolio/overHead-cover.jpg";
import Overhead from "./Overhead";

function PortfolioOverHeadConstruction() {
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
            src={overHead_cover}
            alt='Over Head Construction'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          overhead construction
        </Typography>
      </Box>
      <Overhead />
    </>
  );
}

export default PortfolioOverHeadConstruction;
