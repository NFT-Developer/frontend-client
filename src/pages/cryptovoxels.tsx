import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { Flex, Grid, Box, Image, List, ListItem } from '@chakra-ui/react';

// const Map = dynamic(() => import('../components/Map'));

export default function Cryptovoxels() {
  return (
    <Flex position="relative" overflow="hidden" w="100%" minH="100vh">
      <Box w="60%" h="1000px">
        {/* <Map /> */}
      </Box>
      <Box w="40%" h="1000px" mr={5}>
        {/* <Sidebar assets={assets} /> */}
      </Box>
    </Flex>
  );
}
