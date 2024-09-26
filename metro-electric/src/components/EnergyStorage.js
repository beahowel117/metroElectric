import React from 'react';
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import GreyGallery from "./GreyGallery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

import cover from "../images/Services/ESCover.jpg";
import middle from "../images/Services/ESCenter.jpg";
import bottom from "../images/Services/ESBottom.jpg";

function EnergyStorage() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    circle: {
      listStyleType: "circle",
    },
    mobileLists: {
      textIndent: "-23px",
    },
  };
  const useMobile = useMediaQuery("(max-width:780px)");

  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img
            src={cover}
            alt='energy-storage'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography
          className='lineUp'
          fontFamily='Lato'
          fontWeight='600'
          color='#f5f5f5'
          sx={{ animationIterationCount: "1" }}
          fontSize={{
            lg: 40,
            md: 30,
            sm: 25,
            xs: 25,
          }}
          maxWidth={{ sm: "580px", md: "900px" }}
        >
          Energy Storage
        </Typography>
      </Box>

      <MainContainer>
        {/* middle section */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            ustifyContent='center'
            mt='30px'
            columnGap='30px'
          >
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
              <img src={middle} alt='red hose' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              // ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                color='#244ba6'
                textAlign='left'
                fontSize='25px'
                fontFamily='Lato'
                fontWeight='900'
                mb='15px'
                textTransform='uppercase'
              >
                energy storage
              </Typography>
              <Typography fontSize='17px' fontWeight='600' fontFamily='Lato'>
               MetroTek provides turnkey installation
               and commissioning support for energy
               storage facility projects.
              </Typography>
            </Box>
          </Box>
        </InnerContainer>
        {/* last image container */}
        <InnerContainer
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='20px'
            mb='30px'
          >
            <img src={bottom} alt='testing truck' width='100%' />
          </Box>
        </InnerContainer>
      </MainContainer>
      <GreyGallery />
    </>
  );
}

export default EnergyStorage
