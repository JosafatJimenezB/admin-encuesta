import { Flex, Text, Badge, Box } from '@chakra-ui/react'
import questions from './questions'

const QuestionResponse = ({ data }) => {
  const getColorForAnswer = (answer) => {
    const colors = {
      verde: 'green',
      rojo: 'red',
      azul: 'blue'
    }
    return colors[answer] || 'gray'
  }

  const answerCounts = data.reduce((counts, item) => {
    item.responses.forEach((response, index) => {
      const answerKey = Object.keys(response)[0]
      const answer = item.responses[index][answerKey]
      counts[index] = counts[index] || {} // inicializar el objeto para la pregunta
      counts[index][answer] = (counts[index][answer] || 0) + 1 // incrementar el conteo de la respuesta
    })

    return counts
  }, {})

  const cantidadElementos = Object.keys(answerCounts).length
  delete answerCounts[Object.keys(answerCounts)[cantidadElementos - 1]]

  data.forEach((item) => {
    item.responses.forEach((response, index) => {
      const answerKey = Object.keys(response)[0]
      const answer = response[answerKey]
      if (item.responses[answerKey] === answer) {
        counts[index] = counts[index] || {} // inicializar el objeto para la pregunta
        counts[index][answer] = (counts[index][answer] || 0) + 1 // incrementar el conteo de la respuesta
      }
    })
  })
  return (
    <Flex w={'full'} flexDirection="column" rounded={'lg'} p={4} m={0}>
      {Object.values(answerCounts).map((answers, index) => {
        return (
          <Box key={index} bg={'blue.100'} p={2} mb={2}>
            <Flex flexDirection="column">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {questions[index].question}
              </Text>
              {questions[index].responses.map((response, responseIndex) => {
                const answer = response.answer
                const text = response.text
                const count = answers[answer] || 0
                return (
                  <Flex
                    key={responseIndex}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Box mr={2}>
                      <Badge
                        color={'white'}
                        rounded={'md'}
                        bg={`${getColorForAnswer(answer)}.500`}
                      >
                        {answer}
                      </Badge>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color={'gray.500'}>
                        {text}
                      </Text>
                    </Box>

                    <Box mr={2}>{count}</Box>
                  </Flex>
                )
              })}
            </Flex>
          </Box>
        )
      })}
    </Flex>
  )
}

export default QuestionResponse
