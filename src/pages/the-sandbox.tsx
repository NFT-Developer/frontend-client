import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar/TheSandbox';
import { useEffect, useState } from 'react';
import { Flex, Grid, Box, Image, List, ListItem } from '@chakra-ui/react';

const Map = dynamic(() => import('../components/Map/TheSandbox'));

const endpointName = 'assets';
const url = `https://api.opensea.io/api/v1/${endpointName}?order_direction=desc&offset=0&limit=20&collection=sandbox`;
const options = { method: 'GET' };

const parseOpenSeaAssetResponse = (res) =>
  res.map((item) => ({
    image: item.image_preview_url,
    name: item.name,
    external_link: item.external_link,
    // traits: {
    //   type: item.traits.find((obj) => obj.trait_type === 'Type').value,
    //   size: item.traits.find((obj) => obj.trait_type === 'Size').value,
    //   distance_to_district: item.traits.find(
    //     (obj) => obj.trait_type.toString() === 'Distance to District',
    //   )?.value,
    //   distance_to_road: item.traits.find(
    //     (obj) => obj.trait_type === 'Distance to Road',
    //   )?.value,
    // },
  }));

export default function TheSandbox() {
  const [assets, setAssets] = useState([]);
  console.log('assets:', assets);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((json) => setAssets(parseOpenSeaAssetResponse(json.assets)))
      .catch((err) => console.error('error:' + err));
  }, []);
  return (
    <Flex position="relative" overflow="hidden" w="100%" minH="100vh">
      <Box w="60%" h="1000px">
        <Map />
      </Box>
      <Box w="40%" h="1000px" mr={5}>
        <Sidebar assets={assets} />
      </Box>
    </Flex>
  );
}
