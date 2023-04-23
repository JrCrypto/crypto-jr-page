import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaTimes } from "react-icons/fa";

import { NavItem } from "./nav-itens";

export const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg:'primary' }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "primary" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"primary"} w={5} h={5} as={FaTimes} />
        </Flex>
      </Stack>
    </Link>
  );
};
