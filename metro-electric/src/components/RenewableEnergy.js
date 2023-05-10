import React from 'react';
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

import renewable_energy from "../images/Services/renewableEnergy(1024X768).jpg"
import re_cover from "../images/Services/re_cover(2000X1000).jpg";

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


     <Box>
      <img src={renewable_energy}
        alt="Renewable Energy"
        width="600px"
      />
      <Typography>
      We assist clients to deploy a wide range of renewable energy options with services that include construction, inspection, installation, maintenance, repair, and removal of renewable energy power distribution systems.
      </Typography>
      <Typography>
      Our renewable energy support services include engineering, procurement, construction, lightning protection, underground cable, SCADA systems, substations, switchgear, inverters, utility grid interconnection &amp; optimization, testing &amp; commissioning, and quality control &amp; assurance.
      </Typography>
     </Box>
      <GreyGallery />
      <Footer />
    </>
  )
}

export default RenewableEnergy
