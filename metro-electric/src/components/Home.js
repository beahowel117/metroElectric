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
import Footer from "./Footer";

function Home() {
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

  const fadeAnimationHandler = (props, state) => {
    let slideStyle = {};

    let selectedStyle = {
      position: "absolute",
      display: "block",
      minHeight: "150%",
      maxWidth: "150%",
      width: "150%",
      top: -120,
      right: -260,
      left: -260,
      bottom: -50,
      animation: "move 3s ease ",
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        ...selectedStyle,
      },
      prevStyle: {
        ...slideStyle,
      },
    };
  };

  return (
    <Box>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showIndicators={true}
        animationHandler={fadeAnimationHandler}
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
            <img src={img} alt='' width='100%' />

            <Typography className='lineUp' fontSize='40px'>
              {text}
            </Typography>
          </div>
        ))}
      </Carousel>

      <GreyGallery />
      <Footer />
    </Box>
  );
}

export default Home;
