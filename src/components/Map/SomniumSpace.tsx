import { Box, AspectRatio } from '@chakra-ui/react';

export default function Map() {
  return (
    <Box h="80vh" w="100%">
      <AspectRatio className="box-work">
        <Box
          className="work-video"
          as="iframe"
          borderRadius="0px 0px 25px 25px"
          src={`https://map.somniumspace.com/`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></Box>
      </AspectRatio>
    </Box>
  );
}
