import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import useForm from "../hooks/useForm";
import { signUpWithEmail, updateProfile } from "../services/auth";

const initialState = {
  fullName: "",
  emailr: "",
  passwordr: "",
};

const SingUpForm = () => {
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
      <Heading fontSize="2xl" mb="15px">
        Registro
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="fullName">
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="emailr">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="emailr"
              value={formValues.emailr}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="passwordr">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
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
            bg={"blue.400"}
            color={"white"}
          >
            Registrarse
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default SingUpForm;
