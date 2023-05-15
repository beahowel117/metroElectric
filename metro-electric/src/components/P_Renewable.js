import React from 'react';
import MainContainer from './MainContainer';
import InnerContainer from './InnerContainer';
import { ImageList, ImageListItem, Box } from "@mui/material";
import img1 from "../images/Portfolio/RenewableEnergy.js/img1.jpg";
import img2 from "../images/Portfolio/RenewableEnergy.js/img2.jpg";
import img3 from "../images/Portfolio/RenewableEnergy.js/img3.jpg";
import img4 from "../images/Portfolio/RenewableEnergy.js/img4.jpg";
import img5 from "../images/Portfolio/RenewableEnergy.js/img5.jpg";
import img6 from "../images/Portfolio/RenewableEnergy.js/img6.jpg";
import img7 from "../images/Portfolio/RenewableEnergy.js/img7.jpg";


function PRenewable() {
  const imageData = [
    img1,img2,img3,img4,img7, img6,img5
  ]
  return (
    <MainContainer>
      <InnerContainer>
        <Box>
          <ImageList variant='masonry' cols={3} gap={8}>
            {imageData.map((item) => (
              <ImageListItem>
                <img src={item} alt='renewable energy' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </InnerContainer>
    </MainContainer>
  )
}

export default PRenewable
