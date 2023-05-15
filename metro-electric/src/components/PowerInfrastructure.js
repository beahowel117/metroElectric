import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from "react-responsive-carousel";

import GreyGallery from "./GreyGallery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

import pi_cover from "../images/Services/pi-cover(2000x1000).jpg";
import first_image from "../images/Services/pi-1(2000x1000).jpg";
import second_image from "../images/Services/pi-2(1024x768).jpg";
import third_image from "../images/Services/pi-3(2000x1000).jpg";
import slider_1 from "../images/Services/pi-slider1(2000x1000).jpg";
import slider_2 from "../images/Services/pi-slider2(2000x1000).jpg";
import mini_slider1_1 from "../images/Services/pi-minislider1.1(1024x768).jpg";
import mini_slider1_2 from "../images/Services/pi-minislider1.2(1024x768) (1).jpg";
import mini_slider1_3 from "../images/Services/pi-minislider1.3(1024x768).jpg";
import mini_slider2_1 from "../images/Services/pi-minislider2.1(1024x768).jpg";
import mini_slider2_2 from "../images/Services/pi-minislider2.2(1024x768).jpg";
import mini_slider2_3 from "../images/Services/pi-minislider2.3(1024x768).jpg";
import mini_slider2_4 from "../images/Services/pi-minislider2.4(1024x768).jpg";
import mini_slider2_5 from "../images/Services/pi-minislider2.5(1024x768).jpg";
import pi_slider2 from "../images/Services/pi-slider2(2000x1000).jpg";
import "../index.css";

