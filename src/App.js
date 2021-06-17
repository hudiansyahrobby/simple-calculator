import { Box } from '@chakra-ui/layout';
import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <Calculator />
    </Box>
  );
}

export default App;
