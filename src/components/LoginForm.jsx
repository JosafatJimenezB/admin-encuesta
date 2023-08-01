import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Spacer,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { signInWithEmail } from "../services/auth";
import MagicLinkForm from "./MagicLinkForm";
import useForm from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({ onMenuClick }) => {
  const { formValues, handleInputChange } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      // const data = await signInWithEmail(email, password);
      await toast.promise(signInWithEmail(email, password)),
        {
          loading: "Loading",
          success: "Login successful",
          error: "Login failed",
        };
    } catch (error) {
      toast.error("Datos incorrectos");
    }
  };

  return (
    <>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack align={"center"}>
          <Heading
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            color={"blue.700"}
            mb={6}
          >
            Login
          </Heading>
        </Stack>
        <Stack w={"full"} spacing={4}>
          <form onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
                Email
              </FormLabel>
              <Input
                minW={"28"}
                mb={4}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
                Password
              </FormLabel>
              <Input
                mb={3}
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack spacing={6} mt={4}>
              <Button
                type="submit"
                bg={"blue.600"}
                color={"white"}
                _hover={{ bg: "blue.300", color: "white" }}
              >
                Iniciar Sesión
              </Button>
            </Stack>
          </form>
          <Spacer />
          <Text align={"center"}> Or</Text>
          <Spacer />
          <Heading
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            align={"center"}
            color={"blue.700"}
          >
            Magic Link
          </Heading>
          <MagicLinkForm />
          <Text>
            No tiene una cuenta? {""}
            <Link color={"blue.400"} onClick={() => onMenuClick("signup")}>
              Crear una
            </Link>
          </Text>
        </Stack>
        <Toaster />
      </Box>
    </>
  );
};

export default LoginForm;