function PowerInfrastructure() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  const useMobile = useMediaQuery("(max-width:780px)");
  const forceWrap = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img
            src={pi_cover}
            alt='Power Infrastructure'
            style={styles.responsiveHero}
          />
        </Box>
        {/* <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          power infrastructure
        </Typography> */}
      </Box>
      <MainContainer>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          width='100%'
          // px='45px'
        >
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
                mt='55px'
                maxWidth='500px'
              >
                ELECTRICAL INFRASTRUCTURE
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
              fontWeight='700'
              fontFamily='Lato'
              maxWidth='800px'
              mb='45px'
            >
              MetroTek provides electrical infrastructure construction services
              to commercial, industrial, municipal, and utility clients.
              <br />
              <br />
              As a full service electrical contractor, our diverse and scalable
              workforce of electrical professionals and engineers enables us to
              support a wide range of specialized services that includes all
              facets of electrical construction, maintenance, renovation, and
              repair in accordance with our clients’ intensive scheduling and
              budget requirements.
              <br />
              <br />
              Contact us to find out how MetroTek can provide your next
              electrical project with management, design/build, engineering, and
              construction services.
            </Typography>
          </InnerContainer>
          <InnerContainer>
            <img src={first_image} alt='Electrical Truck' width='100%' />
          </InnerContainer>
          <InnerContainer>
            <Box display='flex' flexWrap='wrap' my='40px'>
              <Box flex='1' order={useMobile ? "2" : "1"} minWidth='350px'>
                <Carousel
                  autoPlay
                  infiniteLoop
                  showArrows
                  showThumbs={false}
                  showIndicators={false}
                >
                  <img src={second_image} alt='three trucks' width='100%' />

                  <img src={mini_slider2_5} alt='three trucks' width='100%' />
                </Carousel>
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
                  color='#244ba6'
                  textAlign='left'
                  fontSize='25px'
                  fontFamily='Lato'
                  fontWeight='900'
                  mb='15px'
                >
                  OVERHEAD POWER DISTRIBUTION
                </Typography>
                <Typography fontSize='17px' fontWeight='700' fontFamily='Lato'>
                  MetroTek’s overhead line division specializes in pole
                  installation, line siting and staking, wire stringing,
                  reconductoring, emergency repair, live maintenance and all
                  related services.
                </Typography>
              </Box>
            </Box>
          </InnerContainer>
          <InnerContainer>
            <img src={pi_slider2} alt='wirring' width='100%' />
          </InnerContainer>
          <InnerContainer>
            <Box
              display='flex'
              flexWrap='wrap'
              my='40px'
              justifyContent='center'
            >
              <Box
                flex='1'
                alignSelf='center'
                mr='10px'
                py='20px'
                minWidth='350px'
              >
                <Typography
                  color='#244ba6'
                  textAlign='left'
                  fontSize='25px'
                  fontFamily='Lato'
                  fontWeight='900'
                  mb='15px'
                >
                  UNDERGROUND POWER DISTRIBUTION
                </Typography>
                <Typography fontSize='17px' fontWeight='700' fontFamily='Lato'>
                  MetroTek’s underground electrical distribution expertise
                  includes fault location & repair, directional drilling,
                  trenching, manhole & conduit installation, cable pulling,
                  splicing & termination and all related services.
                </Typography>
              </Box>

              <Box flex='1' width='100%' minWidth='350px'>
                <Carousel
                  autoPlay
                  infiniteLoop
                  showArrows
                  showThumbs={false}
                  showIndicators={false}
                >
                  <img src={mini_slider1_2} alt='pvc pipes' width='100%' />

                  <img src={mini_slider1_3} alt='tracktor' width='100%' />

                  <img src={mini_slider1_1} alt='open sewer' width='100%' />
                </Carousel>
              </Box>
            </Box>
          </InnerContainer>
          <InnerContainer>
            <img src={third_image} alt='electric transformers' width='100%' />
          </InnerContainer>
          <InnerContainer>
            <Box
              display='flex'
              flexWrap='wrap'
              my='40px'
              justifyContent='center'
            >
              <Box flex='1' order={useMobile ? "2" : "1"} maxWidth='500px'>
                {console.log({ forceWrap })}
                <Carousel
                  autoPlay
                  infiniteLoop
                  showArrows
                  showThumbs={false}
                  showIndicators={false}
                >
                  <img
                    src={mini_slider2_1}
                    alt='large spools of wire'
                    width='100%'
                  />

                  <img
                    src={mini_slider2_2}
                    alt='towers of electrical equipment'
                    width='100%'
                  />

                  <img
                    src={mini_slider2_3}
                    alt='dirt road with electrical equipment'
                    width='100%'
                  />

                  <img
                    src={mini_slider2_4}
                    alt='18 wheeler unloading'
                    width='100%'
                  />
                </Carousel>
              </Box>
              <Box
                flex={!forceWrap ? "1" : "100%"}
                ml='40px'
                py='20px'
                order={useMobile ? "1" : "2"}
                textAlign='justify'
              >
                <Typography
                  color='#244ba6'
                  textAlign={forceWrap ? "center" : "left"}
                  fontSize='25px'
                  fontFamily='Lato'
                  fontWeight='900'
                  mb='15px'
                >
                  SUBSTATIONS
                </Typography>
                <Typography
                  fontSize='17px'
                  fontWeight='700'
                  fontFamily='Lato'
                  lineHeight='1.4'
                >
                  MetroTek’s team has extensive hands-on experience designing,
                  constructing, renovating and upgrading high-voltage
                  substations and power systems including related foundation
                  work, equipment selection and procurement, and plant or line
                  connections.
                  <br />
                  <br />
                  Power system services include turn-key substation
                  installations, pole line construction, primary distribution
                  transformer replacements, insulator repair, and specialty
                  primary cable splicing.
                </Typography>
                <Typography
                  fontSize='17px'
                  fontWeight='700'
                  fontFamily='Lato'
                  lineHeight='1.4'
                >
                  <ul>
                    <li>
                      Substation design, construction, upgrades, maintenance
                    </li>
                    <li>Substations & power systems to 345KV</li>
                    <li>Turn-key substation installations</li>
                    <li>Pole line construction</li>
                    <li>
                      Primary distribution transformer replacements &
                      maintenance
                    </li>
                    <li>Specialty primary cable splicing & terminations</li>
                  </ul>
                </Typography>
              </Box>
            </Box>
          </InnerContainer>
        </Box>
      </MainContainer>
      <GreyGallery />
    </>
  );
}

export default PowerInfrastructure;
