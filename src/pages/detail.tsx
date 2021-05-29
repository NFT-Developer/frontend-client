import {
  Flex,
  Box,
  Img,
  Button,
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
  Container,
  Center,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import Head from 'next/head';

// Sample card from Airbnb

/*
image_original_url: "https://api.decentraland.org/v2/estates/4194/map.png?size=24&width=1024&height=1024"
image_preview_url: "https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w=s250"
image_thumbnail_url: "https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w=s128"
image_url: "https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w"
*/
function AirbnbExample() {
  const property = {
    imageUrl: "https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w",
    imageAlt: "Rear view of modern home with pool"
  }

  return (
    <Box  overflowX="hidden">
      <Box d="flex" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold">Decentraland</Text>
        <Text fontWeight="bold">Parcel</Text>
      </Box>
      {/* <Box height="200px" overflowY="clip"> */}
        <Image src={property.imageUrl} alt={property.imageAlt} width="100%" height="200px"/>
      {/* </Box> */}
      <Box d="flex" flexDir="row" justifyContent="space-between">
        <Box>
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Heading size="lg">Parcel 54 - 26</Heading>
          </Box>

          <Box>
          <Heading size="md">owned by me</Heading>
          </Box>
        </Box>
        <Box d="flex" flexDir="column">
          <Box
          mt="1"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            840 views, 7 current
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            1.58877 ($3765.50)
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function AlertBox() {
  return (
    <Box color="white" border="1px solid" borderColor="red">
    <Alert status="error" bgColor="red">
      <AlertIcon color="white"/>
      <AlertDescription>Sale ends tomorrow in 27:34:13.</AlertDescription>
    </Alert>
    <Container centerContent p="2">
    <Button colorScheme="blue">Buy Now</Button>
    </Container>
  </Box>
  );
}

export default function Detail({ assets }: { assets: any }) {
  return (
<Container maxW="container.xl">
  <Grid templateColumns="repeat(2, 1fr)" gap={15}>
  <Box w="100%" >
    <AirbnbExample/>
    <AlertBox />
  </Box>
  <Box w="100%" h="10" bg="blue.500" />
  </Grid>
  <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={15}>
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
</Grid>
  </Container>

  );
}
