import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IdeiaIcon } from "../Icons";

const AboutInformation = () => {
  return (
    <Flex
      bg="lightGray"
      flexDirection={"column"}
      alignItems={"center"}
      gap={15}
      p={{ base: 8, md: 85 }}
    >
      <Box maxW={{ base: "100%", md: "60%" }}>
        <Text
          fontSize={"2.5rem"}
          fontWeight={"700"}
          lineHeight={"44px"}
          letterSpacing={"-0.04em"}
          textAlign={"center"}
          mb={5}
        >
          Quem somos ?
        </Text>

        <Text
          fontSize={"1.6rem"}
          fontWeight={"400"}
          lineHeight={"32px"}
          letterSpacing={"-0.04em"}
          textAlign={"center"}
        >
          Nós somos uma empresa júnior, o que significa que somos uma
          instituição SEM FINS LUCRATIVOS composta por pessoas apaixonadas por
          tecnologia blockchain, prontos para guiar você no mercado web3.
        </Text>
      </Box>

      <Box maxW={{ base: "100%", md: "60%" }}>
        <IdeiaIcon />
        <Text
          fontSize={"2.5rem"}
          fontWeight={"700"}
          lineHeight={"44px"}
          letterSpacing={"-0.04em"}
          textAlign={"center"}
          mb={5}
        >
          O que oferecemos?
        </Text>
        <Text
          fontSize={"1.6rem"}
          fontWeight={"400"}
          lineHeight={"32px"}
          letterSpacing={"-0.04em"}
          textAlign={"center"}
        >
          A cryptoJR oferece uma série de recursos e oportunidades que irão
          ajudá-lo a desenvolver as habilidades e conhecimentos necessários para
          ter sucesso no mercado web3.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutInformation;
