import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

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
            src={testing_cover}
            alt='Testing Maintenance'
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
            mt='30px'
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
              fontSize='27px'
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
            fontWeight='600'
            fontFamily='Lato'
            maxWidth='800px'
            mb='30px'
          >
            Our commercial and industrial clients depend on the performance of
            their electricity delivery systems. Our preventative maintenance
            programs allow our clients to reduce energy costs, increase the
            lifespan of power systems and ensure the safe and continuous
            operation of their electrical equipment. By reducing or eliminating
            unexpected electrical outages and increasing power system
            efficiency, our clients find our scheduled service and maintenance
            programs indispensable.
            <br></br>
            <br></br>
            We provide electrical testing, inspection, and validation services
            to ensure the continued safety, reliability, and operation of
            industrial power systems. In addition to using expertly trained
            testing professionals and the latest tools and equipment, our
            services meet or exceed all specifications set by the International
            Electrical Testing Association (NETA).
            <br></br>
            <ul list-style-position='outside'>
              <li>
                <span style={{ "font-weight": "900", "font-size": "18px" }}>
                  Acceptance Testing:{" "}
                </span>
                Testing of new electrical equipment to guarantee performance and
                installation in accordance with manufacturer’s specifications.
              </li>
              <li>
                <span style={{ "font-weight": "900", "font-size": "18px" }}>
                  Predictive Maintenance Testing:{" "}
                </span>
                Electrical testing for all power system components including
                transformers, switchgear, grounding, cables, and protective
                relays. Testing services include power factor, harmonic,
                insulation resistance and more.
              </li>
              <li>
                <span style={{ "font-weight": "900", "font-size": "18px" }}>
                  Power Systems Analysis:{" "}
                </span>
                Performance of power quality and reliability studies including
                load flow, harmonics, transient stability, faults, arc flash and
                protective devices.
              </li>
              <li>
                <span style={{ "font-weight": "900", "font-size": "18px" }}>
                  Infrared Thermography:{" "}
                </span>
                Infrared testing to identify high resistance and fault prone
                areas, making it possible to minimize downtime and perform
                preventive maintenance as quickly and efficiently as possible.
              </li>
            </ul>
          </Typography>
        </InnerContainer>
        {/* second image container */}
        <InnerContainer
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            // mt='20px'
          >
            <img src={second_image} alt='testing' width='100%' />
          </Box>
        </InnerContainer>
        {/* second typography  section */}
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
              fontSize='27px'
              fontFamily='Lato'
              fontWeight='900'
              mt='20px'
              maxWidth='500px'
              textTransform='uppercase'
            >
              electrical testing
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
            fontWeight='600'
            fontFamily='Lato'
            maxWidth='800px'
            mb='30px'
          >
           <li>Commissioning & Maintenance Testing:</li>
            <ul style={styles.circle}>
              <li>Very Low Frequency (VLF)</li>
              <li>Tan-Delta</li>
              <li>Turns Ratio</li>
              <li>Winding Resistance</li>
              <li>Insulation Resistance</li>
              <li>Contact Resistance</li>
            </ul>
            <div style={styles.mobileLists}>
              <li>
                Protective Relay Calibration, Metering, Testing & Programming
              </li>
              <li>Grounding & Bonding Testing - Commercial Pools</li>
              <li>Circuit Breaker Testing, Repair & Retrofit</li>
              <li>Motor Testing</li>
              <li>Motor Control (MMC) Boards</li>
              <li>Switch Boards</li>
              <li>Battery Testing and Maintenance</li>
            </div>
          </Typography>
        </InnerContainer>
        {/* section one of double feature */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            columnGap='20px'
            // my='40px'
          >
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
              <img src={third_image} alt='three trucks' width='100%' />
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
                fontSize='27px'
                fontFamily='Lato'
                fontWeight='900'
                mb='15px'
                textTransform='uppercase'
              >
                engineering services
              </Typography>
              <Typography fontWeight='600'>
                <ul>
                  <li>Power Quality Testing</li>
                  <li>Short Circuit & Coordination Studies</li>
                  <li>Arc Flash Analysis</li>
                  <li>Substation & Pole Line Evaluation</li>
                  <li>Cable Termination & Splicing</li>
                  <li>Underground Fault Locating Primary & Secondary</li>
                  <li>Underground Cable/Pipe Locating Marketing & Mapping</li>
                  <li>Infrared Inspections</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </InnerContainer>
        {/* second double feature section */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            // my='40px'
            justifyContent='center'
          >
            <Box
              flex='1'
              alignSelf='center'
              // mr='10px'
              py='20px'
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
                transformer maintenance & repair
              </Typography>
              <Typography fontWeight='600'>
                <ul>
                  <li>Transformer Maintenance</li>
                  <li>Transformer Assembly/Decommission/Relocate</li>
                  <li>Recieving Inspections</li>
                  <li>Oil Diagnosis Analysis, Reclamation & Filtration</li>
                  <li>Vacuum Fill and Transformer Dry Out</li>
                  <li>Leak & Gasket Repair</li>
                  <li>Bushing Replacement</li>
                  <li>LTC Inspection</li>
                </ul>
              </Typography>
            </Box>

            <Box flex='1' width='100%' minWidth='350px'>
              <img src={fourth_image} alt='men working' width='100%' />
            </Box>
          </Box>
        </InnerContainer>
        {/* third double feature section */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            ustifyContent='center'
            // my='40px'
            columnGap='30px'
          >
            <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
              <img src={fifth_image} alt='red hose' width='100%' />
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
                mobile transformer oil processing
              </Typography>
              <Typography fontSize='17px' fontWeight='600' fontFamily='Lato'>
                MetroTek provides mobile transformer oil processing services
                using high-performance insulating oil processing machines to
                restore the performance and extend the service life of any make
                of oil-filled transformer.
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
            <img src={sixth_image} alt='testing truck' width='100%' />
          </Box>
        </InnerContainer>
      </MainContainer>
      <GreyGallery />
    </>
  );
}

export default TestingMaintenance;
