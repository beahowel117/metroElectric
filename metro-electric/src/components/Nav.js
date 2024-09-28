import React, { useState, useMemo } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  Divider,
  Collapse,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import NavLogo from "../images/logos/NavLogo.png";
import MetroTekLogo from "../images/logos/MetroTekLogo.jpg";
import PIC from "../images/ServicesDropDown/PIC(1024x768).jpg";
import TandM from "../images/ServicesDropDown/T&M(1024x768).JPG";
import ER from "../images/ServicesDropDown/ER(1024x768).jpg";
import CEA from "../images/ServicesDropDown/CEA(1024x768).JPG";
import RE from "../images/ServicesDropDown/RE(1024x768).jpg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

const Nav = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openServicesMobile, setOpenServicesMobile] = useState(false);
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

  const handleOpenServicesMobile = () => {
    setOpenServicesMobile(!openServicesMobile);
  };

  const handleOpenServices = () => {
    setOpenServices(true);
  };

  const handleCloseServices = () => {
    setTimeout(() => {
      setOpenServices(false);
    }, 300);
  };

  const handleDrawerClose = () => {
    setOpenMobile(false);
  };

  const useMobileMenu = useMediaQuery("(max-width:900px)");
  const isMediumScreen = useMediaQuery("(min-width: 1440px)");
  const isLargeScreen = useMediaQuery("(min-width: 2160px)");
  const isXLargeScreen = useMediaQuery("(min-width: 2880px)");


   const menuStyles = useMemo(() => {
    let leftPosition = '40%';
    if(isXLargeScreen){
      leftPosition = '61%'
    }
    else if (isLargeScreen) {
      leftPosition = '58%';
    } else if (isMediumScreen) {
      leftPosition = '50%';
    }
    return {
      leftPosition
    };
  }, [isMediumScreen, isLargeScreen, isXLargeScreen]);

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
      display: 'flex',  // Flexbox for alignment
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',  // Center vertically
      flexDirection: 'column',
      padding: '10px',  // Internal padding
      backgroundColor: '#fdfdfd',
      color: 'blue',
      borderBottom: '1px solid #ccc',
      width: "178px",  // Fixed width to match layout
      height: "100px",  // Fixed height
      whiteSpace: 'normal',  // Allow wrapping
      wordBreak: 'break-word',  // Handle long words by breaking them
      textAlign: 'left',  // Left-align text
      overflowWrap: 'break-word',  // Prevent words from overflowing/ Ensure text is centered inside
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
    },
    navHover: {
      "&:hover": {},
    },
  };

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
      // img: BAT,
      text: "Energy Storage",
      link: '/services/energy-storage',
    },
    {
      // img: BAT,
      text: "Termination & Splicing",
      link: '/services/termination-splicing',
    },
    {
      img: RE,
      text: "Renewable Energy",
      link: "/services/renewable-energy",
    },
    {
      text: "Engineering Services",
      link: "/services/engineering-services",
    }
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
        pt='15px'
      >
        <Box component={RouterLink} to='/' px='30px'>
          <img
            src={isScrolling ? MetroTekLogo : NavLogo}
            boxShadow={isScrolling ? "none" : "10px 10px #244ba6"}
            alt='Navigation Logo'
            width={isScrolling ? "200px" : "240px"}
          />
        </Box>

        <Box display='flex' alignItems='center' maxWidth='600px' width='100%'>
          {navButtons.map(({ name, link }) => {
            return (
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
                  <KeyboardArrowDownIcon
                    className='shadow'
                    onMouseEnter={handleOpenServices}
                  />
                ) : null || (name === "Services" && isScrolling) ? (
                  <KeyboardArrowDownIcon
                    size='small'
                    className='noShadow'
                    onMouseOver={handleClick}
                  />
                ) : null}
              </Button>
            );
          })}

          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={openServices}
            onClose={handleClose}
            getContentAnchorEl={null}
            disablePortal={true}
            anchorReference="anchorPosition" // Manual positioning control
            anchorPosition={{ top: 60, left: isLargeScreen ? 400 : 350 }}
            PaperProps={{
              sx: {
                top: '60px !important',
                left: `${menuStyles.leftPosition} !important`,
                transform: 'none !important',
                position: 'absolute !important',
              },
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              sx: { py: 0, display: "flex", flexDirection: "column" },
              onMouseLeave: handleCloseServices,
            }}
          >

            <Box display='flex' gap='2px' flexDirection='column'>
              {services.map(({ text, link }) => (
                <ClickAwayListener onClickAway={handleCloseServices}>
                  {/* <Box position='relative'> */}
                    {/* <Card
                      sx={{
                        padding: 0,
                        "--Card-radius": "0px",
                      }}
                      square={true}
                    > */}
                      <MenuItem onClose={handleClose} sx={styles.menuItem}>
                        {/* <>
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
                        </> */}

                        <Typography
                          {...styles.imgText}
                          component={NavLink}
                          to={link}
                          sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            textAlign: 'left',  // Align text to the left
                            whiteSpace: 'normal',  // Allow text to wrap onto multiple lines
                            wordWrap: 'break-word',  // Ensure long words break correctly
                            padding: '0 40px 0px 0px',  // Add padding for spacing
                            width: '100%',  // Take full width of the container
                            boxSizing: 'border-box',  // Include padding within the width
                          }}
                        >
                          {text}
                        </Typography>
                      </MenuItem>
                    {/* </Card> */}
                  {/* </Box> */}
                </ClickAwayListener>
              ))}
            </Box>
          </Menu>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Box
        sx={{ flexGrow: 1 }}
        display={useMobileMenu ? "block" : "none"}
        position='fixed'
        zIndex='999'
        backgroundColor='white'
        width='100%'
      >
        <ClickAwayListener onClickAway={handleDrawerClose}>
          <AppBar position='static' color='transparent'>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box component={RouterLink} to='/'>
                <img src={MetroTekLogo} alt='Navigation Logo' width='175px' />
              </Box>

              <IconButton
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
                <ListItemButton onClick={handleOpenServicesMobile}>
                  <RouterLink
                    to='/services'
                    style={{ textDecoration: "none", color: "#244BA6" }}
                    onClick={handleDrawerClose}
                  >
                    <ListItemText
                      primary='Services'
                      sx={{ flex: "0 1 auto" }}
                    />
                  </RouterLink>

                  <span style={{ marginLeft: "10px" }}>
                    {openServicesMobile ? <ExpandLess /> : <ExpandMore />}
                  </span>
                </ListItemButton>
                <Collapse in={openServicesMobile} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/power-infrastructure'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Power Infrastructure Construction' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/testing-maintenance'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Testing & Maintenance' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/emergency-response'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Emergency Response' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/controlled-environment-agriculture'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Controlled Environment Agriculture' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/energy-storage'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Energy Storage' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/termination-splicing'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Termination & Splicing' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/renewable-energy'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Renewable Energy' />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to='/services/engineering-services'
                      onClick={handleDrawerClose}
                    >
                      <ListItemText primary='Engineering Services' />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton
                  component={RouterLink}
                  to='/work'
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Featured Work' />
                </ListItemButton>
                <ListItemButton
                  component={RouterLink}
                  to='/about'
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='About' />
                </ListItemButton>
                <ListItemButton
                  component={RouterLink}
                  to='/contact'
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary='Contact' />
                </ListItemButton>
              </List>
            </Drawer>
          </AppBar>
        </ClickAwayListener>
      </Box>
    </>
  );
};

export default Nav;
