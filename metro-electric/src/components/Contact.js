import React from "react";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import contact from "../images/Contact/contact(2000x1000).jpg";
import "../index.css";

const Contact = () => {
  const styles = {
    responsiveHero: {
      width: "100%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <Box className='image-wrap'>
      <img src={contact} alt='Contact' style={styles.responsiveHero} />
    </Box>
  );
};
export default Contact;
