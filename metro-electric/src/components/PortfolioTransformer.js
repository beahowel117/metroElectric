import React from "react";
import PTransformer from "./P_Transformer";
import { Box, Typography } from "@mui/material";
import transformer_cover from "../images/Portfolio/transformerReplacement-cover.jpg";

function PortfolioTransformer() {
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
            src={transformer_cover}
            alt='Contact'
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
          transformer replacements
        </Typography>
      </Box>
      <PTransformer />
    </>
  );
}

export default PortfolioTransformer;
