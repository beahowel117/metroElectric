import React from "react";
import { Box, Typography } from "@mui/material";
import { Card, CardOverflow, AspectRatio } from "@mui/joy";
import Footer from "./Footer";

import featuredWork from "../images/FeaturedWork/featuredWork(2000X1000).jpg";
import overHeadConstruction from "../images/FeaturedWork/FW-OC.JPG";
import controlledAgriculture from "../images/FeaturedWork/FW-CAE.JPG";
import transformerReplacement from "../images/FeaturedWork/FW-TR.jpg";
import renewableEnergy from "../images/FeaturedWork/FW-RE.jpg";
import stormRestoration from "../images/FeaturedWork/FW-SR.jpg";

import "../index.css";


function FeaturedWork() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  const imageGallery = [
    {
      img: overHeadConstruction,
      text: "Overhead Construction"
    },
    {
      img: controlledAgriculture,
      text: "Controlled Environment Agriculture"
    },
    {
      img: transformerReplacement,
      text: "Transformer Replacements"
    },
    {
      img: renewableEnergy,
      text: "Renewable Energy"
    },
    {
      img: stormRestoration,
      text: "Storm Restoration"
    }
  ];

  return (
    <>
      <Box
      className='image-container'
      >
        <Box className='image-wrap'>
          <img src={featuredWork} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
            className='lineUp'
            fontSize='40px'
        >
          our featured products
        </Typography>
      </Box>

      <Box
        display='flex'
        justifyContent='center'
      >
        <Box
          display='flex'
          flexWrap='wrap'
          maxWidth='1100px'
          justifyContent='center'
          gap='10px'
          py='40px'
          className='fw-image-container'
        >
          {imageGallery.map(({img, text}) => (
            <Card
              variant='outlined'
              className='fw-image-container'
              sx={{ width: 320, backgroundColor: "#4d4d4d" }}
            >
              <CardOverflow>
                <AspectRatio ratio='5/4'>
                  <img src={img} loading='lazy' alt='' className='overlay'/>
                </AspectRatio>
              </CardOverflow>
            </Card>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default FeaturedWork;
