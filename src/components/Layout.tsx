import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Header />
      <Box mb="2rem">{children}</Box>
    </Box>
  );
}
