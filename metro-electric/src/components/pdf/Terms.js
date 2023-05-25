import React from 'react';
import MainContainer from '../MainContainer';
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import MetroTekLogo from "../../images/logos/MetroTekLogo.jpg";
import pdf from "../../pdf/TermsWork.pdf";
import TermsSalesPDF from './TermsSalesPDF';


function Terms() {
  const styles = {
    footerLogo: {
      width: "300px",
      height: "57px",
      align: "center",
    },
  };

  function download (){
    window.onload()
  }
  return (
    <MainContainer>
      <Box display='flex' justifyContent='center' marginTop='20px'>
        <NavLink to='/'>
          <img src={MetroTekLogo} alt='Footer Logo' style={styles.footerLogo} />
        </NavLink>
      </Box>
      <Box>
       <a href='' download>
          Standard Terms and Conditions for Work
        </a>
        <br></br>
        <Typography>
          Standard Terms and Conditions for the Sale of Equipment
        </Typography>
      </Box>
    </MainContainer>
  )
}

export default Terms
