import React from "react";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import featuredWork from "../images/FeaturedWork/featuredWork(2000X1000).jpg";
import "../index.css";
import Footer from "./Footer";

function FeaturedWork() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  return (
    <>
      <Box className='image-wrap'>
        <img src={featuredWork} alt='Contact' style={styles.responsiveHero} />
      </Box>
      <Footer />
    </>
  );
}

export default FeaturedWork;
