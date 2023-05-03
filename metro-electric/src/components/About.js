import React from 'react';
import Box from "@mui/material/Box";
import aboutHome from "../images/About/AboutHome(2000X1000).jpg"

function About() {
  const styles = {
    responsiveHero: {
      width: '100%',
      height: 'auto',
      //backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }
  return (
    <Box position='absolute' top='0'>
    <img src={aboutHome} alt='Contact' style={styles.responsiveHero}/>
  </Box>

  )
}

export default About
