import { Flex, Center, Container } from "@chakra-ui/react";

import MagicLinkForm from "./MagicLinkForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Container w="100%" h="100%">
      <Flex
        w="auto"
        h="100%"
        alignItems="center"
        justifyContent="center"
        gap={10}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Center>
          <LoginForm />
        </Center>
        <Center>
          <MagicLinkForm />
        </Center>
      </Flex>
    </Container>
  );
};

export default LoginPage;
