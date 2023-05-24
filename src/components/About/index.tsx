import { Box } from "@chakra-ui/react";
import React from "react";
import AboutInformation from "./AboutInformation";
import AboutBanner from "./AboutBanner";
import ContactSection from "./ContactSection";

const index = () => {
  return (
    <Box id="about" fontFamily={"Poppins"} fontWeight={"400"}>
      <AboutInformation />
      <AboutBanner />
      <ContactSection />
    </Box>
  );
};

export default index;
