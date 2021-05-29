import { Box, AspectRatio } from '@chakra-ui/react';

export default function Map() {
  return (
    <Box h="80vh" w="100%">
      <AspectRatio>
        <Box
          as="iframe"
          borderRadius="0px 0px 25px 25px"
          src={`https://www.sandbox.game/en/map/`}
        ></Box>
      </AspectRatio>
    </Box>
  );
}
