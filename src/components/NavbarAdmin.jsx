import { useContext } from "react";
import { Box, Button, Flex, Heading, Text, Badge } from "@chakra-ui/react";

import { AuthContext } from "../context/AuthContext";
import useProfile from "../hooks/useProfile";
import { logout } from "../services/auth";

const NavbarAdmin = () => {
  const userProfile = useProfile();

  const handleLogout = async () => await logout();

  return (
    <Flex
      m={2}
      px={8}
      align={"center"}
      justify={"center"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
    >
      <Box>
        <Flex align={"start"} justify={"center"} gap={2}>
          <Heading as="h3" size="md">
            Bienvenido
          </Heading>
          <Text fontSize="sm" color="#718096" fontWeight={"600"}>
            {userProfile ? userProfile.username : "Sin Datos"}
          </Text>
          <Badge colorScheme="green" rounded={"lg"}>
            ADMINISTRADOR
          </Badge>
        </Flex>
      </Box>
      <Button colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Flex>
  );
};

export default NavbarAdmin;
