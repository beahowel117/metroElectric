import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

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

  console.log({ isScrolling });
  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box display='flex'>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Box>
      </Menu>
    </div>
  );
}

export default Nav;
