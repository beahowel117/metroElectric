import React from "react";
import { Box } from "@mui/material";

function MainContainer({ children }) {
  return (
    <Box maxWidth='1400px' px='40px' margin='0 auto'>
      {children}
    </Box>
  );
}

export default MainContainer;
