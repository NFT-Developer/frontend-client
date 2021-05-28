import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import { Flex, Box } from '@chakra-ui/react';

const Map = dynamic(() => import('../components/Map'));

export default function Home() {
  return (
    <Flex position="relative" overflow="hidden" w="60%" minH="100vh">
      <Box w="60%" h="1000px">
        <Map />
      </Box>
      <Box w="40%" h="1000px">
        <Sidebar />
      </Box>
    </Flex>
  );
}
