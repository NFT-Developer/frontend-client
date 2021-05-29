import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from './Header';
import Dialogs from './Dialogs';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxH="100vh">
      <Header />
      <Navbar />
      <Box>{children}</Box>
      <Dialogs />
    </Box>
  );
}
