import React from "react";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import { ImageList, ImageListItem, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import img1 from "../images/Portfolio/CEA/1.09.JPG";
import img2 from "../images/Portfolio/CEA/1.10.jpg";
import img3 from "../images/Portfolio/CEA/1.11.JPG";
import img4 from "../images/Portfolio/CEA/1.12.JPG";
import img5 from "../images/Portfolio/CEA/1.13.jpg";
import img6 from "../images/Portfolio/CEA/1.14.JPG";
import img7 from "../images/Portfolio/CEA/1.15.jpg";
import img8 from "../images/Portfolio/CEA/1.16.jpg";
import img9 from "../images/Portfolio/CEA/1.17.png";
import img10 from "../images/Portfolio/CEA/1.17b.png";
import img11 from "../images/Portfolio/CEA/1.17c.jpg";
import img12 from "../images/Portfolio/CEA/1.17d.png";
import img13 from "../images/Portfolio/CEA/1.17e.png";
import img14 from "../images/Portfolio/CEA/1.18.jpg";
import img15 from "../images/Portfolio/CEA/1.19.JPG";
import img16 from "../images/Portfolio/CEA/1.20.JPG";
import img17 from "../images/Portfolio/CEA/1.21.jpg";
import img18 from "../images/Portfolio/CEA/1.22.JPG";
import img19 from "../images/Portfolio/CEA/1.23.jpg";
import img20 from "../images/Portfolio/CEA/1.24.jpg";
import img21 from "../images/Portfolio/CEA/1.21.jpg";
import img22 from "../images/Portfolio/CEA/1.22.JPG";
import img23 from "../images/Portfolio/CEA/1.23.jpg";
import img24 from "../images/Portfolio/CEA/1.24.jpg";
import img25 from "../images/Portfolio/CEA/1.25.jpg";
import img26 from "../images/Portfolio/CEA/2.01.jpeg";
import img27 from "../images/Portfolio/CEA/2.02.jpeg";
import img28 from "../images/Portfolio/CEA/2.02b.jpeg";
import img29 from "../images/Portfolio/CEA/2.03.jpeg";
import img30 from "../images/Portfolio/CEA/2.03b.jpeg";
import img31 from "../images/Portfolio/CEA/2.03c.jpeg";
import img32 from "../images/Portfolio/CEA/2.04.jpeg";
import img33 from "../images/Portfolio/CEA/2.05.jpeg";
import img34 from "../images/Portfolio/CEA/2.06.jpeg";
import img35 from "../images/Portfolio/CEA/2.06b.jpeg";
import img36 from "../images/Portfolio/CEA/2.07.jpeg";
import img37 from "../images/Portfolio/CEA/2.08.jpeg";
import img38 from "../images/Portfolio/CEA/2.08b.jpeg";
import img39 from "../images/Portfolio/CEA/2.09.jpeg";
import img40 from "../images/Portfolio/CEA/2.10.jpeg";
import img41 from "../images/Portfolio/CEA/2.10b.jpeg";
import img42 from "../images/Portfolio/CEA/2.10c.jpeg";
import img43 from "../images/Portfolio/CEA/2.10d.jpeg";
import img44 from "../images/Portfolio/CEA/2.10e.jpeg";
import img45 from "../images/Portfolio/CEA/2.10f.jpeg";
import img46 from "../images/Portfolio/CEA/2.20.jpeg";
import img47 from "../images/Portfolio/CEA/2.21.jpeg";

const imgArray = [
  img1,
  img2,
  img47,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img3,
  img43,
  img44,
  img45,
  img46,
];


function CEA() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <MainContainer>
      <InnerContainer>
        <Box>
        <ImageList
            variant='masonry'
            cols={matches ? 1: 3}
            gap={8}
          >
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

export default CEA;
