import { Input } from '@chakra-ui/input';
import React from 'react';

const InputNumber = ({ value, onChange, ...props }) => {
  return (
    <Input
      placeholder="Masukkan Angka"
      type="number"
      onChange={onChange}
      value={value}
      variant="filled"
      {...props}
    />
  );
};

export default InputNumber;
