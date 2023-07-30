import { Flex, Text, Badge } from "@chakra-ui/react";

const QuestionResponse = ({ question, data }) => {
  const title = question.question;
  const responses = question.responses;

  const getColorForAnswer = (answer) => {
    const colors = {
      verde: "green",
      rojo: "red",
      azul: "blue",
    };
    return colors[answer] || "gray";
  };

  const answerCounts = responses.reduce((counts, response) => {
    counts[response.answer] = 0;
    console.log(counts);
    return counts;
  }, {});

  data.forEach((item) => {
    responses.forEach((response) => {
      const answerKey = Object.keys(response)[0];
      const answer = response[answerKey];
      if (item.responses[answerKey] === answer) {
        answerCounts[answer] += 1;
      }
    });
  });

  return (
    <Flex w={"full"} flexDirection="column" rounded={"lg"} p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      {responses.map((response, index) => {
        const answerKey = Object.keys(response)[0];
        const answer = response[answerKey];

        return (
          <Text key={index} my={1}>
            <Badge
              rounded={"md"}
              bg={`${getColorForAnswer(response.answer)}.300`}
            >
              {response.answer}
            </Badge>{" "}
            {response.text}: {answerCounts[answer]}
          </Text>
        );
      })}
    </Flex>
  );
};

export default QuestionResponse;
