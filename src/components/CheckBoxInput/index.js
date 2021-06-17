import { Checkbox } from '@chakra-ui/checkbox';
import React from 'react';

const CheckBoxInput = ({ isChecked, onChecked, ...props }) => {
  return (
    <Checkbox
      defaultChecked={false}
      checked={isChecked}
      onBlur={() => {}}
      onChange={onChecked}
      size="lg"
      {...props}
    />
  );
};

export default CheckBoxInput;
