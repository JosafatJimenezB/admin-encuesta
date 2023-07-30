import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const QuestionChart = ({ question, data }) => {
  const title = question.question;
  const responses = question.responses;
  const [answerCounts, setAnswerCounts] = useState({}); // Initialize counts object

  useEffect(() => {
    if (data && data.length > 0) {
      const counts = {}; // Initialize counts object

      // Inicializamos los contadores para cada respuesta en 0
      responses.forEach((response) => {
        const respuesta = Object.values(response)[0];
        counts[respuesta] = 0;
      });

      data.forEach((item) => {
        item.responses.forEach((response) => {
          const respuestaAPI = Object.values(response)[0]; // Get the value of the response from API data
          counts[respuestaAPI] += 1; // Increment count for the corresponding response
        });
      });

      setAnswerCounts(counts);
    }
  }, [data, responses]);

  const chartData = responses.map((response) => ({
    name: Object.values(response)[0], // Get the value of the response (e.g., "verde")
    count: answerCounts[Object.values(response)[0]] || 0, // Get the count for the response
  }));

  return (
    <Flex
      w={"auto"}
      flexDirection="column"
      p={4}
      m={4}
      maxW={500}
      align={"start"}
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <BarChart width={300} height={150} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </Flex>
  );
};

export default QuestionChart;
