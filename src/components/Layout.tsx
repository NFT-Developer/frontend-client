import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from './Header';
import Dialogs from './Dialogs';
import Navbar from './Navbar';

import { keyframes } from '@emotion/react';

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxH="100vh">
      <Box
        w="100%"
        h="0.5rem"
        animation={`${shine} 10s ease-in-out infinite`}
        backgroundSize="200% auto"
        bgGradient="linear(to-l, #9D20F7, #13b9e4, #9D20F7)"
      />
      <Header />
      <Navbar />
      <Box>{children}</Box>
      <Dialogs />
    </Box>
  );
}
