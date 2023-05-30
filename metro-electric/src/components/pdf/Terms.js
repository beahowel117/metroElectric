import React from "react";
import MainContainer from "../MainContainer";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import MetroTekLogo from "../../images/logos/MetroTekLogo.jpg";
import TermsWork from "../../files/TermsWork.pdf";
import TermsEquipSales from "../../files/TermsEquipSales.pdf";

function Terms() {
  const styles = {
    footerLogo: {
      width: "300px",
      height: "57px",
      align: "center",
    },
  };

  const onButtonDownloadWork = () => {
    fetch(TermsWork).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "TermsWork.pdf";
        alink.click();
      });
    });
  };

  const onButtonDownloadSales = () => {
    fetch(TermsEquipSales).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "TermsEquipSales.pdf";
        alink.click();
      });
    });
  };
  return (
    <MainContainer>
      <Box display='flex' justifyContent='center' marginTop='20px'>
        <NavLink to='/'>
          <img src={MetroTekLogo} alt='Footer Logo' style={styles.footerLogo} />
        </NavLink>
      </Box>
      <Box mt='50px'>
        <Typography fontSize='30px' fontWeight='900'>
          Download Terms and Services!!!!!:
        </Typography>
      </Box>
      <Box display='flex' alignItems='center' flexDirection='column' mt='20px'>
        <Box mb='20px'>
          <button onClick={onButtonDownloadWork}>
            Standard Terms and Conditions for Work
          </button>
        </Box>
        <Box>
          <button onClick={onButtonDownloadSales}>
            Standard Terms and Conditions for the Sale of Equipment
          </button>
        </Box>
      </Box>
    </MainContainer>
  );
}

export default Terms;
