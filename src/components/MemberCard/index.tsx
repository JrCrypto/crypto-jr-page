import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MemberProps } from "@/entities/Members";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Card = ({ name, role, linkedin, github }: MemberProps) => {
  const bg = useColorModeValue("white", "#2f3244");

  return (
    <Box
      h="354px"
      w={{base: "60%", md:"18%"}}
      boxShadow="lg"
      rounded="md"
      p={6}
      overflow="hidden"
      cursor="pointer"
      _hover={{ boxShadow: "lg" }}
      bg={bg}
      role="group"
    >
      <VStack spacing={5}>
        <Box boxShadow="xl" borderRadius="full">
          <Avatar
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Box>

        <Heading
          fontSize="xl"
          fontFamily="body"
          textTransform="capitalize"
          noOfLines={2}
        >
          {name}
        </Heading>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          display="block"
        >
          {role}
        </Text>

        <Divider />
        <Flex alignItems="center" justify="center" w="100%">
          <Box textAlign="center">
            <IconButton
              as={Link}
              isExternal
              href={github}
              aria-label={"Github Account"}
              colorScheme={"gray"}
              icon={<FaGithub />}
              rounded="full"
              {...iconProps}
            />

            <IconButton
              as={Link}
              isExternal
              href={linkedin}
              aria-label={"LinkedIn Account"}
              colorScheme={"linkedin"}
              icon={<FaLinkedin />}
              rounded="full"
              {...iconProps}
              
            />
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
