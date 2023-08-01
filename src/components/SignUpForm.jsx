import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  InputGroup,
  Text,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

import useForm from "../hooks/useForm";
import { signUpWithEmail, updateProfile } from "../services/auth";

const initialState = {
  fullName: "",
  emailr: "",
  passwordr: "",
};

const SingUpForm = ({ onMenuClick }) => {
  const { formValues, handleInputChange, reset } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailr, passwordr, fullName } = formValues;
    const data = {
      email: emailr,
      password: passwordr,
    };
    try {
      const registerUser = await signUpWithEmail(data);

      if (registerUser) {
        await updateProfile(registerUser.user.id, fullName);
      }
      reset();
    } catch (error) {
      console.log("Error al registrarse", error);
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
            Registro
          </Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="fullName">
              <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
                Nombre
              </FormLabel>
              <Input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="emailr">
              <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
                Email
              </FormLabel>
              <Input
                mb={4}
                type="email"
                name="emailr"
                value={formValues.emailr}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="passwordr">
              <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  mb={4}
                  type="password"
                  name="passwordr"
                  value={formValues.passwordr}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              loadingText="Submitting"
              bg={"blue.600"}
              color={"white"}
              _hover={{ bg: "blue.300", color: "white" }}
            >
              Registrarse
            </Button>
            <Text>
              Ya tiene una cuenta? {""}
              <Link color={"blue.400"} onClick={() => onMenuClick("login")}>
                Iniciar sesión
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default SingUpForm;
