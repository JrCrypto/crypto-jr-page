import * as React from "react";

import { chakra, Stack, Text, Flex, Icon } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import { Particle } from "../Particle";

const urlDiscord = "https://discord.gg/UtYrJztJAW";

const HomeSection = () => {
  return (
    <Stack  
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minH={{ base: "unset", md: "750px" }}
      bgImage={
        "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/1267600.jpg)"
      }
    >
      <Stack
        p={{ base: 6, md: 10 }}
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="column"
        spacing={6}
        maxW={{ base: "100%", md: "40%" }}
      >
        <Particle />

        <Image
          src="/images/crypto-logo-home.png"
          alt="Logo Crypto JR"
          width={350}
          height={180}
        />

        <Text
          fontSize="2.2rem"
          textAlign="left"
          fontWeight="400"
          letterSpacing="-0.05em"
          color={"white"}
        >
          desenvolvendo novas pessoas para um novo mercado
        </Text>
        <Flex
          as={"a"}
          href={urlDiscord}
          target={"_blank"}
          justify="center"
          h={10}
          w={250}
          px={6}
          lineHeight={25.22}
          alignItems="center"
          bg={"primary"}
          borderRadius={"25px"}
          _hover={{ bg: "primary.600" }}
          textDecoration={"none"}
        >
          <chakra.span
            fontWeight={"800"}
            textDecoration={"none"}
            color={"white"}
            mr={5}
          >
            JUNTE-SE A NÓS
          </chakra.span>
          <Icon as={FaDiscord} h={4} w={4} color={"white"} />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default HomeSection;
