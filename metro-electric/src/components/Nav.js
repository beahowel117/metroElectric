import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import NavLogo from "../images/logos/NavLogo.png";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import { fontFamily } from "@mui/system";
import PIC from "../images/ServicesDropDown/PIC(1024x768).jpg";
import TandM from "../images/ServicesDropDown/T&M(1024x768).JPG";
import ER from "../images/ServicesDropDown/ER(1024x768).jpg";
import CEA from "../images/ServicesDropDown/CEA(1024x768).JPG";
import RE from "../images/ServicesDropDown/RE(1024x768).jpg";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

const Nav = () => {
  const styles = {
    imgText: {
      position: "absolute",
      top: "20%",
      left: "15%",
      transform: "translate(50%, 50%)",
      color: "white",
      fontSize: "20px",
      fontWeight: "900",
    },
    menuItem: {
      width: "190px",
      height: "154px",
      whiteSpace: "normal",
      padding: 0,
    },
  };

  const location = window.location.pathname;

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
      img: RE,
      text: "Renewable Energy",
    },
  ];

  const navButtons = [
    {
      button: "Services",
      link: "/services",
    },
    {
      button: "Featured Work",
      link: "/work",
    },
    {
      button: "About",
      link: "/about",
    },
    {
      button: "Contact",
      link: "/contact",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 5) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <Box
      display='flex'
      zIndex='999'
      justifyContent='space-around'
      marginX='-50px'
      px='20px'
      maxHeight='100px'
      position='fixed'
      top='0'
      left='0'
      right='0'
      backgroundColor={isScrolling ? "white" : "transparent"}
      pt={isScrolling ? "10px" : undefined}
    >
      <Box component={RouterLink} to='/'>
        <img
          src={isScrolling ? MetroTekLogo : NavLogo}
          alt='Navigation Logo'
          width={isScrolling ? "200px" : "300px"}
        />
      </Box>

      <Box
        display='flex'
        alignItems='center'
        // mb='10px'
        maxWidth='600px'
        width='100%'
      >
        {navButtons.map(({ button, link }) => (
          <Button
            to={link}
            component={RouterLink}
            id='basic-button'
            open={open}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            fullWidth={false}
            sx={{
              fontSize: isScrolling ? "17px" : "20px",
              fontWeight: "900",
              color: isScrolling ? "#1976d2" : "white",
            }}
          >
            {button}
            {button === "Services" ? (
              <KeyboardArrowDownIcon />
            ) : null || (button === "Services" && isScrolling) ? (
              <KeyboardArrowDownIcon size='small' />
            ) : null}
          </Button>
        ))}

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={location === "/services" ? open : undefined}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            sx: { py: 0 },
          }}
        >
          <Box display='flex' gap='2px'>
            {services.map(({ img, text }) => (
              <Box position='relative'>
                <Card
                  sx={{
                    padding: 0,
                    "--Card-radius": 0,
                  }}
                  square={true}
                >
                  <MenuItem
                    // onClick={handleClose}

                    onClose={handleClose}
                    sx={styles.menuItem}
                  >
                    <>
                      <CardCover sx={{ borderRadius: "0px" }}>
                        <img width='100%' height='100%' src={img} alt='' />
                      </CardCover>
                      <CardCover
                        sx={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 300px)",
                          borderRadius: "0px",
                        }}
                      />
                    </>

                    <Typography {...styles.imgText}>{text}</Typography>
                  </MenuItem>
                </Card>
              </Box>
            ))}
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default Nav;
