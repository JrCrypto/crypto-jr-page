import { Fragment, useState } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import MemberCard from "@/components/MemberCard";

export default function MemberSection() {
  const cards = [
    {
      name: "oioioio 1",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "oioioio 2",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",

      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      name: "oioioio 3",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "oioioio 32",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "oioioio 21",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      name: "oioioio 34",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "oioioio 34",
      github: "/github",
      linkedin: "dadsfsdf",
      role: "snfkjsdf",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(cards.slice(0, 5));
  const [page, setPage] = useState(0);

  const handleSlideChange = (direction: number) => {
    const newPage = page + direction;
    const startIndex = newPage * 5;
    let endIndex = startIndex + 5;

    if (endIndex > cards.length) {
      endIndex = cards.length;
    }

    const itemsToDisplay = cards.slice(startIndex, endIndex);

    if (itemsToDisplay.length > 0) {
      setItemsToShow(itemsToDisplay);
      setPage(newPage);
    }

    console.log(itemsToDisplay, direction, page, startIndex, endIndex);
  };

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxW="100%" px={{ base: 6, md: 10 }} py={10}>
      <Stack direction="column" spacing={6} justifyContent="center">
        <chakra.h1
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign={"center"}
          bgGradient="linear(to-br, primary.600, primary)"
          bgClip="text"
        >
          Conheça a nossa equipe
        </chakra.h1>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize="lg"
          textAlign={"center"}
          fontWeight="400"
        >
          A CryptoJR é formada por pessoas curiosas que buscam o conhecimento e
          resolvem problemas sobre a web3.
        </Text>
      </Stack>

      <Flex
        p={28}
        py={16}
        justifyContent={"space-between"}
        direction={{
          base: "column",
          md: "row",
        }}
        alignItems={{ md: "center" }}
      >
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          zIndex={2}
          onClick={() => handleSlideChange(-1)}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>

        <Container maxW={"98%"}>
          <Flex flexWrap="wrap" gridGap={16} justify="center">
            {itemsToShow.map((item, index) => (
              <MemberCard
                key={index}
                name={item.name}
                github={item.github}
                linkedin={item.linkedin}
                role={item.role}
              />
            ))}
          </Flex>
        </Container>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          zIndex={2}
          onClick={() => handleSlideChange(1)}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </Flex>

      {/* Right Icon */}
    </Container>
  );
}
