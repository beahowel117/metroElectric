import React from "react";
import { Box, Typography } from "@mui/material";

import GreyGallery from "./GreyGallery";
import Footer from "./Footer";

import testing_cover from "../images/Services/tm_cover(2000x1000).jpg";
import first_image from "../images/Services/tm-1.jpg";
import second_image from "../images/Services/tm-2(2000x1000).jpg";
import third_image from "../images/Services/tm-3(1024X768).jpg";
import fourth_image from "../images/Services/tm-4(1024X768).jpg";
import fifth_image from "../images/Services/tm-5(1024X768).jpg";
import sixth_image from "../images/Services/tm-6(2000x1000).jpg";
import "../index.css";

function TestingMaintenance() {
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
            src={testing_cover}
            alt='Testing Maintenance'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography
          className='lineUp'
          fontFamily='Lato'
          // fontWeight='600'
          color='#f5f5f5'
          sx={{ animationIterationCount: "1" }}
          fontSize={{
            lg: 35,
            md: 30,
            sm: 25,
            xs: 0,
          }}
          maxWidth={{ sm: "580px", md: "900px" }}
        >
          Testing & Maintenance
        </Typography>
      </Box>
      <Box marginTop='50px'>
        <GreyGallery />
      </Box>
    </>
  );
}

export default TestingMaintenance;
