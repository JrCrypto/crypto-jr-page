import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import {
  AprendaIcon,
  MercadoDeTrabalhoIcon,
  PraticaIcon,
} from "@/components/Icons";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon, ...props }: FeatureProps) => {
  return (
    <Stack
      {...props}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="black"
        mb={4}
      >
        {icon}
      </Flex>
      <Text fontWeight={700} color="primary" textAlign={"center"}>
        {title}
      </Text>
      <Text color="#D9D9D9" w={250} h={100} textAlign={"center"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function AboutBanner() {
  return (
    <>
      <Box p={4} bg="black" padding={"8"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={AprendaIcon} w={131} h={129} />}
            title={"Aprenda"}
            text={
              "Aprenda com cursos gratuitos, artigos e nossos eventos na comunidade do discord"
            }
          />
          <Feature
            icon={<Icon as={PraticaIcon} w={158} h={158} mb={2} mr={6} />}
            title={"Pratica"}
            text={
              "Pratique através de projetos de voluntariado ou colaborando em iniciativas web3 com outros membros da comunidade"
            }
          />
          <Feature
            icon={<Icon as={MercadoDeTrabalhoIcon} w={140} h={134} />}
            title={"Vá para o mercado"}
            text={
              "Com suas habilidades aprimoradas e sua experiência em projetos práticos, você estará pronto para ingressar no mercado web3"
            }
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
