// import * as ReactLeaflet from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// const { MapContainer } = ReactLeaflet;
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function Map({ children, ...rest }) {
  // return <MapContainer {...rest}>{children(ReactLeaflet)}</MapContainer>;
  return (
    <Alert status="error" variant="left-accent">
      <AlertIcon />
      <AlertTitle mr={2}>Could not load map.</AlertTitle>
      <AlertDescription>
        Please reload your browser and try again!
      </AlertDescription>
    </Alert>
  );
}
