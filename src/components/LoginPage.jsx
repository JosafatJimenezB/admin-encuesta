import {
  Flex,
  Heading,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";

import MagicLinkForm from "./MagicLinkForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack whiteSpace={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Inicie sesión en su cuenta</Heading>
        </Stack>
        <LoginForm />
      </Stack>
    </Flex>
  );
};

export default LoginPage;
