import React from "react";
import { Box, Typography } from "@mui/material";

function MainContainer({ children }) {
  return (
    <Box
      maxWidth='1400px'
      px='40px'
      margin='0 auto'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      {children}
    </Box>
  );
}

export default MainContainer;
