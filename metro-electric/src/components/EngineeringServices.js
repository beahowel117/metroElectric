import React from 'react';
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import GreyGallery from './GreyGallery';
import MainContainer from './MainContainer';
import InnerContainer from './InnerContainer';

import cover from '../images/Services/Gear.jpg';
import main from '../images/Services/PMH.jpg';



function EngineeringServices() {
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
            alt='engineering-services'
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
          Engineering Services
        </Typography>
      </Box>
     <MainContainer>
     <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            columnGap='20px'
            my='40px'
          >
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
              <img src={main} alt='three trucks' width='100%' />
            </Box>
            <Box
              flex='1'
              alignSelf='center'
              py='20px'
              order={useMobile ? "1" : "2"}
              minWidth='350px'
            >
              <Typography
                color='#244ba6'
                textAlign='left'
                fontSize='27px'
                fontFamily='Lato'
                fontWeight='900'
                mb='15px'
                textTransform='uppercase'
              >
                engineering services
              </Typography>
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
              MetroTek offers solutions to complex problems that occur in power systems. Our Engineers have proven field experience andn are trained hands-on to solve complex power system problems and provide recommendations that will improve the reliability and sustainabiity of the power system. WE have proven experience industry-wide including solar, commercial, industria, Oil & Gas, Cement, Steel Healthcare, Substations, etc.
              </Typography>
            </Box>
          </Box>
        </InnerContainer>

        <InnerContainer>
          <Box
            flex='1'
            alignSelf='center'
            py='20px'
            order={useMobile ? "1" : "2"}
            minWidth='350px'
            >
              <Typography
                color='#244ba6'
                textAlign='left'
                fontSize='27px'
                fontFamily='Lato'
                fontWeight='900'
                mb='15px'
                textTransform='uppercase'
              >
                power system study
              </Typography>
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
                <ul>
                  <li>Short-Circuit Analysis</li>
                  <li>Load Flow Studies</li>
                  <li>Protective Device Coordination Study</li>
                  <li>Arc Flash Analysis</li>
                  <li>Electrical Equipment Evaluation</li>
                  <li>System One-Line Diagram</li>
                  <li>Protective Device Settings Summary and Recommendations</li>
                  <li>Harmonic Analysis</li>
                  <li>Motor Starting Analysis</li>
                  <li>Grounding Studies</li>
                  <li>Power Quality Studies</li>
                  <li>Power Factor Correction</li>
                  <li>Feasibility Studies</li>
                  <li>Energy Analysis</li>
                  <li>Code Compliance</li>
                  <li>Cable Thermal Ampacity</li>
                  <li>Lightning Risk Assessment</li>
                </ul>
              </Typography>
              <br></br>
              <Typography
                color='#244ba6'
                textAlign='left'
                fontSize='27px'
                fontFamily='Lato'
                fontWeight='900'
                mb='15px'
                textTransform='uppercase'
              >
                protection and control
              </Typography>
              <Typography
                fontSize='17px'
                fontWeight='600'
                fontFamily='Lato'
                maxWidth='800px'
                mb='30px'
              >
                <ul>
                  <li>Relay Settings Development</li>
                  <li>Partner with the Design Engineering Team to Review the Schematic and Wiring Design</li>
                  <li>Conceptual Single-Line Design</li>
                  <li>Three-Line Drawing Review</li>
                  <li>AC & DC Schematic Review</li>
                  <li>Feeder Protection</li>
                  <li>Recloser Protection</li>
                  <li>Transformer Protection</li>
                  <li>Motor Protection</li>
                  <li>Generator Protection</li>
                  <li>Distribution Line Protection</li>
                  <li>Functional Test Procedure Development</li>
                  <li>Isolation Points Check</li>
                </ul>
              </Typography>
           </Box>
        </InnerContainer>
     </MainContainer>
      <GreyGallery />
  </>
  )
}

export default EngineeringServices;
