import React from "react";
import { Box, Typography, imageListItemClasses } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";

import ca_pipes from "../images/Services/ca_pipes.jpeg";
import ca_cover from "../images/Services/ca_cover.jpg";
import ca_slider_1 from "../images/Services/ca_slider1.jpg";
import ca_slider_2 from "../images/Services/ca_slider2.jpeg";
import ca_slider_3 from "../images/Services/ca_slider3.jpeg";
import ca_slider_4 from "../images/Services/ca_slider4.jpeg";

function ControlledAgriculture() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  const carousel_1_Content = [
    { img: ca_slider_1},
    { img: ca_slider_2 }
  ];

  const carousel_2_Content = [
    { img: ca_slider_3},
    { img: ca_slider_4}
  ];

  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img
            src={ca_cover}
            alt='Controlled Agriculture'
            style={styles.responsiveHero}
          />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          controlled environmental agriculture
        </Typography>
      </Box>

      <Box>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showIndicators={true}
          maxWidth="600px"
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 20,
              color: "white",
              cursor:"pointer"
            }
            const style = isSelected
              ? {
                ...defStyle,
                color: "white",
                backgroundColor: "white",
                borderRadius: "50%"
              }
              : {...defStyle};

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
              )
          }}
        >
          {carousel_1_Content.map(({img}) => (
            <div>
              <img src={img}
              alt='controlled agriculture'
              width='90px'
              />
            </div>
          ))}
        </Carousel>
      </Box>

      <Box>
        <h1>controlled environment agriculture</h1>
        <h3>Design-Build Services</h3>
        <Typography>
          We have designed, engineered, built and tested energy delivery systems
          for some of the largest controlled environment agriculture facilities
          in North America.
        </Typography>
        <Typography>
          Our portfolio of work is second to none and has included individual
          facilities in excess of 3 million square feet in size with electrical
          loads in excess of 50 Megawatts.
        </Typography>
        <img src={ca_pipes} alt='pipes' width='600px' />
      </Box>

      <Box>
      <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showIndicators={true}
          maxWidth="600px"
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 20,
              color: "white",
              cursor:"pointer"
            }
            const style = isSelected
              ? {
                ...defStyle,
                color: "white",
                backgroundColor: "white",
                borderRadius: "50%"
              }
              : {...defStyle};

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
              )
          }}
        >
          {carousel_2_Content.map(({img}) => (
            <div>
              <img src={img}
              alt='controlled agriculture'
              width='90px'
              />
            </div>
          ))}
        </Carousel>

      </Box>
      <GreyGallery />
      <Footer />
    </>
  );
}

export default ControlledAgriculture;
