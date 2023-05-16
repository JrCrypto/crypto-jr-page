import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  createIcon,
  Icon,
} from "@chakra-ui/react";
import React from "react";

const AboutInformation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bg: "lightGray",
        padding: 10,
      }}
    >
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <GridItem w={"948px"} h={"158px"} marginBottom={"60px"}>
          <Text
            fontSize={"40px"}
            fontWeight={"700"}
            lineHeight={"44px"}
            letterSpacing={"-0.04em"}
            textAlign={"center"}
          >
            Quem somos ?
          </Text>

          <Text
            fontSize={"29px"}
            fontWeight={"400"}
            lineHeight={"32px"}
            letterSpacing={"-0.04em"}
            textAlign={"center"}
          >
            Nós somos uma empresa júnior, o que significa que somos uma
            instituição SEM FINS LUCRATIVOS composta por pessoas apaixonadas por
            tecnologia blockchain, prontos para guiar você no mercado web3.
          </Text>
        </GridItem>
        <GridItem w={"948px"} h={"158px"}>
          <Text
            fontSize={"40px"}
            fontWeight={"700"}
            lineHeight={"44px"}
            letterSpacing={"-0.04em"}
            textAlign={"center"}
          >
            O que oferecemos?
          </Text>
          <Text
            fontSize={"29px"}
            fontWeight={"400"}
            lineHeight={"32px"}
            letterSpacing={"-0.04em"}
            textAlign={"center"}
          >
            A cryptoJR oferece uma série de recursos e oportunidades que irão
            ajudá-lo a desenvolver as habilidades e conhecimentos necessários
            para ter sucesso no mercado web3.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutInformation;
