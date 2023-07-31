import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const QuestionChart = ({ question }) => {
  const title = question.question;
  const responses = question.responses;
  const [answerCounts, setAnswerCounts] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_DATA_ALL}/all`
        );
        const data = await response.json();

        const counts = { ...answerCounts };
        responses.forEach((response) => {
          const respuesta = Object.values(response)[0];
          counts[respuesta] = 0;
        });

        data.forEach((item) => {
          const responseValues = Object.values(item.responses[0]);
          const respuestaAPI = responseValues[0];

          if (respuestaAPI in counts) {
            counts[respuestaAPI] += 1;
          }
        });

        setAnswerCounts(counts);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, [responses, answerCounts]);

  const chartData = Object.keys(answerCounts).map((respuesta) => ({
    name: respuesta,
    count: answerCounts[respuesta] || 0,
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
