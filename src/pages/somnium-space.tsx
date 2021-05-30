import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar/SomniumSpace';
import { useEffect, useState } from 'react';
import { Flex, Grid, Box, Image, List, ListItem } from '@chakra-ui/react';

const Map = dynamic(() => import('../components/Map/SomniumSpace'));

const url =
  'https://api.opensea.io/api/v1/assets?asset_contract_addresses=0x913ae503153d9a335398d0785ba60a2d63ddb4e2&order_by=sale_price&order_direction=desc&offset=0&limit=20&collection=somnium-space';
const options = { method: 'GET' };

const parseOpenSeaAssetResponse = (res) =>
  res.map((item) => ({
    image: item.image_preview_url,
    name: item.name,
    external_link: item.external_link,
    traits: item.traits,
    last_sale: item.last_sale,
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

export default function SomniumSpace() {
  const [assets, setAssets] = useState([]);

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
