import React from "react";
import GreyGallery from "./GreyGallery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import { Box, Typography } from "@mui/material";
import { AspectRatio } from "@mui/joy";
import useMediaQuery from "@mui/material/useMediaQuery";

import renewable_energy from "../images/Services/renewableEnergy(1024X768).jpg";
import re_cover from "../images/Services/re_cover(2000X1000).jpg";
import re_last from "../images/Services/re-last.jpg";

function RenewableEnergy() {
  const styles = {
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
          <img
            src={re_cover}
            alt='Renewable Energy'
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
          renewable energy
        </Typography>
      </Box>


      <MainContainer>
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            columnGap='30px'
            alignItems='center'
          >
            <Box
              display='flex'
              justifyContent='center'
              minWidth='350px'
              marginTop='40px'
              flex='1'
              paddingTop='auto'
            >
              <img src={renewable_energy} alt='Renewable Energy' width='100%' />
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              flex='1'
              minWidth='350px'
              width={{
                      xs:'100%',
                      md:''
              }}
            >
              <Box
                // marginBottom='-16px'
              >
                <h1>renewable energy</h1>
              </Box>
              <Box marginBottom='-10px'>
                <Typography fontSize='18px' fontWeight='900'>Serving the renewable future of power systems</Typography>
              </Box>
              <p>
                We assist clients to deploy a wide range of renewable energy options
                with services that include construction, inspection, installation,
                maintenance, repair, and removal of renewable energy power
                distribution systems.
                <br></br>
                <br></br>
                Our renewable energy support services include engineering,
                procurement, construction, lightning protection, underground cable,
                SCADA systems, substations, switchgear, inverters, utility grid
                interconnection &amp; optimization, testing &amp; commissioning, and
                quality control &amp; assurance.
              </p>
            </Box>
          </Box>
        </InnerContainer>

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          maxWidth='1150px'
          width='100%'
          margin='30px 50px 50px 50px'
        >
          <AspectRatio objectFit='cover'>
            <img src={re_last} alt='renewable energy' />
          </AspectRatio>
        </Box>
      </MainContainer>
      <GreyGallery />
    </>
  );
}

export default RenewableEnergy;



