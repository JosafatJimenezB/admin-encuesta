import { Flex, Center, Container } from "@chakra-ui/react";

import SingUpForm from "./SignUpForm";

const SignupPage = () => {
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
          <SingUpForm />
        </Center>
      </Flex>
    </Container>
  );
};

export default SignupPage;
