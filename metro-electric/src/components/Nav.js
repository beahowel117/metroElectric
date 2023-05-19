import React, { useState } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Divider,
  Collapse,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
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
import MuiAppBar from "@mui/material/AppBar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

const Nav = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const useMobileMenu = useMediaQuery("(max-width:820px)");

  const handleOpenServices = () => {
    setOpenServices(!openServices);
  };

  const handleDrawerOpen = () => {
    setOpenMobile(true);
  };
  console.log({openMobile})
  const handleDrawerClose = () => {
    setOpenMobile(false);
  };

  const styles = {
    imgText: {
      position: "absolute",
      top: "20%",
      left: "15%",
      transform: "translate(50%, 50%)",
      color: "white",
      fontSize: "20px",
      fontWeight: "900",
      textDecoration: "none",
      boxShadow: "none",
      underline: "none",
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
      img: RE,
      text: "Renewable Energy",
      link: "/services/renewable-energy",
    },
  ];

  const navButtons = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Featured Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
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
    <>
      <Box
        display={!useMobileMenu ? "flex" : "none"}
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
            boxShadow={isScrolling ? "none" : "10px 10px #244ba6"}
            alt='Navigation Logo'
            width={isScrolling ? "200px" : "300px"}
          />
        </Box>

        <Box
          display='flex'
          alignItems='center'
          // justifyContent='space-around'
          // mb='10px'
          maxWidth='600px'
          width='100%'
        >
          {navButtons.map(({ name, link }) => (
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
                color: isScrolling ? "#244ba6" : "white",
                textShadow: isScrolling ? "none" : "0px 1px 2px black",
              }}
            >
              {name}
              {name === "Services" ? (
                <KeyboardArrowDownIcon className='shadow' />
              ) : null || (name === "Services" && isScrolling) ? (
                <KeyboardArrowDownIcon size='small' className='noShadow' />
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
              {services.map(({ img, text, link }) => (
                <Box position='relative'>
                  <Card
                    sx={{
                      padding: 0,
                      "--Card-radius": "0px",
                    }}
                    square={true}
                  >
                    <MenuItem
                      onClose={handleClose}
                      sx={styles.menuItem}
                    >
                      <>
                        <CardCover
                          sx={{
                            borderRadius: "0px",
                          }}
                        >
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

                      <Typography
                        {...styles.imgText}
                        component={NavLink}
                        to={link}
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        {text}
                      </Typography>
                    </MenuItem>
                  </Card>
                </Box>
              ))}
            </Box>
          </Menu>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Box sx={{ flexGrow: 1 }} display={useMobileMenu ? "block" : "none"}>
        <AppBar position='static' color='transparent'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component={RouterLink} to='/'>
              <img src={MetroTekLogo} alt='Navigation Logo' width='175px' />
            </Box>

            <IconButton
              // size='large'
              // onClick={() => setOpenMobile(!openMobile)}
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon
                sx={{ height: "35px", width: "35px" }}
                onClick={() => setOpenMobile(!openMobile)}
              />
            </IconButton>
          </Toolbar>
          <Drawer
            sx={{
              width: "200px",
              flexShrink: 0,

              "& .MuiDrawer-paper": {
                width: "200px",
                height: "auto",
                boxSizing: "border-box",
              },
            }}
            variant='persistent'
            anchor='right'
            open={openMobile}
            onClose={() => setOpenMobile(false)}
          >
            <Box
              display='flex'
              alignItems='center'
              // necessary for content to be below app bar
              justifyContent='flex-start'
            >
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
            <Divider />
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                color: "#244BA6",
              }}
              component='nav'
            >
              <ListItemButton onClick={handleOpenServices}>
                <RouterLink
                  to='/services'
                  style={{ textDecoration: "none", color: "#244BA6" }}
                >
                  <ListItemText primary='Services' sx={{ flex: "0 1 auto" }} />
                </RouterLink>

                <span style={{ marginLeft: "10px" }}>
                  {openServices ? <ExpandLess /> : <ExpandMore />}
                </span>
              </ListItemButton>
              <Collapse in={openServices} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary='Power Infrastructure Construction' />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary='Testing & Maintenance' />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary='Emergency Response' />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary='Renewable Energy' />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton component={RouterLink} to='/work' onClick={handleDrawerClose}>
                <ListItemText primary='Featured Work' />
              </ListItemButton>
              <ListItemButton component={RouterLink} to='/about' onClick={handleDrawerClose}>
                <ListItemText primary='About' />
              </ListItemButton>
              <ListItemButton component={RouterLink} to='/contact' onClick={handleDrawerClose}>
                <ListItemText primary='Contact' />
              </ListItemButton>
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
