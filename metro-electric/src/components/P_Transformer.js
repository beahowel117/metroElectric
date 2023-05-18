import React from 'react';
import { ImageList, ImageListItem, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import img1 from "../images/Portfolio/Transformer/1.jpg";
import img2 from "../images/Portfolio/Transformer/2.jpg";
import img3 from "../images/Portfolio/Transformer/3.jpg";
import img4 from "../images/Portfolio/Transformer/4.jpg";
import img5 from "../images/Portfolio/Transformer/5.jpg";
import img6 from "../images/Portfolio/Transformer/6.jpg";
import img7 from "../images/Portfolio/Transformer/7.jpg";
import img8 from "../images/Portfolio/Transformer/8.jpg";
import img9 from "../images/Portfolio/Transformer/9.jpg";


function PTransformer() {
  const imageData = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
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
                <img src={item} alt='transformers' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </InnerContainer>
  </MainContainer>
  )
}

export default PTransformer
