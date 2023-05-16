import React from "react";
import { Box, Flex, chakra, Grid, Text } from "@chakra-ui/react";
import { createIcon, Icon } from '@chakra-ui/icons';

const urlDiscord = "https://discord.gg/UtYrJztJAW";

const VectorIcon = createIcon({
    displayName: 'Vector',
    viewBox: '0 0 131 129',
    path: (
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" fill="none">

            <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="m4 4 29 16.849L4 37.697" />
        </svg>
    ),
});

const CTA = () => {
    return (
        <>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} bg={"lightGray"}>
                <Box
                    sx={{
                        display: 'flexbox',
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                    }}>
                    <Flex >
                        <Text fontSize={'60px'} fontWeight={700} textAlign={'center'} letterSpacing={'-0.04em'} width={'325px'} height={'198px'}>
                            Faça parte da nossa equipe
                        </Text>

                    </Flex>

                    <Icon as={VectorIcon} w={30} h={34} />
                    <Icon as={VectorIcon} w={29} h={33} />

                </Box>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                    }}
                >
                    <Flex
                        as={"a"}
                        href={urlDiscord}
                        target={"_blank"}
                        justify="center"
                        h={14}
                        w={250}
                        px={6}
                        lineHeight={25.22}
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
                            mr={5}
                        >
                            Comunidade Discord
                        </chakra.span>
                    </Flex>
                    <br />
                    <Flex
                        as={"a"}
                        href={urlDiscord}
                        target={"_blank"}
                        justify="center"
                        h={14}
                        w={250}
                        px={6}
                        lineHeight={25.22}
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
                            mr={5}
                        >
                            Proceso Seletivo
                        </chakra.span>
                    </Flex>
                </Box>
            </Grid>
        </>
    );
};

export default CTA;
