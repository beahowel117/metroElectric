import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import HOME from "../images/HomeCarousel/home-1(2x1).jpg";
import EIS from "../images/HomeCarousel/EIS-2(2x1).jpg";
import POWER from "../images/HomeCarousel/power-3(2x1).jpg";
import SOLUTIONS from "../images/HomeCarousel/solutions-4 (2x1).jpg";
import COMMUNITY from "../images/HomeCarousel/community-5(2x1).jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";
import GreyGallery from "./GreyGallery";

import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const useMobile = useMediaQuery("(max-width:600px)");

  const carouselContent = [
    { img: HOME, text: "OVER 45 YEARS OF EXCEPTIONAL ELECTRICAL SOLUTIONS" },
    { img: EIS, text: "ELECTRICAL INFRASTRUCTURE SPECIALISTS" },
    { img: POWER, text: "DISTRIBUTING POWER WHEREVER IT IS NEEDED" },
    { img: SOLUTIONS, text: "DELIVERING INFRASTRUCTURE SOLUTIONS NATIONWIDE" },
    {
      img: COMMUNITY,
      text: "SERVING OUR COMMUNITY WITH 24/7 EMERGENCY SERVICES",
    },
  ];

  const zoomInOut = () => {
    let selectedStyle = {
      position: "absolute",
      display: "block",
      minHeight: "135%",
      maxWidth: "150%",
      width: "135%",
      right: "-25%",
      bottom: "-25%",
      animation: "move 4s ease ",
    };
    return {
      selectedStyle: {
        ...selectedStyle,
      },
    };
  };
  const src =
    "https://metroelectrical.com/wp-content/uploads/2022/12/Metrotek-Promo.mov";
  return (
    <Box>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showIndicators={true}
        animationHandler={zoomInOut}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            color: "white",
            cursor: "pointer",
          };
          const style = isSelected
            ? {
                ...defStyle,
                color: "white",
                backgroundColor: "white",
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
        {carouselContent.map(({ img, text }) => (
          <div className='image-container'>
            <img src={img} alt='carousel images' width='100px' />
            <Typography
              className='lineUp'
              fontSize='30px'
              color='#f5f5f5'
              fontWeight='600'
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
              For over four decades, MetroTek has delivered electricity
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
                      <li>Equidivment Design</li>
                      <li>Engineering</li>
                      <li>Construction</li>
                    </Box>
                    <Box flex='1' className='mobileLists'>
                      <li>Maintenance</li>
                      <li>Repair</li>
                      <li>Testing</li>
                      <li>Monitoring</li>
                      <li>High Voltage power Systems</li>
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
                  High Voltage power Systems ● Interconnect ● Equidivment Design
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
              autoplay='true'
              muted
              loop='true'
              preload='auto'
              playsInline='true'
            >
              <source src={src} type='video/mp4' />
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
