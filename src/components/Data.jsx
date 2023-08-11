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
        setIsDataLoaded(true);
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
      const rowData = [item.createdAt, item.ubication.lat, item.ubication.long];

      // Iterar a través de todas las preguntas (answer1 a answer7)
      for (let i = 1; i <= 7; i++) {
        const questionKey = `answer${i}`;
        const response = item.responses.find(
          (response) => response[questionKey]
        );
        rowData.push(response ? response[questionKey] : "");
      }

      return rowData;
    });

    // Agregar una fila para los encabezados del CSV (opcional)
    csvData.unshift([
      "Fecha de creación",
      "Latitud",
      "Longitud",
      "Es Usted...",
      "Su negocio es",
      "Si le ofrecieran algún crédito ¿Para que lo usaría?",
      "Si puede conectarse via internet, ¿Qué dispositivo podría usar?",
      "¿Usted usaría comercio electronico via una APP para vender su producto o servicio?",
      "¿Usted cuenta con una terminal para el cobro con tarjeta de crédito?",
      "¿Que tipo de capacitación le interesaría más para su negocio?",
    ]);
    return csvData;
  };

  return (
    <Flex w={"full"} p={0} m={0} flexDir={"column"}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }} my={3}>
        Estadísticas de los datos
      </Text>
      <Container
        w={"full"}
        p={0}
        m={0}
        mb={4}
        flexDir={"column"}
        align={"center"}
      >
        <Button
          my={2}
          colorScheme="blue"
          onClick={handleDownloadCSV}
          disabled={!isDataLoaded}
        >
          Descargar datos
        </Button>
      </Container>

      <Flex
        p={0}
        m={0}
        w={"full"}
        rounded={"lg"}
        flexDir="column"
        flexWrap={"wrap"}
      >
        <Flex
          bg={"gray.50"}
          w={"auto"}
          flexDir={{ base: "column", md: "row" }}
          align={{ base: "start" }}
          justify={"center"}
        >
          <Box
            w={{ base: "100%", md: "100%" }}
            m={0}
            ml={{ base: 0, md: 0, lg: 6 }}
            p={0}
          >
            <QuestionResponse data={data} />
          </Box>

          <Spacer />
          <Box w={"100%"}>
            <QuestionChart data={data} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Data;
