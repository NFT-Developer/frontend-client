import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from './Header';
import Dialogs from './Dialogs';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Header />
      <Navbar />
      <Box mb="2rem">{children}</Box>
      <Dialogs />
    </Box>
  );
}
