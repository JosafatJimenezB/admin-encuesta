import React from 'react'
import { Flex, Text, color } from '@chakra-ui/react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import questions from './questions'

const QuestionChart = ({ data }) => {
  return (
    <Flex w={'full'} flexDirection="column" rounded={'lg'} p={4} m={0}>
      {questions.map((question, index) => {
        console.log(question)
        const title = question.question
        const colors = ['#FF0000', '#00FF00', '#0000FF']

        console.log(colors)

        const answerCounts = data.reduce((counts, item) => {
          const response = item.responses[index]
          const answerKey = Object.keys(response)[0]
          const answer = response[answerKey]
          counts[answer] = (counts[answer] || 0) + 1 // incrementar el conteo de la respuesta
          return counts
        }, {})

        const chartData = Object.keys(answerCounts).map((key, index) => {
          const value = answerCounts[key]
          return {
            name: key,
            value
          }
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
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default QuestionChart
