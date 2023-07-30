import { Flex, Text, Container, Spacer, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import questions from "./questions";
import QuestionResponse from "./QuestionResponse";
import QuestionChart from "./QuestionChart";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_DATA_ALL}/all`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Flex w={"full"} p={0} m={0} flexDir={"column"}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Estadísticas de los datos
      </Text>
      <Flex
        w={"full"}
        border={"4px"}
        borderColor={"blue.400"}
        rounded={"lg"}
        flexDir="column"
        flexWrap={"wrap"}
      >
        {questions.map((question, index) => (
          <Flex
            bg={"gray.50"}
            w={"auto"}
            flexDir={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
            justify={"center"}
            key={index}
          >
            <Box
              w={{ base: "100%", md: "100%" }}
              bg={"blue.100"}
              align={{ base: "start", md: "center" }}
              ml={{ base: 0, md: 4, lg: 6 }}
            >
              <QuestionResponse question={question} data={data} />
            </Box>
            <Spacer />
            <Box w={"100%"}>
              <QuestionChart question={question} data={data} />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Data;
