import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { RiBuilding4Line, RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import MapLeaf from "./MapLeaft";
import Data from "./Data";
import { AuthContext } from "../context/AuthContext";
import useProfile from "../hooks/useProfile";
import { logout } from "../services/auth";

const Welcome = () => {
  const [currentSection, setCurrentSection] = useState("mapa");
  const [showMenu, setShowMenu] = useState(false);

  const userProfile = useProfile();

  const handleLogout = async () => await logout();

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  const handleMobile = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex minH="100vh" w="full" pos={"relative"} flexDir={"column"}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }} mt={3}>
        Ubicaciones de las respuestas
      </Text>

      <Box
        pos="fixed"
        left={showMenu ? 0 : "-100%"}
        w={{ base: showMenu ? "70%" : "0", lg: "30%" }}
        h="full"
        px={3}
        py={5}
        bg="blue.700"
        flexDir="column"
        borderRightWidth="1px"
        duration="300ms"
        zIndex={50}
      >
        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          my={4}
          color="white"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <RiBuilding4Line className="mr-2" />
          Departamento de Vinculación interinstitucional
        </Text>
        <Box
          border={"1px"}
          borderColor={"blue.500"}
          rounded={"md"}
          p={3}
          my={5}
        >
          <Text
            fontSize="lg"
            color={"blue.100"}
            fontWeight={"600"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            {userProfile ? userProfile.username : "Desconocido"}
            <Badge ml={1} colorScheme="green" rounded={"lg"}>
              Administrador
            </Badge>
          </Text>
        </Box>
        <List as="ul" spacing={2}>
          <ListItem>
            <Button
              color={"white"}
              variant="ghost"
              onClick={() => handleMenuClick("mapa")}
              mr="2"
            >
              Mapa
            </Button>
          </ListItem>
          <ListItem>
            <Button
              color={"white"}
              variant="ghost"
              onClick={() => handleMenuClick("data")}
              mr="2"
            >
              Data
            </Button>
          </ListItem>
        </List>
        <Button
          colorScheme="red"
          onClick={handleLogout}
          m={0}
          position={"absolute"}
          bottom={7}
          left={6}
        >
          Logout
        </Button>
      </Box>
      <Box w="full" p={0} flex={2}>
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
        bg="blue.700"
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

export default Welcome;
