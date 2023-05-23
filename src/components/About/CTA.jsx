import React from "react";
import { Box, Flex, chakra, Grid, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/icons';
import { VectorIcon } from "@/components/Icons";
const urlDiscord = "https://discord.gg/UtYrJztJAW";

const CTA = () => {
    return (
        <>
            <Flex justifyContent={'center'} bg="lightGray">
                <Flex maxW={'40%'} alignContent={'center'} >
                    <Text fontSize={'60px'} fontWeight={700} lineHeight={'66px'} textAlign={'center'} letterSpacing={'-0.04em'} >
                        Faça parte da nossa equipe
                        {<Icon as={VectorIcon} w={131} h={129} />}
                        {<Icon as={VectorIcon} w={131} h={129} />}
                    </Text>

                </Flex>
                <Flex flexDirection={'column'} justifyContent={'center'}>
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
                            Processo Seletivo
                        </chakra.span>
                    </Flex>
                </Flex>
            </Flex >
        </>
    );
};

export default CTA;
