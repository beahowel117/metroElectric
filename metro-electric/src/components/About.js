import React from "react";
import { Box, Typography } from "@mui/material";
import aboutHome from "../images/About/AboutHome(2000X1000).jpg";
import leftImage_1 from "../images/About/about-Left1(1024X768).jpg";
import belyea_image from "../images/About/4.3-1 (2000X1000).jpg";
import belyea_overhead from "../images/About/4.3-2 R (1024X768).jpg"
import BrewLogo from "../images/logos/bew_logo.jpg";
import GreenLogo from "../images/About/4.4.1.jpeg";
import OrangeLogo from "../images/About/4.4.2.jpeg";
import "../index.css";
import Footer from "./Footer";

function About() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      //backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  return (
    <>
      <Box
      className='image-container'
      >
        <Box className='image-wrap'>
          <img src={aboutHome} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography
          className='lineUp'
          fontSize='40px'
          fontWeight='600'
        >
            about metrotek
        </Typography>
      </Box>
      <Box>
        <h1>
          exceptional electrical solutions
        </h1>
        <Box
           borderTop='5px solid #244ba6'
           maxWidth='300px'
           margin='40px auto 0'
        >
        </Box>

            <p>
            Founded in 1974, MetroTek is a privately owned full service industrial, commercial & utility-scale power infrastructure solutions specialist capable of providing critical electrical services involving engineering, installation, repair, maintenance and testing of all types of electrical infrastructure up through 345kV.
            </p>

      </Box>
      <Box
        display="flex"
      >
         <Box
           order='1'
         >
        <img src={leftImage_1}
          alt="leftImg_1"
          width='585px'
          height='483px'
        />
        </Box>
        <Box
           order='2'
         >
        <img src={BrewLogo}
          alt="brew logo"
          width='438px'
          height='442px'
          />
        </Box>
      </Box>

      <Box>
        <p>
          We are proud of our deep 45 year history providing value to our diverse customer base. We consider ourselves to be among the best in the business and take pride in our work product being delivered on-time, within budget and with a continuous focus on safety.
        </p>
        <h1>
          competitive advantages
        </h1>
        <h3>
          Reputation
        </h3>
        <p>
          We have provided hundreds of customers decades of consistent, reliable and responsive service that has allowed us to grow almost entirely on word-of-mouth recommentations. Most of our clients come from positive referrals and recommendations from existing clients.
        </p>
        <h3>
          Customer Service
        </h3>
        <p>
          The strongest component of MetroTek's reputation has been its commitment to customer service. Through its emergency responsiveness, troubleshooting abilities and on-demand service and support, MetroTek has developed a flawless reputation within the region's industrial community. Superior customer service is further enhanced by quick turnaround for price requests, quick decisions and quick reactions.
        </p>
        <h3>
          Experienced Management
        </h3>
        <p>
          MetroTek's management team combines generations of experience in the electrical construction industry that translates into vast technical knowledge and skill. Management continues to invest in the latest systems and innovations in the industry. Ownership works in the field with the men which renders construction and service excellence.
        </p>
      </Box>

      <img src={belyea_image}
        alt="belyea_image"
        width="1170px"
        height="585px"
      />

      <Box
        display='flex'
      >
        <Box>
          <h1>
            channel partner
          </h1>
          <p>
            We're co-located in Easton, PA at the headquarters of Belyea Electrical Power Systems. Founded in 1908, Belyea stocks one of the largest inventories of re-manufactured electrical power equipment in the country at its 150,000 square foot facility including: Substation, Padmount & Dry Type Transformers, Circuit Breakers, Turbines & Generators, Switchgear, Relays and Metering Equipment.
          </p>
        </Box>
        <Box>
          <img src={belyea_overhead}
            alt="belyea_overhead"
            width="608px"
            height="460px"
          />
        </Box>
      </Box>

      <Box
        display="flex"
      >
        <Box
          order='1'
        >
          <img src={GreenLogo}
            alt="green_logo"
            width="184px"
            height="184px"
          />
        </Box>
        <Box
          order='2'
        >
          <img src={OrangeLogo}
            alt="orange_logo"
            width="184px"
            height="184px"
          />
        </Box>
        <Box
          order='3'
        >
          <h1>
            safety training
          </h1>
          <h3>
            A Corporate Culture of Teamwork, Responsibility and a Commitment to Safety
          </h3>
          <p>
            Safety is our top priority. Personal injury, property damage, and adverse environmental impacts are not accetable costs of doing business. For this reason, we employ full time safety professionals, conduct weekly safety meetings, and perform ongoing site safety inspections. We strictly adhere to safety standards and meet all OSHA, MSHA, ANSI, federal, state, and local safety regulations. We are proud of our safety record and recognize that accident prevention is an integral part of our daily operation and not a seperate program. Our project foremen stress safety daily and employees are encouraged to raise safety concerns and suggest imporvements to our safety program. 
          </p>
        </Box>
      </Box>


      <Footer />
    </>
  );
}

export default About;
