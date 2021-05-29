import { Box, AspectRatio } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Map() {
  return (
    <Box h="80vh" w="100%">
      {/* <iframe src="https://map.somniumspace.com/"></iframe> */}
      <AspectRatio className="box-work">
        <Box
          className="work-video"
          as="iframe"
          borderRadius="0px 0px 25px 25px"
          src={`https://www.sandbox.game/en/map/`}
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></Box>
      </AspectRatio>
    </Box>
  );
}
