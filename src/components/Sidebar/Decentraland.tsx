import {
  Flex,
  Box,
  Badge,
  Image,
  List,
  ListItem,
  Grid,
  GridItem,
  Button,
  Img,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  chakra,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import client from '../../lib/apollo';
import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';

export default function Sidebar({
  assets,
  events,
}: {
  assets: any;
  events: any;
}) {
  function Card(asset) {
    const toPass =
      asset.asset.traits?.type === 'Estate'
        ? {
            id: asset.asset.token_id,
            type: asset.asset.traits.type,
          }
        : null;
    const { image, name, external_link, traits, id } = asset.asset;

    const router = useRouter();
    const pushRoute = () => {
      router.push(`/detail/${toPass.type.toLowerCase()}/${toPass.id}`);
    };

    const { image, name, external_link, traits } = asset.asset;
    const { type, size, distance_to_district, distance_to_road } = traits;

    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        onClick={pushRoute}
      >
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
                <ListItem>Price: {id && id ? id : '-'} MANA</ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  const [totals, setTotals] = useState({
    estateTotal: '',
    parcelTotal: '',
    totalParcels: '',
  });

  const getMetaverseQuery = (meta: string) => {
    if (meta === 'decentraland') {
      return {
        query: gql`
          {
            counts {
              parcelTotal
              estateTotal
            }
          }
        `,
      };
    }
  };

  useEffect(() => {
    (async () => {
      const query = getMetaverseQuery('decentraland');
      const result = await client.query(query);
      setTotals({
        estateTotal: result.data.counts[0].estateTotal,
        parcelTotal: result.data.counts[0].parcelTotal,
        totalParcels: '90,601',
      });
    })();
  }, []);

  function EventCard(event) {
    const { image, name, x, y, start_at, url } = event.event;

    function formatTime(time: any) {
      const d = new Date(time);
      const isoDate = d.toISOString();

      return `${isoDate.substr(0, 10)} ${isoDate.substr(11, 8)}`;
    }

    return (
      <Flex
        position="relative"
        minH="clamp(100px, 27.78vw, 400px)"
        minW="clamp(100px, 15.625vw, 250px)"
        flexDirection="column"
        justifyContent="flex-start"
        borderRadius="0.5rem"
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition={['0', '0%', '50% 70%']}
      >
        <Flex
          flexDirection="column"
          position="absolute"
          alignItems="stretch"
          justifyContent="stretch"
          bottom={'0rem'}
          bgColor="rgba(0, 0, 0, 0.8)"
          w="100%"
          p="0.5rem"
        >
          <Text fontWeight="600" color="white">
            {name}
          </Text>
          <Box overflow="hidden" whiteSpace="nowrap">
            <Text
              fontWeight="400"
              fontSize="0.6rem"
              color="white"
              textOverflow="ellipsis"
            >
              {formatTime(start_at)}
            </Text>
          </Box>

          <Flex
            align="center"
            justifyContent="flex-start"
            mt={['', '', '0.5rem']}
          >
            <Button
              as="a"
              colorScheme="purple"
              color="white"
              href={url}
              size="sm"
              target={'_blank'}
              aria-label={name}
              rel="noopener noreferrer"
            >
              Attend
            </Button>
            <Badge ml="1rem" colorScheme="purple">{`${x}, ${y}`}</Badge>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      width="sm"
      position="relative"
      direction="column"
      borderLeftWidth="1px"
      h="100%"
      w="100%"
    >
      <Box p="20px">
        <Tabs isFitted variant="solid-rounded" colorScheme="purple">
          <TabList
            mb="1rem"
            bgColor="gray.600"
            borderRadius="md"
            p="0.75rem"
            boxShadow="-1.5px 1.5px 1.5px black"
          >
            <Tab>Listings</Tab>
            <Tab>Details</Tab>
            <Tab>Events</Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              overflowY="auto"
              height="100vh"
              sx={{
                '::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                {assets?.map((asset, i) => (
                  <Card asset={asset} key={`${asset.name}-${i}`} />
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Flex w="100%" direction="column">
                <Flex
                  justify="space-between"
                  align="center"
                  mb="0.25rem"
                  py="0.5rem"
                >
                  <Text fontSize="1.5rem" fontWeight="600">
                    About Decentraland
                  </Text>
                  <Text>$0.7656</Text>
                </Flex>
                <Flex justify="space-between" mb="0.25rem" py="0.5rem">
                  <Text fontWeight="700">🏠 Active parcels</Text>
                  <Text>{totals.parcelTotal}</Text>
                </Flex>
                <Flex justify="space-between" mb="0.25rem" py="0.5rem">
                  <Text fontWeight="700">🏡 Active estates</Text>
                  <Text>{totals.estateTotal}</Text>
                </Flex>
                <Flex justify="space-between" mb="0.25rem" py="0.5rem">
                  <Text fontWeight="700">🏘 Total parcels</Text>
                  <Text>{totals.totalParcels}</Text>
                </Flex>
                <Flex justify="space-between" mb="0.25rem" py="0.5rem">
                  <Text fontWeight="700">🪙 Avg land price</Text>
                  <Text>Ξ8.69</Text>
                </Flex>
              </Flex>
              {/* <SquareGraph /> */}
              <Flex w="100%" justify="center" align="center" direction="column">
                <Img src="./square.png" h="14rem" />
                <Flex justify="space-between" mb="0.25rem" py="0.5rem">
                  <Text fontWeight="700">
                    Unique addresses:{' '}
                    <chakra.span fontWight="400">1049</chakra.span>
                  </Text>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel
              overflowY="auto"
              height="100vh"
              sx={{
                '::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                {events?.map((event, i) => (
                  <EventCard event={event} key={`${event.name}-${i}`} />
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
