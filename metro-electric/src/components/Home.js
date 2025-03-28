import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import HOME from "../images/Services/construction.jpg";
import EIS from "../images/HomeCarousel/EIS-2(2x1).jpg";
import POWER from "../images/HomeCarousel/power-3(2x1).jpg";
import SOLUTIONS from "../images/HomeCarousel/solutions-4 (2x1).jpg";
import COMMUNITY from "../images/HomeCarousel/community-5(2x1).jpg";
// import Video from "../Videos/Metrotek.mov";
import Video from "../Videos/MetrotekWeb.mp4";
import Video2 from "../Videos/MetroTek_Promo_Foul_Rift.MP4";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";
import GreyGallery from "./GreyGallery";

import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const useMobile = useMediaQuery("(max-width:600px)");
  const moveDots = useMediaQuery("(min-width:1100px)");

  const carouselContent = [
    { img: HOME, text: "Over 50 Years of Exceptional Electrical Solutions" },
    { img: EIS, text: "Electrical Infrastructure Specialists" },
    { img: POWER, text: "Distributing Power Wherever It Is Needed" },
    { img: SOLUTIONS, text: "Delivering Infrastructure Solutions Nationwide" },
    {
      img: COMMUNITY,
      text: "Serving Our Community With 24/7 Emergency Services",
    },
  ];

  // const zoomInOut = () => {
  //   let selectedStyle = {
  //     position: "absolute",
  //     display: "block",
  //     animation: "move 5s ease-in",
  //   };
  //   return {
  //     selectedStyle: {
  //       ...selectedStyle,
  //     },
  //   };
  // };

  return (
    <Box>
      <Carousel
        // animationHandler={zoomInOut}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        stopOnHover={false}
        interval='7000'
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            color: "white",
            cursor: "pointer",
            marginBottom: moveDots ? "40px" : undefined,
          };
          const style = isSelected
            ? {
                ...defStyle,
                color: "white",
                backgroundColor: "rgb(255,255,255,0.9)",
                borderRadius: "50%",
              }
            : { ...defStyle };

          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role='button'
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <Box display='flex'>
                <Box
                  width='15px'
                  height='15px'
                  border='2px solid white'
                  borderRadius='50%'
                />
              </Box>
            </span>
          );
        }}
      >
        {carouselContent.map(({ img, text, idx }) => (
          <div className='image-container' key={idx}>
            <img
              src={img}
              alt='carousel images'
              width='100px'
              key={text.length}
            />

            <Typography
              color='#f5f5f5'
              fontWeight='600'
              className='lineUpCarousel'
              key={text.length}
              fontSize={{
                xl: 45,
                lg: 35,
                md: 30,
                sm: 25,
                xs: 0,
              }}
              maxWidth={{ sm: "580px", md: "100%" }}
            >
              {text}
            </Typography>
          </div>
        ))}
      </Carousel>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        maxWidth='800px'
        margin='0 auto'
      >
        <Box position='relative' mb='50px'>
          <Typography
            fontSize='22px'
            color='#244ba6'
            fontWeight='900'
            fontFamily='Lato'
            textAlign='center'
            mt='50px'
          >
            WE DESIGN, CONSTRUCT, TEST AND MAINTAIN THE ELECTRICAL
            INFRASTRUCTURE THAT POWERS AMERICA’S ECONOMY.
          </Typography>

          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            padding='20px'
            mb='40px'
          >
            <Box
              height='3px'
              backgroundColor='#244ba6'
              width='60%'
              borderRadius='10px'
              mb='15px'
            />
            <Typography
              fontSize='19px'
              fontFamily='Lato'
              textAlign='center'
              mb='50px'
            >
              For over fifty years, MetroTek has delivered electricity
              infrastructure solutions to hundreds of industrial, commercial &
              utility clients of all sizes.
            </Typography>

            {useMobile ? (
              <Box display='flex' justifyContent='center' px='30px'>
                <Typography
                  fontSize='17px'
                  fontFamily='Lato'
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Box display='flex' width='100%'>
                    <Box flex='1' className='mobileLists' mr='40px'>
                      <li>Emergency Service</li>
                      <li>Interconnect </li>
                      <li>Equipment Design</li>
                      <li>Engineering</li>
                      <li>Construction</li>
                    </Box>
                    <Box flex='1' className='mobileLists'>
                      <li>Maintenance</li>
                      <li>Repair</li>
                      <li>Testing</li>
                      <li>Monitoring</li>
                      <li>High Voltage Power Systems</li>
                    </Box>
                  </Box>
                </Typography>
              </Box>
            ) : (
              <Typography
                fontSize='19px'
                fontFamily='Lato'
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  High Voltage Power Systems ● Interconnect ● Equipment Design
                </div>
                <div>Engineering ● Construction ● Maintenance ● Repair</div>
                <div>Testing ● Monitoring ● Emergency Service</div>
              </Typography>
            )}

            <Box
              height='3px'
              backgroundColor='#244ba6'
              width='60%'
              borderRadius='10px'
              mt='15px'
            />
          </Box>

          <Box padding='10px'>
            <video
              controls
              width='100%'
              autoplay={false}
              muted
              loop={true}
              preload='metadata'
              playsInline={true}
            >
              <source src={Video + "#t=2"} type='video/mp4' />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </Box>
          <br></br>
          <Box padding='10px'>
            <video
              controls
              width='100%'
              autoplay={false}
              muted
              loop={true}
              preload='metadata'
              playsInline={true}
            >
              <source src={Video2 + "#t=2"} type='video/mp4' />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </Box>
        </Box>
      </Box>
      <GreyGallery />
    </Box>
  );
}

export default Home;
