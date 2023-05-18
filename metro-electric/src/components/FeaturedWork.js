import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import { Card, CardOverflow, AspectRatio, CardCover } from "@mui/joy";

import featuredWork from "../images/FeaturedWork/featuredWork(2000X1000).jpg";
import overHeadConstruction from "../images/FeaturedWork/FW-OC.JPG";
import controlledAgriculture from "../images/FeaturedWork/FW-CAE.JPG";
import transformerReplacement from "../images/FeaturedWork/FW-TR.jpg";
import renewableEnergy from "../images/FeaturedWork/FW-RE.jpg";
import stormRestoration from "../images/FeaturedWork/FW-SR.jpg";

import "../index.css";
import "../featuredWork.css";

function FeaturedWork() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  const imageGallery = [
    {
      img: overHeadConstruction,
      text: "Overhead Construction",
      link: "/portfolio-items/overhead-construction",
    },
    {
      img: controlledAgriculture,
      text: "Controlled Environment Agriculture",
      link: "/portfolio-items/controlled-environment-agriculture",
    },
    {
      img: transformerReplacement,
      text: "Transformer Replacements",
      link: "/portfolio-items/transformer",
    },
    {
      img: renewableEnergy,
      text: "Renewable Energy",
      link: "/portfolio-items/renewable",
    },
    {
      img: stormRestoration,
      text: "Storm Restoration",
      link: "/portfolio-items/storm",
    },
  ];
  
  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={featuredWork} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          our featured products
        </Typography>
      </Box>

      <Box display='flex' justifyContent='center'>
        <Box
          display='flex'
          flexWrap='wrap'
          maxWidth='1100px'
          justifyContent='center'
          gap='10px'
          py='40px'
        >
          {imageGallery.map(({ img, text, link }) => (
            <Card variant='outlined' className='container'>
              <CardOverflow>
                <AspectRatio ratio='5/4'>
                  <img src={img} loading='lazy' alt='' />
                  <div className='overlay'>
                    <Typography
                      className='imgText'
                      component={NavLink}
                      to={link}
                      sx={{ textDecoration: "none" }}
                    >
                      {text}
                    </Typography>
                  </div>
                </AspectRatio>
              </CardOverflow>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default FeaturedWork;
