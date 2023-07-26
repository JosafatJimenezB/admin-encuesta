import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { signInWithEmail } from "../services/auth";
import useForm from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formValues, handleInputChange } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await signInWithEmail(email, password);
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Flex flexDirection="column">
        <Heading fontSize="2xl" mb="15px">
          Email and Password
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Button type="submit" bg={"blue.400"} color={"white"}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </form>
        <Toaster />
      </Flex>
    </>
  );
};

export default LoginForm;
