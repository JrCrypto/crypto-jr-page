import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import {
  AprendaIcon,
  MercadoDeTrabalhoIcon,
  PraticaIcon,
} from "@/components/Icons";
import {
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
} from "react-icons/hi2";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Flex
      w={"24rem"}
      h={"20rem"}
      align="center"
      justify="center"
      color="white"
      bg="black"
      gap="2"
      flexDirection={"column"}
    >
      {icon}

      <Text fontWeight={700} color="primary" textAlign={"center"}>
        {title}
      </Text>

      <Text color="#D9D9D9" w={"70%"} textAlign={"center"}>
        {text}
      </Text>
    </Flex>
  );
};

export default function AboutBanner() {
  return (
    <Flex
      w={"100%"}
      align="center"
      justify="space-between"
      color="white"
      bg="black"
      flexDirection={{base: "column", md: "row"}}
      p={45}
      paddingY={35}
    >
      <Feature
        icon={<HiOutlineBookOpen size={100} />}
        title={"Aprenda"}
        text={
          "Aprenda com cursos gratuitos, artigos e nossos eventos na comunidade do discord"
        }
      />
      <Feature
        icon={<HiOutlineUserGroup size={100} />}
        title={"Pratica"}
        text={
          "Pratique através de projetos de voluntariado ou colaborando em iniciativas web3 com outros membros da comunidade"
        }
      />
      <Feature
        icon={<HiOutlineBriefcase size={100} />}
        title={"Vá para o mercado"}
        text={
          "Com suas habilidades aprimoradas e sua experiência em projetos práticos, você estará pronto para ingressar no mercado web3"
        }
      />
    </Flex>
  );
}
