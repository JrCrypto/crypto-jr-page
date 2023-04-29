import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FaHamburger, FaTimes } from "react-icons/fa";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg={scrolled ? "black" : "transparent"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="docked"
      transition="background-color 0.2s ease-in-out"
      px={4}
      py={2}
    >
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        px={{ base: 4 }}
        align={"center"}
        zIndex={-9999}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes /> : <FaHamburger />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: scrolled ? "space-between" : "flex-end" }}
          align={"center"}
        >
          {scrolled && (
            <Image
              src="/images/crypto-logo-home.png"
              alt="Logo Crypto JR"
              width={150}
              height={180}
            />
          )}

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
