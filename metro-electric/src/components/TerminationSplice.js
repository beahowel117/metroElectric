import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from "@mui/material/useMediaQuery";

import cover from '../images/Services/TSCover.jpg';
import slider1 from '../images/Services/TS_slider-1.jpg';
import slider2 from '../images/Services/TS_slider-2.jpg';
import slider3 from '../images/Services/TS_slider-3.jpg';
import richards from '../images/logos/BLogo1- Richards.jpg';
import prysmian from '../images/logos/BLogo2- Prysmian.jpg';
import threeM from '../images/logos/BLogo3- 3M.jpg';
import raychem from '../images/logos/BLogo4- Raychem.jpg';
import ncscb from '../images/logos/BLogo5- NCSCB.jpg';

import GreyGallery from './GreyGallery';
import MainContainer from './MainContainer';
import InnerContainer from './InnerContainer';

function TerminationSplice() {
  const styles = {
    footerLogo: {
      width: "300px",
      height: "57px",
      align: "center",
    },
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  const useMobile = useMediaQuery("(max-width:780px)");
  return (
    <>
       <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={cover} alt='TerminationSplice' style={styles.responsiveHero} />
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
          sx={{ animationIterationCount: "1" }}
        >
          Termination & Splicing Specialists
        </Typography>
      </Box>
      <MainContainer>
        {/*logos*/}
        <InnerContainer>
          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
            <img src={richards} alt='richards' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              "MV-Elite" Certified Contractor
            </Typography>
            </Box>
          </Box>

          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
            <img src={prysmian} alt='richards' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              Prysmian Certified Installer
            </Typography>
            </Box>
          </Box>
          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
            <img src={threeM} alt='richards' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              Qualified Electrical Construction Contractor (QECC) with Black Card Certification
            </Typography>
            </Box>
          </Box>
          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
            <img src={raychem} alt='richards' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              Raychem Certified Installer
            </Typography>
            </Box>
          </Box>
          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
            <img src={ncscb} alt='richards' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              ml='40px'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              Certified Medium-Voltage Cable Splicers
            </Typography>
            </Box>
          </Box>
        </InnerContainer>
        {/*slider*/}
        <InnerContainer>
          <Box display='flex' flexWrap='wrap' my='40px'>
            <Box flex='1' minWidth='350px'>
              <Carousel
                autoPlay
                infiniteLoop
                showArrows
                showThumbs={false}
                showIndicators={false}
              >
                <img src={slider1} alt='slider 1' width='100%' />

                <img src={slider2} alt='slider 2' width='100%' />

                <img src={slider3} alt='slider 2' width='100%' />
              </Carousel>
            </Box>
          </Box>
        </InnerContainer>
      </MainContainer>
      <GreyGallery />
    </>
  )
}

export default TerminationSplice;
