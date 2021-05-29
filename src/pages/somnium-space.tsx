import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Image,
  List,
  ListItem,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';

const endpointName = 'assets';
const url = `https://api.opensea.io/api/v1/${endpointName}?order_direction=desc&offset=0&limit=20&collection=somnium-space`;
const options = { method: 'GET' };
// const Map = dynamic(() => import('../components/Map'));

export default function SomniumSpace() {
  const [assets, setAssets] = useState<any[]>([]);

  function parseOpenSeaAssetResponse(res) {
    return res.map((item) => ({
      image: item.image_preview_url,
      name: item.name,
      external_link: item.external_link,
      //   traits: {
      //     type: item.traits.find((obj) => obj.trait_type === 'Type').value,
      //     size: item.traits.find((obj) => obj.trait_type === 'Size').value,
      //     distance_to_district: item.traits.find(
      //       (obj) => obj.trait_type.toString() === 'Distance to District',
      //     )?.value,
      //     distance_to_road: item.traits.find(
      //       (obj) => obj.trait_type === 'Distance to Road',
      //     )?.value,
      //   },
    }));
  }

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((json) => {
        setAssets(parseOpenSeaAssetResponse(json.assets));
      })
      .catch((err) => console.error('error:' + err));
  }, []);

  function Card(asset) {
    const { image, name, external_link, traits } = asset.asset;

    const { type, size, distance_to_district, distance_to_road } = traits;

    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image} htmlWidth={'100%'} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <a href={external_link}>{name}</a>
          </Box>

          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              <List>
                <ListItem>type: {type}</ListItem>
                <ListItem>size: {size}</ListItem>
                <ListItem>
                  from district:{' '}
                  {distance_to_district ? distance_to_district : 'n/a'}
                </ListItem>
                <ListItem>
                  from road: {distance_to_road ? distance_to_road : 'n/a'}
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Flex position="relative" overflow="hidden" w="100%" minH="100vh">
      <Box w="60%" h="1000px">
        {/* <Map /> */}
      </Box>
      <Box w="40%" h="1000px" mr={5}>
        <Sidebar assets={assets} />
      </Box>
    </Flex>
  );
}
