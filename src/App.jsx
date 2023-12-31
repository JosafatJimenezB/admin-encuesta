import { Container } from "@chakra-ui/react";
import "./index.css";
import AppRouter from "./routers";

function App() {
  return (
    <Container maxW="100%" h="100vh">
      <AppRouter />
    </Container>
  );
}

export default App;
