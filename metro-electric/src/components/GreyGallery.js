import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import PIC from "../images/ServicesDropDown/PIC(1024x768).jpg";
import TandM from "../images/ServicesDropDown/T&M(1024x768).JPG";
import ER from "../images/ServicesDropDown/ER(1024x768).jpg";
import CEA from "../images/ServicesDropDown/CEA(1024x768).JPG";
import RE from "../images/ServicesDropDown/RE(1024x768).jpg";

function GreyGallery() {
  const services = [
    {
      img: PIC,
      text: "Power Infrastructure Construction",
    },
    {
      img: TandM,
      text: "Testing & Maintenance",
    },
    {
      img: ER,
      text: "Emergency Response",
    },
    {
      img: CEA,
      text: "Controlled Environment Agriculture",
    },
    {
      text: "POWERING AMERICA’S INFRASTRUCTURE",
    },
    {
      img: RE,
      text: "Renewable Energy",
    },
  ];
  return (
    <Box backgroundColor='#aba8a7' display='flex' justifyContent='center'>
      <Box
        display='flex'
        flexWrap='wrap'
        maxWidth='1100px'
        justifyContent='center'
        gap='10px'
        py='40px'
      >
        {services.map(({ img, text }) =>
          !img ? (
            <Card
              variant='outlined'
              sx={{ width: 320, backgroundColor: "#aba8a7", border: "none" }}
            >
              <Typography
                textColor='#2f2d85'
                fontWeight='800'
                fontSize='30px'
                textAlign='center'
                margin='auto'
              >
                {text}
              </Typography>
            </Card>
          ) : (
            <Card
              variant='outlined'
              sx={{ width: 320, backgroundColor: "#4d4d4d" }}
            >
              <CardOverflow>
                <AspectRatio ratio='5/4'>
                  <img src={img} loading='lazy' alt='' />
                </AspectRatio>
              </CardOverflow>

              <Typography
                textColor='white'
                fontWeight='800'
                fontSize='20px'
                textAlign='center'
                margin='auto'
                padding='5px'
              >
                {text}
              </Typography>
            </Card>
          )
        )}
      </Box>
    </Box>
  );
}

export default GreyGallery;
