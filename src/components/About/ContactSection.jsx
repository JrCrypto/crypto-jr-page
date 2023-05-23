import React from "react";
import { Box, Flex, chakra, Grid, Text } from "@chakra-ui/react";

const CTA = () => {
  const urlDiscord = "https://discord.gg/UtYrJztJAW";
  const urProcessoSeletivo = "https://discord.gg/UtYrJztJAW";

  return (
    <Flex
      justifyContent={"space-around"}
      align="center"
      bg="lightGray"
      w="100%"
      gap={10}
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      p={20}
    >
      <Box maxW={{ base: "80%", sm: "80%", md: "20%", lg: "20%" }}>
        <Text fontSize={"3rem"} fontWeight={700} textAlign={"center"}>
          Faça parte da nossa equipe {">>"}
        </Text>
      </Box>

      <Flex align="center" gap={10} flexDirection={"column"}>
        <Flex
          key={"Comunidade Discord"}
          id={"ComunidadeDiscord"}
          as={"a"}
          href={urlDiscord}
          target={"_blank"}
          justify="center"
          h={14}
          w={250}
          px={6}
          alignItems="center"
          bg={"primary"}
          borderRadius={"25px"}
          _hover={{ bg: "primary.600" }}
          textDecoration={"none"}
        >
          <chakra.span
            fontWeight={"600"}
            textDecoration={"none"}
            color={"black"}
          >
            Comunidade Discord
          </chakra.span>
        </Flex>

        <Flex
          key={"Processo Seletivo"}
          id={"ProcessoSeletivo"}
          as={"a"}
          href={urProcessoSeletivo}
          target={"_blank"}
          justify="center"
          h={14}
          w={250}
          px={6}
          alignItems="center"
          bg={"primary"}
          borderRadius={"25px"}
          _hover={{ bg: "primary.600" }}
          textDecoration={"none"}
        >
          <chakra.span
            fontWeight={"600"}
            textDecoration={"none"}
            color={"black"}
          >
            Processo Seletivo
          </chakra.span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CTA;
