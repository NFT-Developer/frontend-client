import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component }) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
