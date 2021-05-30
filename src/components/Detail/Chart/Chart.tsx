import { Flex } from '@chakra-ui/react';
import Example from './Example';

export default function Chart() {
  return (
    <Flex maxH="800px" align="center" justify="center">
      <Example width={1100} height={400} />
    </Flex>
  );
}
