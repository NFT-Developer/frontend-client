import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Box mb="2rem">{children}</Box>
    </Box>
  );
}
