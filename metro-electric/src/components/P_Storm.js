import React from 'react';
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageList, ImageListItem, Box } from "@mui/material";

import img1 from "../images/Portfolio/StormRestoration/1.jpg";
import img2 from "../images/Portfolio/StormRestoration/2.jpg";
import img3 from "../images/Portfolio/StormRestoration/3.jpg";
import img4 from "../images/Portfolio/StormRestoration/4.jpg";
import img5 from "../images/Portfolio/StormRestoration/5.jpg";
import img6 from "../images/Portfolio/StormRestoration/6.jpg";
import img7 from "../images/Portfolio/StormRestoration/7.jpg";
import img8 from "../images/Portfolio/StormRestoration/8.jpg";
import img9 from "../images/Portfolio/StormRestoration/9.JPG";
import img10 from "../images/Portfolio/StormRestoration/10.JPG";
import img11 from "../images/Portfolio/StormRestoration/11.jpg";
import img12 from "../images/Portfolio/StormRestoration/12.jpg";
import img13 from "../images/Portfolio/StormRestoration/13.jpg";
import img14 from "../images/Portfolio/StormRestoration/14.jpg";
import img15 from "../images/Portfolio/StormRestoration/15.JPG";
import img16 from "../images/Portfolio/StormRestoration/16.JPG";
import img17 from "../images/Portfolio/StormRestoration/17.JPG";
import img18 from "../images/Portfolio/StormRestoration/18.JPG";
import img19 from "../images/Portfolio/StormRestoration/19.JPG";
import img20 from "../images/Portfolio/StormRestoration/20.JPG";
import img21 from "../images/Portfolio/StormRestoration/21.JPG";
import img22 from "../images/Portfolio/StormRestoration/22.jpg";
import img23 from "../images/Portfolio/StormRestoration/23.jpg";
import img24 from "../images/Portfolio/StormRestoration/24.jpg";
import img25 from "../images/Portfolio/StormRestoration/25.jpg";


function PStorm() {
  const imageData = [
    img1, img2 , img3,img4, img5, img6, img7, img8, img9,img10, img11, img12,img13, img14, img15, img16, img17,img18, img19, img20, img21, img22, img23, img24, img25
  ];
  const matches = useMediaQuery("(max-width:600px)")
  return (
    <MainContainer>
      <InnerContainer>
        <Box>
        <ImageList
            variant='masonry'
            cols={matches ? 1: 3}
            gap={8}
          >
            {imageData.map((item) => (
              <ImageListItem>
                <img src={item} alt='storm' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </InnerContainer>
    </MainContainer>
  );
}

export default PStorm
