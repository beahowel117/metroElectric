import React from 'react';
import Nav from './Nav';
import Box from "@mui/material/Box";
import featuredWork from '../images/FeaturedWork/featuredWork(2000X1000).jpg'

function FeaturedWork() {

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
    <img src={featuredWork} alt='Contact' style={styles.responsiveHero}/>
  </Box>
  )
}

export default FeaturedWork
