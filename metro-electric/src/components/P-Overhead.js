import React from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";
import img1s from "../images/OverheadConstruction/01s.JPG";
import img2s from "../images/OverheadConstruction/02s.jpg";
import img3 from "../images/OverheadConstruction/03.jpg";
import img4s from "../images/OverheadConstruction/04s.jpg";
import img5 from "../images/OverheadConstruction/05.jpg";
import img6 from "../images/OverheadConstruction/06.jpg";
import img7 from "../images/OverheadConstruction/07.jpg";
import img8 from "../images/OverheadConstruction/08.JPG";
import img9 from "../images/OverheadConstruction/09.JPG";
import img10s from "../images/OverheadConstruction/10s.JPG";
import img11 from "../images/OverheadConstruction/11.jpg";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

function Overhead() {
  const imgArray = [
    img2s,
    img3,
    img4s,
    img5,
    img6,
    img1s,
    img7,
    img8,
    img1s,
    img9,
    img10s,
    img11,
  ];
  return (
    <MainContainer>
      <InnerContainer>
        <Box>
          <ImageList variant='masonry' cols={3} gap={8}>
            {imgArray.map((item) => (
              <ImageListItem>
                <img src={item} alt='electric overhead' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </InnerContainer>
    </MainContainer>
  );
}

export default Overhead;
