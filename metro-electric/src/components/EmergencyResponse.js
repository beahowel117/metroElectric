import React from "react";
import GreyGallery from "./GreyGallery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import er_cover from "../images/Services/er_cover(2000x1000).jpg";
import er_image_1 from "../images/Services/er_image_1(2000X1000).jpg";
import er_image_2 from "../images/Services/er_image_2.jpg";
import er_image_3 from "../images/Services/er_image_3(2000X1000).jpg";
import { AspectRatio } from "@mui/joy";

function EmergencyResponse() {
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
            src={er_cover}
            alt='Emergency Response'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography
          className='lineUp'
          color='#f5f5f5'
          fontWeight='600'
          sx={{ animationIterationCount: "1" }}
          fontSize={{
            lg: 40,
            md: 30,
            sm: 25,
            xs: 25,
          }}
          maxWidth={{ sm: "580px", md: "900px" }}
        >
          Emergency Response
        </Typography>
      </Box>

      <MainContainer>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          width='100%'
          mt='55px'
          mb='30px'
        >
          <InnerContainer>
            <Box>
              <AspectRatio objectFit='cover'>
                <img src={er_image_1} alt='emergency response' />
              </AspectRatio>
            </Box>

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
                mt='55px'
                maxWidth='500px'
              >
                24/7 EMERGENCY RESPONSE
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
              mb='45px'
            >
              When disaster strikes, a time-critical response is essential. Our
              on-call emergency power and restoration teams are available are
              available <strong>24 hours a day, 7 days a week.</strong>
              <br />
              <br />
              We perform all forms of circuit, substation and distribution line
              restoration and rebuild services. Get your company back on-line
              quickly and safely.
            </Typography>
          </InnerContainer>

          <InnerContainer>
            <Box display='flex' my='40px' flexWrap='wrap' columnGap='30px'>
              <Box flex='1' minWidth='350px' order={useMobile ? "2" : "1"}>
                <img src={er_image_2} alt='emergency vehicles' width='100%' />
              </Box>
              <Box
                flex='1'
                alignSelf='center'
                py='20px'
                order={useMobile ? "1" : "2"}
                minWidth='350px'
              >
                <Typography
                  fontSize='17px'
                  fontWeight='600'
                  fontFamily='Lato'
                  maxWidth='800px'
                  mb='45px'
                >
                  Our fleet is equipped with the most advanced equipment and our
                  staff is expertly prepared to assess the situation, prioritize
                  actions and strategically deploy resources for rapid
                  restoration to prevent further damage and to save lives. We
                  understand the importance of our clients’ power systems and we
                  work hard to keep our clients operational while maintaining
                  the highest standards of safety and quality. If you need
                  emergency service for your commercial or industrial facility,
                  please do not hesitate to call us at{" "}
                  <span style={{ "font-weight": "900", "font-size": "18px" }}>888.249.4684</span> and follow the prompts.
                </Typography>
              </Box>
            </Box>
          </InnerContainer>

          <InnerContainer>
            <img src={er_image_3} alt='emergency response' width='100%' />
          </InnerContainer>
        </Box>
      </MainContainer>
      <GreyGallery />
    </>
  );
}

export default EmergencyResponse;
