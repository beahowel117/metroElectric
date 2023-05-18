import React from "react";
import { Box } from "@mui/material";

function InnerContainer({ children }) {
  return <Box maxWidth='1150px'>{children}</Box>;
}

export default InnerContainer;
