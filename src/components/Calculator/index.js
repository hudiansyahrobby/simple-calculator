import { Box, Divider, Stack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { doOperate } from '../../helpers/doOperate';
import CalculatorInput from '../CalculatorInput';
import OperationButtons from '../OperationButtons';
import Result from '../Result';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: {
      value: '',
      isChecked: false,
    },
    input2: {
      value: '',
      isChecked: false,
    },
    input3: {
      value: '',
      isChecked: false,
    },
  });

  const [result, setResult] = useState(0);

  const insertNumber = e => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [inputName]: { ...input[inputName], value } });
  };

  const onCheckBox = e => {
    const inputName = e.target.name;
    const isChecked = e.target.checked;
    setInput({ ...input, [inputName]: { ...input[inputName], isChecked } });
  };

  const onCalculate = operation => {
    let total = 0;
    let countChecked = 0;
    for (const [, { value, isChecked }] of Object.entries(input)) {
      const _value = parseInt(value);
      if (isChecked && countChecked === 0) {
        total = _value;
        countChecked++;
      } else if (isChecked) {
        total = doOperate(total, _value, operation);
        countChecked++;
      }
    }

    if (countChecked === 1) {
      setResult('Syntax Error');
    } else {
      setResult(total);
    }
  };

  return (
    <Stack spacing="3">
      <CalculatorInput
        name="input1"
        onChangeNumber={insertNumber}
        number={input.input1.value}
        isChecked={input.input1.isChecked}
        onChecked={onCheckBox}
      />
      <CalculatorInput
        name="input2"
        onChangeNumber={insertNumber}
        number={input.input2.value}
        isChecked={input.input2.isChecked}
        onChecked={onCheckBox}
      />
      <CalculatorInput
        name="input3"
        onChangeNumber={insertNumber}
        number={input.input3.value}
        isChecked={input.input3.isChecked}
        onChecked={onCheckBox}
      />

      <Box w="240px" maxWidth="100%">
        <OperationButtons onCalculate={onCalculate} />
        <Divider borderBottomWidth="3px" pt="10px" w="240px" />
        <Result result={result} />
      </Box>
    </Stack>
  );
};

export default Calculator;
