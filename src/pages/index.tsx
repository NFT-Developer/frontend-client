import { useEffect, useState } from "react"
import {
  Grid,
  Box,
  Container,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react"
const endpointName = 'assets'
const url = `https://api.opensea.io/api/v1/${endpointName}?order_direction=desc&offset=0&limit=20&collection=decentraland`
const options = {method: 'GET'}

function Card(asset) {
  const {
    image,
    name,
    external_link,
    traits
  } = asset.asset

  const {
    type,
    size,
    distance_to_district,
    distance_to_road,
  } = traits

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} />
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
              <ListItem>from district: {distance_to_district ? distance_to_district : 'n/a'}</ListItem>
              <ListItem>from road: {distance_to_road ? distance_to_road : 'n/a'}</ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const parseOpenSeaAssetResponse = (res) => res.map((item) => ({
  image: item.image_preview_url,
  name: item.name,
  external_link: item.external_link,
  traits: {
    type: item.traits.find(obj => obj.trait_type === 'Type').value,
    size: item.traits.find(obj => obj.trait_type === 'Size').value,
    distance_to_district: item.traits.find(obj => obj.trait_type.toString() === 'Distance to District')?.value,
    distance_to_road: item.traits.find(obj => obj.trait_type === 'Distance to Road')?.value
  }
}));

export default function Home() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res;
    })
    .then(json => setAssets(parseOpenSeaAssetResponse(json.assets)))
    .catch(err => console.error('error:' + err));
  }, []);

  return (
    <Container maxW="container.xl" mt={20}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {
          assets?.map((asset, i) => (<Card
            asset={asset}
            key={`${asset.name}-${i}`}
          />))
        }
      </Grid>
    </Container>
  );
}
