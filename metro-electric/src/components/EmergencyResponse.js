import React from 'react';
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

import er_cover from "../images/Services/er_cover(2000x1000).jpg";
import er_image_1 from "../images/Services/er_image_1(2000X1000).jpg";
import er_image_2 from "../images/Services/er_image_2.jpg";
import er_image_3 from "../images/Services/er_image_3(2000X1000).jpg";

function EmergencyResponse() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
  };

  return (
    <>
       {/* <Box
      className='image-container'
      >
        <Box className='image-wrap'>
          <img src={er_cover} alt='Emergency Response' style={styles.responsiveHero} />
        </Box>
        <Typography
            className='lineUp'
            fontSize='40px'
            fontWeight='600'
        >
          emergency response
        </Typography>
      </Box>

      <Box>
        <img src={er_image_1} alt="emergency response" />
      </Box>

     <Box>
        <h1>24/7 emergency response</h1>
        <Typography>
          When disaster strikes, a time-critical response is essential. Our on-call emergency power and restoration teams are available are available 24 hours a day, 7 days a week.
        </Typography>
        <Typography>
          We perform all forms of circuit, substation and distribution line restoration and rebuild services. Get your company back on-line quickly and safely.
        </Typography>

     </Box>
     <Box>
        <img src={er_image_2}
          alt="emergency vehicles"
          width="600px"
        />
        <Typography>
          Our fleet is equipped with the most advanced equipment and our staff is expertly prepared to assess the situation, prioritize actions and strategically deploy resources for rapid restoration to prevent further damage and to save lives.
        </Typography>
        <Typography>
          We understand the importance of our clients’ power systems and we work hard to keep our clients operational while maintaining the highest standards of safety and quality.
        </Typography>
        <Typography>
          If you need emergency service for your commercial or industrial facility, please do not hesitate to call us at 888.249.4684 and follow the prompts.
        </Typography>
     </Box>
     <Box>
        <img src={er_image_3}
        alt="emergency response"
        width="930px"
        />
     </Box> */}
      <GreyGallery />
      <Footer />
    </>
  )
}

export default EmergencyResponse;

