import { Box } from "@chakra-ui/react";
import React from "react";
import AboutInformation from "./AboutInformation";
import AboutBanner from "./AboutBanner";
import CTA from "./CTA";

const index = () => {
  return (
    <Box id="about">
      <AboutInformation />
      <AboutBanner />
      <CTA />
    </Box>
  );
};

export default index;
