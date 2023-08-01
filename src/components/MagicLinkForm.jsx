import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  Stack,
} from "@chakra-ui/react";

import useForm from "../hooks/useForm";
import { signInWithMagicLink } from "../services/auth";

const initialState = {
  email: "",
};

const MagicLinkForm = () => {
  const { formValues, handleInputChange, reset } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = formValues;

    try {
      if (email == "") {
        toast.error("Debe ingresar un correo");
      } else {
        await signInWithMagicLink(email);
        reset();
        toast.success(`Se envio un correo a \n ${email} \ncon instrucciones`);
      }
    } catch (error) {
      toast.error("no se pudo enviar el correo");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel mb={1} color={"blue.700"} fontWeight={"700"}>
              Email address
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg={"blue.600"}
              color={"white"}
              _hover={{ bg: "blue.300", color: "white" }}
            >
              Iniciar sesión
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default MagicLinkForm;
