import { HStack } from '@chakra-ui/layout';
import React from 'react';
import CheckBoxInput from '../CheckBoxInput';
import InputNumber from '../InputNumber';

const CalculatorInput = ({
  name,
  onChangeNumber,
  onChecked,
  number,
  isChecked,
}) => {
  return (
    <HStack spacing="20px">
      <InputNumber value={number} onChange={onChangeNumber} name={name} />
      <CheckBoxInput isChecked={isChecked} onChecked={onChecked} name={name} />
    </HStack>
  );
};

export default CalculatorInput;
