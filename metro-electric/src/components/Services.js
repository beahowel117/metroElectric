import React from 'react';
import Box from "@mui/material/Box";
import servicesHome from "../images/Services/servicesHome.jpg"

/**THis is the grey section with the 5 clickable photos used throughout the platform */
function Services() {
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
    <img src={servicesHome} alt='Contact' style={styles.responsiveHero}/>
  </Box>
  )
}

export default Services
