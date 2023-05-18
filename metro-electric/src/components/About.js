import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";

import aboutHome from "../images/About/AboutHome(2000X1000).jpg";
import leftImage_1 from "../images/About/about-Left1(1024X768).jpg";
import belyea_image from "../images/About/4.3-1 (2000X1000).jpg";
import belyea_overhead from "../images/About/4.3-2 R (1024X768).jpg";
import BrewLogo from "../images/logos/Bew2_logo.png";
import GreenLogo from "../images/About/4.4.1.jpeg";
import OrangeLogo from "../images/About/4.4.2.jpeg";
import men_walking from "../images/About/about-lastImage(2000X1000).jpg";

import useMediaQuery from "@mui/material/useMediaQuery";
import "../index.css";
import "../about.css";

function About() {
  const styles = {
    responsiveHero: {
      width: "120%",
      height: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  const matches = useMediaQuery("(max-width:600px)");
  const lessThan780 = useMediaQuery("(max-width:780px)");
  return (
    <>
      <Box className='image-container'>
        <Box className='image-wrap'>
          <img src={aboutHome} alt='Contact' style={styles.responsiveHero} />
        </Box>
        <Typography className='lineUp' fontSize='40px' fontWeight='600'>
          about metrotek
        </Typography>
      </Box>

      <MainContainer>
        <InnerContainer>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mb='20px'
          >
            <Typography
              color='#244ba6'
              textAlign='center'
              fontSize='25px'
              fontFamily='Lato'
              fontWeight='900'
              mt='55px'
              maxWidth='500px'
              textTransform='uppercase'
            >
              exceptional electrical solutions
            </Typography>
            <Box
              height='3px'
              backgroundColor='#244ba6'
              maxWidth='420px'
              width='100%'
              borderRadius='10px'
              mt='15px'
            />
          </Box>
          {/* <Box
              // borderTop='5px solid #244ba6'
              maxWidth='30%'
              margin='40px auto 0'
            /> */}
          <Typography
            fontSize='17px'
            fontWeight='300'
            fontFamily='Lato'
            maxWidth='800px'
            mb='45px'
          >
            Founded in 1974, MetroTek is a privately owned full service
            industrial, commercial & utility-scale power infrastructure
            solutions specialist capable of providing critical electrical
            services involving engineering, installation, repair, maintenance
            and testing of all types of electrical infrastructure up through
            345kV.
          </Typography>
        </InnerContainer>

        {/* top image section */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            width='100%'
            justifyContent='center'
            columnGap='25px'
          >
            <Box minWidth='350px' maxWidth='500px'>
              <img
                src={leftImage_1}
                alt='leftImg_1'
                width='100%'
                style={{ "border-radius": "5px" }}
              />
            </Box>
            <Box minWidth='350px' maxWidth='350px'>
              <img src={BrewLogo} alt='brew logo' width='100%' />
            </Box>
          </Box>
        </InnerContainer>

        {/* verbiage section */}
        <Box
          display='flex'
          maxWidth='1200px'
          justifyContent='center'
          alignItems='center'
        >
          <Box maxWidth='700px'>
            <p>
              We are proud of our deep 45 year history providing value to our
              diverse customer base. We consider ourselves to be among the best
              in the business and take pride in our work product being delivered
              on-time, within budget and with a continuous focus on safety.
            </p>
            <h1>competitive advantages</h1>
            <h3>Reputation</h3>
            <p>
              We have provided hundreds of customers decades of consistent,
              reliable and responsive service that has allowed us to grow almost
              entirely on word-of-mouth recommentations. Most of our clients
              come from positive referrals and recommendations from existing
              clients.
            </p>
            <h3>Customer Service</h3>
            <p>
              The strongest component of MetroTek's reputation has been its
              commitment to customer service. Through its emergency
              responsiveness, troubleshooting abilities and on-demand service
              and support, MetroTek has developed a flawless reputation within
              the region's industrial community. Superior customer service is
              further enhanced by quick turnaround for price requests, quick
              decisions and quick reactions.
            </p>
            <h3>Experienced Management</h3>
            <p>
              MetroTek's management team combines generations of experience in
              the electrical construction industry that translates into vast
              technical knowledge and skill. Management continues to invest in
              the latest systems and innovations in the industry. Ownership
              works in the field with the men which renders construction and
              service excellence.
            </p>
          </Box>
        </Box>
        <InnerContainer>
          <img
            src={belyea_image}
            alt='belyea_image'
            width='100%'
            margin='50px auto'
            style={{ "border-radius": "5px" }}
          />
        </InnerContainer>
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            columnGap='15px'
            margin='25px 0'
          >
            <Box flex='1' minWidth='350px'>
              <h1 className='divider'>channel partner</h1>
              <p>
                We're co-located in Easton, PA at the headquarters of Belyea
                Electrical Power Systems. Founded in 1908, Belyea stocks one of
                the largest inventories of re-manufactured electrical power
                equipment in the country at its 150,000 square foot facility
                including: Substation, Padmount & Dry Type Transformers, Circuit
                Breakers, Turbines & Generators, Switchgear, Relays and Metering
                Equipment.
              </p>
            </Box>
            <Box flex='1' minWidth='350px'>
              <img
                src={belyea_overhead}
                alt='belyea_overhead'
                width='100%'
                style={{ "border-radius": "5px" }}
              />
            </Box>
          </Box>
        </InnerContainer>
        {/* logo section  */}
        <InnerContainer>
          <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
            margin='25px 0'
          >
            <Box
              flex='1'
              flexDirection='column'
              textAlign='center'
              minWidth='350px'
            >
              <Box
                display='flex'
                flexDirection={lessThan780 ? "row" : "column"}
                alignItems='center'
                justifyContent='center'
              >
                <Box>
                  <img
                    src={GreenLogo}
                    alt='green_logo'
                    width='184px'
                    height='184px'
                  />
                </Box>
                <Box padding='20px'>
                  <img
                    src={OrangeLogo}
                    alt='orange_logo'
                    width='184px'
                    height='184px'
                  />
                </Box>
              </Box>
            </Box>
            <Box flex='1' minWidth='350px' justifyContent='center'>
              <Box>
                <h1>safety training</h1>
                <h3>
                  A Corporate Culture of Teamwork, Responsibility and a
                  Commitment to Safety
                </h3>
                <p>
                  Safety is our top priority. Personal injury, property damage,
                  and adverse environmental impacts are not accetable costs of
                  doing business. For this reason, we employ full time safety
                  professionals, conduct weekly safety meetings, and perform
                  ongoing site safety inspections. We strictly adhere to safety
                  standards and meet all OSHA, MSHA, ANSI, federal, state, and
                  local safety regulations. We are proud of our safety record
                  and recognize that accident prevention is an integral part of
                  our daily operation and not a seperate program. Our project
                  foremen stress safety daily and employees are encouraged to
                  raise safety concerns and suggest imporvements to our safety
                  program.
                </p>
              </Box>
            </Box>
          </Box>
        </InnerContainer>
        {/* bottom image section */}
        <InnerContainer>
          <Box>
            <img src={men_walking} alt='men_walking' width='100%' />
          </Box>
        </InnerContainer>
        {/* bottom section */}
        <InnerContainer
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mb='20px'
          >
            {/* <Box width='683px'> */}
            <h1 id='align_center'>careers</h1>
            <p>
              We've been in continuous operation for over 45 years. We promote
              an exciting, challenging and safe work environment, empowering
              workers to grow and evolve with our business.
            </p>
            <p>
              Please contact us for open employement opportunities at:
              <strong>hr@metroelectrical.com</strong>
            </p>
            {/* </Box> */}
          </Box>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default About;
