import React from "react";
import { Box, Typography } from "@mui/material";

import GreyGallery from "./GreyGallery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

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
      <MainContainer>
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
          >
            <img src={first_image} alt='testing' width='100%' />
          </Box>
        </InnerContainer>
        {/* first verbal container */}
        <InnerContainer
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mb='20px'
          >
            <Typography
              color='#244ba6'
              textAlign='center'
              fontSize='25px'
              fontFamily='Lato'
              fontWeight='900'
              mt='20px'
              maxWidth='500px'
              textTransform='uppercase'
            >
              electrical infrastructure maintenance
            </Typography>
            <Box
              height='3px'
              backgroundColor='#244ba6'
              maxWidth='420px'
              width='100%'
              borderRadius='10px'
              mt='15px'
            />
          </Box>
          <Typography
            fontSize='17px'
            fontWeight='300'
            fontFamily='Lato'
            maxWidth='800px'
            mb='45px'
          >
            Our commercial and industrial clients depend on the performance of their electricity delivery systems. Our preventative maintenance programs allow our clients to reduce energy costs, increase the lifespan of power systems and ensure the safe and continuous operation of their electrical equipment. By reducing or eliminating unexpected electrical outages and increasing power system efficiency, our clients find our scheduled service and maintenance programs indispensable.
            <br></br>
            <br></br>
            We provide electrical testing, inspection, and validation services to ensure the continued safety, reliability, and operation of industrial power systems. In addition to using expertly trained testing professionals and the latest tools and equipment, our services meet or exceed all specifications set by the International Electrical Testing Association (NETA).
            <br></br>
            <br></br>
            <li>
              <strong>Acceptance Testing: </strong>Testing of new electrical equipment to guarantee performance and installation in accordance with manufacturer’s specifications.
            </li>
            <li>
              <strong>Predictive Maintenance Testing: </strong>Electrical testing for all power system components including transformers, switchgear, grounding, cables, and protective relays. Testing services include power factor, harmonic, insulation resistance and more.
            </li>
            <li>
              <strong>Power Systems Analysis: </strong>Performance of power quality and reliability studies including load flow, harmonics, transient stability, faults, arc flash and protective devices.
            </li>
            <li>
              <strong>Infrared Thermography: </strong>Infrared testing to identify high resistance and fault prone areas, making it possible to minimize downtime and perform preventive maintenance as quickly and efficiently as possible.
            </li>
          </Typography>
        </InnerContainer>


      </MainContainer>
        <GreyGallery />

    </>
  );
}

export default TestingMaintenance;
