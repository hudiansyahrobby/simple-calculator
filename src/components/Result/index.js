import { Flex, Text } from '@chakra-ui/layout';

const Result = ({ result }) => {
  return (
    <Flex justifyContent="space-between" mt="20px">
      <Text fontSize="lg">Hasil : </Text>
      <Text fontSize="lg">{result}</Text>
    </Flex>
  );
};

export default Result;
