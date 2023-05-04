import {
  Stack,
  Link,
  IconButton,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const accounts = [
  {
    url: "https://github.com/JrCrypto",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.instagram.com/jr.crypto/",
    label: "Instagram Account",
    type: "instagram",
    icon: <FaInstagram />,
  },
  {
    url: "https://www.linkedin.com/company/cryptojr/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Flex
      maxW="!00%"
      bg={"black"}
      p={8}
      pr={20}
      pl={20}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Stack direction="column"  mt="15px" alignItems="center" maxW={"30%"}>
        <Heading fontSize="18px" color={"white"}>
          Endereço
        </Heading>
        <Text color="gray.400" align={"center"}>
          R. Eng. Agronômico Andrei Cristian Ferreira, s/n –
          Trindade,Florianópolis – SC, 88040-900
        </Text>
      </Stack>

      <Stack direction="column" alignItems="center"  mt="15px">
        <Heading fontSize="18px" color={"white"}>
          Email
        </Heading>
        <Text color="gray.400" >
        contato@cryptojr.org
        </Text>
      </Stack>

      <Stack direction="column" alignItems="center" mt="15px" >
        <Heading fontSize="18px" color={"white"}>
          Siga-nos
        </Heading>
        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 3 }}
          alignItems="center"
        >
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Footer;
