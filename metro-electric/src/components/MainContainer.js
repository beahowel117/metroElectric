import React from "react";
import { Box } from "@mui/material";

function MainContainer({ children }) {
  return (
    <Box maxWidth='1400px' px='40px'>
      {children}
    </Box>
  );
}

export default MainContainer;
