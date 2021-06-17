import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';

const OperationButton = ({ operation, onCalculate }) => {
  return (
    <Button
      colorScheme="blue"
      size="md"
      alignItems="center"
      alignContent="center"
      display="inline-block"
      lineHeight="10px"
      onClick={() => onCalculate(operation)}
      w="53px"
    >
      <Text>{operation}</Text>
    </Button>
  );
};

export default OperationButton;
