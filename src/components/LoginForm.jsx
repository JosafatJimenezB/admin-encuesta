import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
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
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit}>
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
            <Stack spacing={6} mt={4}>
              <Button type="submit" bg={"blue.400"} color={"white"}>
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
        <Toaster />
      </Box>
    </>
  );
};

export default LoginForm;
