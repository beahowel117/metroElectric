import React, { useRef } from "react";
import Box from "@mui/material/Box";
import HOME from "../images/HomeCarousel/home-1(2x1).jpg";
import EIS from "../images/HomeCarousel/EIS-2(2x1).jpg";
import POWER from "../images/HomeCarousel/power-3(2x1).jpg";
import SOLUTIONS from "../images/HomeCarousel/solutions-4 (2x1).jpg";
import COMMUNITY from "../images/HomeCarousel/community-5(2x1).jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";
import GreyGallery from "./GreyGallery";

function Home() {
  return (
    <Box>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div className='image'>
          <img src={HOME} alt='' />
          <p className='home'>OVER 45 YEARS</p>
        </div>
        <div className='image'>
          <img src={EIS} alt='' />
          <p className='eis'>Legend 1</p>
        </div>
        <div className='image'>
          <img src={POWER} alt='' />
          <p className='power'>Legend 3</p>
        </div>
        <div className='image'>
          <img src={SOLUTIONS} alt='' />
          <p className='legend'>Legend 3</p>
        </div>
        <div className='image'>
          <img src={COMMUNITY} alt='' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
      <GreyGallery />
    </Box>
  );
}

export default Home;
