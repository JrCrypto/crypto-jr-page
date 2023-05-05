import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";

export const NotFound = () => {
  return (
    <Container maxW="1280px" mt="32" py={2} mb={4}>
      <Flex
        align={"center"}
        justify={"center"}
        h={"calc(100vh - 16rem)"}
        w={"full"}
      >
        <Stack spacing={2}>
          <Heading size={"lg"} color="primary">
            404 Error
          </Heading>
          <Heading>Página não encontrada</Heading>
          <Text>
          Desculpe, a página que você está procurando não existe.
          </Text>
          <Box>
            <Button variant={"outline"} as={"a"} href="/">
              Take me home
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default NotFound;
