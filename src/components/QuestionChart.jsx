import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell
} from 'recharts'
import questions from './questions'

const QuestionChart = ({ data }) => {
  const colors = ['#00FF00', '#FF0000', '#0000FF']

  return (
    <Flex w={'full'} flexDirection="column" rounded={'lg'} p={4} m={0}>
      {questions.map((question, index) => {
        const title = question.question
        const answerCounts = data.reduce((counts, item) => {
          const response = item.responses[index]
          const answerKey = Object.keys(response)[0]
          const answer = response[answerKey]
          counts[answer] = (counts[answer] || 0) + 1 // increment answer count
          return counts
        }, {})

        const chartData = Object.keys(answerCounts).map((key) => {
          const value = answerCounts[key]
          return {
            name: key,
            value
          }
        })
        chartData.sort((a, b) => {
          const order = ['verde', 'rojo', 'azul']
          return order.indexOf(a.name) - order.indexOf(b.name)
        })

        return (
          <Flex
            key={index}
            w={'auto'}
            flexDirection="column"
            p={4}
            m={4}
            maxW={500}
            align={'start'}
          >
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <BarChart width={350} height={150} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default QuestionChart
