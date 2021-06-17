import { HStack } from '@chakra-ui/layout';
import OperationButton from '../OperationButton';

const OperationButtons = ({ onCalculate }) => {
  const operations = ['+', '-', 'x', '/'];
  return (
    <HStack align="10px">
      {operations.map(operation => (
        <OperationButton
          key={operation}
          operation={operation}
          onCalculate={onCalculate}
        />
      ))}
    </HStack>
  );
};

export default OperationButtons;
