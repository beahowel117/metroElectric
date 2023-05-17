import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Favorite from "@mui/icons-material/Favorite";
import { Box, Button } from "@mui/material";
import PIC from "../images/ServicesDropDown/PIC(1024x768).jpg";
import TandM from "../images/ServicesDropDown/T&M(1024x768).JPG";
import ER from "../images/ServicesDropDown/ER(1024x768).jpg";
import CEA from "../images/ServicesDropDown/CEA(1024x768).JPG";
import RE from "../images/ServicesDropDown/RE(1024x768).jpg";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

function GreyGallery() {
  const services = [
    {
      img: PIC,
      text: "Power Infrastructure Construction",
      link: "/services/power-infrastructure",
    },
    {
      img: TandM,
      text: "Testing & Maintenance",
      link: "/services/testing-maintenance",
    },
    {
      img: ER,
      text: "Emergency Response",
      link: "/services/emergency-response",
    },
    {
      img: CEA,
      text: "Controlled Environment Agriculture",
      link: "/services/controlled-environment-agriculture",
    },
    {
      text: "POWERING AMERICA’S INFRASTRUCTURE",
      link: "/",
    },
    {
      img: RE,
      text: "Renewable Energy",
      link: "/services/emergency-response",
    },
  ];

  return (
    <Box
      backgroundColor='#aba8a7'
      display='flex'
      justifyContent='center'
      width='100%'
      boxShadow='5px 10px 8px #888888'
    >
      <InnerContainer>
        <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
          gap='10px'
          py='40px'
        >
          {services.map(({ img, text, link }) =>
            !img ? (
              <Card
                variant='outlined'
                sx={{ width: 320, backgroundColor: "#aba8a7", border: "none" }}
              >
                <Typography
                  textColor='#244ba6'
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

                <Button
                  sx={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: "20px",
                    textAlign: "center",
                    margin: "auto",
                    padding: "5px",
                  }}
                  // textColor='white'
                  // fontWeight='800'
                  // fontSize='20px'
                  //textAlign='center'
                  // margin='auto'
                  // padding='5px'
                  component={NavLink}
                  to={link}
                >
                  {text}
                </Button>
              </Card>
            )
          )}
        </Box>
      </InnerContainer>
    </Box>
  );
}

export default GreyGallery;

/**
 *box-shadow: 5px 10px 8px #888888;
 *
 */
