import React, { useEffect, useState } from "react";
import { Flex, Text, Container, Button, Box, Spacer } from "@chakra-ui/react";
import questions from "./questions";
import QuestionResponse from "./QuestionResponse";
import QuestionChart from "./QuestionChart";
import Papa from "papaparse";

const Data = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_DATA_ALL}/all`
        );
        const data = await response.json();
        setData(data);
        setIsDataLoaded(true); // Marcar que los datos se han cargado
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, []);

  const handleDownloadCSV = () => {
    const csvData = prepareCSVData(data);
    const csv = Papa.unparse(csvData);

    // Crear y descargar el archivo CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const prepareCSVData = (data) => {
    const csvData = data.map((item) => {
      return [
        item.createdAt,
        item.ubication.lat,
        item.ubication.long,
        item.responses[0].answer1,
        item.responses[0].answer2,
        item.responses[0].answer3,
        item.responses[0].answer4,
        item.responses[0].answer5,
        item.responses[0].answer6,
        item.responses[0].answer7,
      ];
    });

    // Agregar una fila para los encabezados del CSV (opcional)
    csvData.unshift([
      "Fecha de creación",
      "Latitud",
      "Longitud",
      "Respuesta 1",
      "Respuesta 2",
      "Respuesta 3",
      "Respuesta 4",
      "Respuesta 5",
      "Respuesta 6",
      "Respuesta 7",
    ]);

    return csvData;
  };

  return (
    <Flex w={"full"} p={0} m={0} flexDir={"column"}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Estadísticas de los datos
      </Text>
      <Container
        maxW={"container.xl"}
        w={"full"}
        p={0}
        m={0}
        flexDir={"column"}
        align={"center"}
      >
        <Button
          colorScheme="blue"
          onClick={handleDownloadCSV}
          disabled={!isDataLoaded}
        >
          Descargar datos en CSV
        </Button>
      </Container>

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
