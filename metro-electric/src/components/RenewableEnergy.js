import React from 'react';
import GreyGallery from "./GreyGallery";
import Footer from "./Footer";
import { Box, Typography } from "@mui/material";

import renewable_energy from "../images/Services/renewableEnergy(1024X768).jpg"

function RenewableEnergy() {
  return (
    <>
     <Box>
      <img src={renewable_energy}
        alt="Renewable Energy"
        width="600px"
      />
      <Typography>
      We assist clients to deploy a wide range of renewable energy options with services that include construction, inspection, installation, maintenance, repair, and removal of renewable energy power distribution systems.
      </Typography>
      <Typography>
      Our renewable energy support services include engineering, procurement, construction, lightning protection, underground cable, SCADA systems, substations, switchgear, inverters, utility grid interconnection &amp; optimization, testing &amp; commissioning, and quality control &amp; assurance.
      </Typography>
     </Box>
      <GreyGallery />
      <Footer />
    </>
  )
}

export default RenewableEnergy
