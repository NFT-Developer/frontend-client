import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const { MapContainer } = ReactLeaflet;

export default function Map({ children, ...rest }) {
  // return <Box h="80vh">cryptovoxelmap</Box>;
  // return;

  return <MapContainer {...rest}>{children(ReactLeaflet)}</MapContainer>;
}
