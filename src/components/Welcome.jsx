import { useState } from "react";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { AuthContext } from "../context/AuthContext";
import useProfile from "../hooks/useProfile";
import { logout } from "../services/auth";

const Welcome = () => {
  const userProfile = useProfile();
  const [isAsideVisible, setAsideVisible] = useState(false);

  const handleLogout = async () => await logout();

  const toggleAside = () => {
    setAsideVisible(!isAsideVisible);
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr" }}
      templateAreas={{ base: '"main" "navbar"', md: '"navbar main"' }}
      mt={4}
      pr={{ base: 0, md: 8 }}
      pl={{ base: 0, md: 8 }}
      gap={4}
    >
      {/* Main content (2/3) */}
      <Box gridArea="main">
        {/* Your main content goes here */}
        <Button onClick={toggleAside}>Toggle Aside</Button>
      </Box>

      {/* Aside (1/3) */}
      {isAsideVisible && (
        <Box gridArea="navbar">
          <Heading as="h3" size="md" mb={2}>
            Welcome
          </Heading>
          <Text fontSize="sm" color="#718096" fontWeight="600">
            {userProfile ? userProfile.username : "Sin Datos"}
          </Text>
          <Button mt={4} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default Welcome;
