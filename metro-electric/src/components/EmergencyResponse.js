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
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          emergency response
        </Typography>
      </Box>

      <MainContainer>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          width='100%'
        >
          <InnerContainer
            display='flex'
            justifyContent='center'
            flexDirection='column'
          >
          <Box maxWidth='1160px' margin='50px auto 50px auto'>
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
                fontSize='25px'
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
              fontWeight='700'
              fontFamily='Lato'
              maxWidth='800px'
              mb='45px'
            >
            When disaster strikes, a time-critical response is essential. Our
            on-call emergency power and restoration teams are available are
            available 24 hours a day, 7 days a week.
            <br />
            <br />
            We perform all forms of circuit, substation and distribution line
            restoration and rebuild services. Get your company back on-line
            quickly and safely.
          </Typography>

          </InnerContainer>



        {/* <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          flex='1'
          maxWidth='800px'
          //padding="40px"
          margin='0 auto'
        >


        </Box> */}
        <InnerContainer>
        <Box
          display='flex'
          my='40px'
          // padding='40px'
          // maxWidth='1000px'
          // margin='auto'
          flexWrap='wrap'
          // justifyContent='space-between'
        >
          <Box display='1' minWidth='480px' order={useMobile ? '2': '1'}>
          {/* <Box flex='1'> */}
            <img src={er_image_2}
              alt='emergency vehicles'
              // width='500px'
              width='100px'
            />
          </Box>
          <Box
            flex='1'
            // margin='90px 80px 0 0'
            alignSelf='center'
            ml='40px'
            py='20px'
            order={useMobile ? "1": "2"}
            >
            <Typography
              fontSize='17px'
              fontWeight='700'
              fontFamily='Lato'
              maxWidth='800px'
              mb='45px'
            >
              Our fleet is equipped with the most advanced equipment and our staff
              is expertly prepared to assess the situation, prioritize actions and
              strategically deploy resources for rapid restoration to prevent
              further damage and to save lives.


              We understand the importance of our clients’ power systems and we
              work hard to keep our clients operational while maintaining the
              highest standards of safety and quality.


              If you need emergency service for your commercial or industrial
              facility, please do not hesitate to call us at 888.249.4684 and
              follow the prompts.
            </Typography>
          </Box>
        </Box>
        </InnerContainer>

        <InnerContainer >
        {/* <Box maxWidth='1160px' margin='50px auto 50px auto'> */}
          {/* <AspectRatio objectFit='cover'> */}
            <img
              src={er_image_3}
              alt='emergency response'
              width="100%"
            />
          {/* </AspectRatio> */}
        {/* </Box> */}
        </InnerContainer>
        </Box>
        </MainContainer>
      <GreyGallery />
    </>
  );
}

export default EmergencyResponse;
