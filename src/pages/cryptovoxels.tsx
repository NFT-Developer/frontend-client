import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar/Cryptovoxels';
import { useEffect, useState } from 'react';
import { Flex, Grid, Box, Image, List, ListItem } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const Map = dynamic(() => import('../components/Map/Cryptovoxels/Map'));

const url = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cryptovoxels`;
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

export default function Cryptovoxels() {
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
        <Box maxH="100px">
          <Map className={styles.homeMap} center={[1.86, 0.82]} zoom={8}>
            {({ TileLayer }) => (
              <TileLayer url="https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}" />
            )}
          </Map>
          {/* <Box
            className="work-video"
            as="iframe"
            // borderRadius="0px 0px 25px 25px"
            src={`https://map.somniumspace.com/`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></Box> */}
        </Box>
      </Box>
      <Box w="40%" h="1000px" mr={5}>
        <Sidebar assets={assets} />
      </Box>
    </Flex>
  );
}
