import React from 'react';
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import { AspectRatio } from "@mui/joy";

import renewable_energy from "../images/Services/renewableEnergy(1024X768).jpg"
import re_cover from "../images/Services/re_cover(2000X1000).jpg";
import re_last from "../images/Services/re-last.jpg";


function RenewableEnergy() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
  };

  return (
    <>
       <Box
      className='image-container'
      >
        <Box className='image-wrap'>
          <img src={re_cover} alt='Renewable Energy' style={styles.responsiveHero} />
        </Box>
        <Typography
            className='lineUp'
            fontSize='40px'
            fontWeight='600'
        >
          renewable energy
        </Typography>
      </Box>


     <Box
      display="flex"
      padding="40px"
      maxWidth="1000px"
      margin="auto"
      flexWrap="wrap"
     >
        <Box
          maxWidth="600px"
          minWidth="400px"
          flex='1'
          paddingTop="auto"
        >
        <img src={renewable_energy}
          alt="Renewable Energy"
          width="100%"
        />
        </Box>
        <Box
         display="flex"
         flexDirection="column"
         padding="20px 0px 0 50px"
         flex='1'
        >
        <Box
          marginBottom="-16px"
        >
        <h1>
          renewable energy
        </h1>
        </Box>
        <Box
          marginBottom="-10px"
        >
        <h3>
          Serving the renewable future of power systems
        </h3>
        </Box>
        <p>
        We assist clients to deploy a wide range of renewable energy options with services that include construction, inspection, installation, maintenance, repair, and removal of renewable energy power distribution systems.
        <br></br>
        <br></br>
        Our renewable energy support services include engineering, procurement, construction, lightning protection, underground cable, SCADA systems, substations, switchgear, inverters, utility grid interconnection &amp; optimization, testing &amp; commissioning, and quality control &amp; assurance.
        </p>
        </Box>
     </Box>

      <Box
        maxWidth="1160px"
        margin="0 auto 50px auto"
      >
          <AspectRatio
            objectFit="cover"
          >
            <img src={re_last}
              alt="renewable energy"
            />
          </AspectRatio>
        </Box>

      <GreyGallery />
      <Footer />
    </>
  )
}

export default RenewableEnergy
