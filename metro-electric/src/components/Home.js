import React, { useRef } from "react";
import Box from "@mui/material/Box";
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
    { img: HOME },
    { img: EIS },
    { img: POWER },
    { img: SOLUTIONS },
    { img: COMMUNITY },
  ];

  const fadeAnimationHandler = (state) => {
    const transitionTime = "1s";
    const transitionTimingFunction = "move ease forward";

    let slideStyle = {
      width: "100%",
      animation: "move 5s ease ",

      // transitionTimingFunction: transitionTimingFunction,
      // msTransitionTimingFunction: transitionTimingFunction,
      // MozTransitionTimingFunction: transitionTimingFunction,
      // WebkitTransitionTimingFunction: transitionTimingFunction,
      // OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };

      return {
        slideStyle,
        selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
        prevStyle: { ...slideStyle },
      };
    }
  };

  return (
    <Box>
      <Carousel
        animationHandler={fadeAnimationHandler}
        showThumbs={false}
        infiniteLoop
        autoPlay
        display='flex'
        justify
        content='center'
        alignItems='center'
      >
        {carouselContent.map(({ img }) => (
          <div className='image-wrap'>
            <img src={img} alt='' width='120%' />
            <p className='home'>OVER 45 YEARS</p>
          </div>
        ))}
      </Carousel>

      <GreyGallery />
      <Footer />
    </Box>
  );
}

export default Home;
