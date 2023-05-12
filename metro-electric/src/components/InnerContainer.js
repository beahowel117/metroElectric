import React from "react";
import { Box } from "@mui/material";

function InnerContainer({
  children,
  display = undefined,
  justifyContent = undefined,
  flexDirection = undefined,
}) {
  return (
    <Box
      maxWidth='1150px'
      //   display={display}
      //   justifyContent={justifyContent}
      //   flexDirection={flexDirection}
    >
      {children}
    </Box>
  );
}

export default InnerContainer;
