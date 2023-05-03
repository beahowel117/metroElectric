import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tab, { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NavLogo from "../images/logos/NavLogo.png";
import { fontFamily } from "@mui/system";
import PIC from "../images/ServicesDropDown/PIC(1024x768).jpg";

function Nav() {
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
    if (window.scrollY >= 10) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <Box display='flex' position='relative' zIndex='999'>
      <img src={NavLogo} alt='Navigation Logo' width='300px' />

      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fullWidth={false}
        sx={{
          fontSize: "20px",
          fontWeight: "900",
        }}
      >
        SERVICES
      </Button>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fullWidth={false}
        sx={{
          fontSize: "20px",
          fontWeight: "900",
        }}
      >
        FEATURED WORK
      </Button>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fullWidth={false}
        sx={{
          fontSize: "20px",
          fontWeight: "900",
        }}
      >
        ABOUT
      </Button>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fullWidth={false}
        sx={{
          fontSize: "20px",
          fontWeight: "900",
        }}
      >
        CONTACT
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { py: 0 },
        }}
      >
        <Box display='flex'>
          <Box position='relative'>
            <MenuItem
              onClick={handleClose}
              sx={{
                width: "234px",
                whiteSpace: "normal",
                padding: 0,
              }}
            >
              <img
                width='100%'
                src={PIC}
                alt='Power Infastructure Construction'
                objectFit='contain'
              />
              <Box
                width='234px'
                position='absolute'
                top='50%'
                left='20%'
                transform='translate(50%, 50%)'
                fontSize='17px'
              >
                <Typography
                  position='relative'
                  display='inline-block'
                  color='white'
                  fontFamily='loto'
                  fontSize='20px'
                >
                  Power Infrastructure Construction
                </Typography>
              </Box>
            </MenuItem>
          </Box>
          <MenuItem onClick={handleClose}>Testing & Maintenance</MenuItem>
          <MenuItem onClick={handleClose}>Emergency Response</MenuItem>
          <MenuItem onClick={handleClose}>
            Controlled Environment Agriculture
          </MenuItem>
          <MenuItem onClick={handleClose}>Renewable Energy</MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}

export default Nav;
