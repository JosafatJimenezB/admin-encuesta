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
      bg={useColorModeValue("gray.50", "blue.800")}
    >
      <Stack whiteSpace={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <LoginForm />
      </Stack>
    </Flex>
  );
};

export default LoginPage;
