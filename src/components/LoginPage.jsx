import { useState } from "react";
import {
  Flex,
  Heading,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";

import SignUpForm from "../components/SignUpForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [currentSection, setCurrentSection] = useState("login");

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <Flex
      w={"full"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "blue.800")}
    >
      <Stack whiteSpace={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {currentSection === "login" && (
          <LoginForm onMenuClick={handleMenuClick} />
        )}
        {currentSection === "signup" && (
          <SignUpForm onMenuClick={handleMenuClick} />
        )}
      </Stack>
    </Flex>
  );
};

export default LoginPage;
