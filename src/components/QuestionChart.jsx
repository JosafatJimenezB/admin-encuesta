import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const QuestionChart = ({ question, data }) => {
  const title = question.question;
  const responses = question.responses;

  const [answerCounts, setAnswerCounts] = useState({});

  useEffect(() => {
    if (data && data.length > 0) {
      const counts = { verde: 0, rojo: 0, azul: 0 }; // Initialize counts object with 0 values for each color
      data.forEach((item) => {
        responses.forEach((response) => {
          const answerKey = Object.keys(response)[0];
          const answer = response[answerKey];
          if (item.responses[answerKey] === answer) {
            counts[answer] += 1; // Increment count for the corresponding color
          }
        });
      });
      setAnswerCounts(counts);
    }
  }, [data, responses]);

  const chartData = responses.map((response) => ({
    name: response.answer,
    count: answerCounts[response.answer] || 0,
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
