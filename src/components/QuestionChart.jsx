// QuestionChart.jsx

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const QuestionChart = ({ question, data }) => {
  const title = question.question;

  const prepareChartData = () => {
    const counts = {};
    question.responses.forEach((response) => {
      const respuesta = Object.values(response)[0];
      counts[respuesta] = 0;
    });

    data.forEach((item) => {
      if (item.responses && item.responses[0]) {
        const responseValues = Object.values(item.responses[0]);
        const respuestaAPI = responseValues[0];

        if (respuestaAPI in counts) {
          counts[respuestaAPI] += 1;
        }
      }
    });

    return Object.keys(counts).map((respuesta) => ({
      name: respuesta,
      count: counts[respuesta],
    }));
  };

  const chartData = prepareChartData();

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
