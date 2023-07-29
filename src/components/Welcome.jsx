import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { RiBugLine, RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import MapLeaf from "./MapLeaft";
import Data from "./Data";
import { AuthContext } from "../context/AuthContext";
import useProfile from "../hooks/useProfile";
import { logout } from "../services/auth";

const Welcome = () => {
  const [currentSection, setCurrentSection] = useState("mapa");
  const [showMenu, setShowMenu] = useState(true); // State to handle menu visibility

  const userProfile = useProfile();

  const handleLogout = async () => await logout();

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  const handleMobile = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex minH="100vh" w="full">
      <Box
        pos="fixed"
        left={showMenu ? 0 : "-100%"}
        w={{ base: showMenu ? "70%" : "0", lg: "30%" }}
        h="full"
        px={3}
        py={5}
        bg="teal.200"
        flexDir="column"
        borderRightWidth="1px"
        duration="300ms"
        zIndex={50}
      >
        <Text
          fontSize="2xl"
          my="10"
          color="teal.500"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <RiBugLine className="mr-2" />
          Departamento de Vinculación interinstitucional
        </Text>
        <List as="ul" spacing={2}>
          <ListItem>
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("mapa")}
              mr="2"
            >
              Mapa
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              onClick={() => handleMenuClick("data")}
              mr="2"
            >
              Data
            </Button>
          </ListItem>
        </List>
        <Button colorScheme="red" onClick={handleLogout} mt={4}>
          Logout
        </Button>
      </Box>
      <Box w="full" p={5} flex={2}>
        {currentSection === "mapa" && <MapLeaf />}
        {currentSection === "data" && <Data />}
      </Box>

      {/* Botón para alternar el menú en pantallas pequeñas (modo móvil) */}
      <Button
        pos="absolute"
        m={2}
        top="1"
        right="1"
        fontSize="xl"
        bg="teal.500"
        p="2"
        color="white"
        borderRadius="full"
        onClick={handleMobile}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}
      </Button>
    </Flex>
  );
};
