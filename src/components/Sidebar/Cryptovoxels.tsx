import {
  Flex,
  Box,
  Img,
  Image,
  List,
  ListItem,
  Grid,
  GridItem,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';

export default function Sidebar({ assets }: { assets: any }) {
  function Card(asset) {
    const { image, name, external_link, traits, last_sale } = asset.asset;

    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image} htmlWidth={'100%'} />
        <Box p="6" bgColor="gray.700">
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
                <ListItem>
                  Price: Ξ
                  {last_sale && last_sale.total_price
                    ? last_sale.total_price * 1e-18
                    : '-'}
                </ListItem>
                <ListItem>depth: {traits[0] ? traits[0].value : '-'}</ListItem>

                <ListItem>Island: {traits[5] ? traits[5].value : '-'}</ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Flex
      width="sm"
      position="relative"
      overflowY="auto"
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
              <Flex w="100%" pt="3rem" direction="column">
                <Text fontSize="1.25rem">About The Sandbox</Text>
                <Flex justify="space-between" mb="0.5rem" py="1.25rem">
                  <Text fontWeight="700">🏠 Total parcel</Text>
                  <Text>400</Text>
                </Flex>
                <Flex justify="space-between" mb="0.5rem" py="1.25rem">
                  <Text fontWeight="700">💰 Active wallets</Text>
                  <Text>250</Text>
                </Flex>
                <Flex justify="space-between" mb="0.5rem" py="1.25rem">
                  <Text fontWeight="700">💵 Primary sales</Text>
                  <Text>100</Text>
                </Flex>
                <Flex justify="space-between" mb="0.5rem" py="1.25rem">
                  <Text fontWeight="700">💎 Secondary sales</Text>
                  <Text>200</Text>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>events</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
