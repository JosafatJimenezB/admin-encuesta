import React from "react";
import { Flex, Text, color } from "@chakra-ui/react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import questions from "./questions";

const QuestionChart = ({ data }) => {
  return (
    <Flex w={"full"} flexDirection="column" rounded={"lg"} p={4} m={0}>
      {questions.map((question, index) => {
        const title = question.question;
        //const colors = ["#FF0000", "#00FF00", "#0000FF"];
        const answerCounts = data.reduce((counts, item) => {
          const response = item.responses[index];
          const answerKey = Object.keys(response)[0];
          const answer = response[answerKey];
          counts[answer] = (counts[answer] || 0) + 1; // incrementar el conteo de la respuesta
          return counts;
        }, {});

        var barColor;

        const chartData = Object.keys(answerCounts).map((key, index) => {
          const value = answerCounts[key];
          if(key === 'verde'){
            barColor = "#00FF00";
          }
          if(key === 'rojo'){
            barColor = "#FF0000";
          }
          if(key === 'azul'){
            barColor = "#0000FF";
          }
          return {
            name: key,
            value,
          };
        });
        chartData.sort((a, b) => {
          const order = ["verde", "rojo", "azul"];
          return order.indexOf(a.name) - order.indexOf(b.name);
        });

        return (
          <Flex
            key={index}
            w={"auto"}
            flexDirection="column"
            p={1}
            align={"start"}
          >
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <BarChart width={350} height={150} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill={barColor} />
            </BarChart>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default QuestionChart;
