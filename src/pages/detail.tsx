import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Table,
  TableCaption,
  Thead,
  Th,
  Tfoot,
  Tbody,
  Tr,
  Td,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from '@chakra-ui/react';
import Head from 'next/head';

function Stats() {
 return (
 <StatGroup>
  <Stat>
    <StatLabel>Plaza</StatLabel>
    <StatNumber>46%</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      18 blocks
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Road</StatLabel>
    <StatNumber>82%</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      3 blocks
    </StatHelpText>
  </Stat>
  <Stat>
    <StatLabel>District</StatLabel>
    <StatNumber>51%</StatNumber>
    <StatHelpText>
      {/* <StatArrow /> */}
      6 blocks
    </StatHelpText>
  </Stat>
</StatGroup>)
}

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

function OfferTable() {
 return (
 <Table variant="simple">
  <Thead>
    <Tr>
      <Th>From</Th>
      <Th>Price</Th>
      <Th>Expiration</Th>
      <Th>Delta from Offer</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>ChaChaSlide</Td>
      <Td>1.4230 ($3,501)</Td>
      <Td>in 6 days</Td>
      <Td isNumeric>-0.1622</Td>
    </Tr>
    <Tr>
      <Td>Jamiroquai</Td>
      <Td>1.2566 ($3,214)</Td>
      <Td>in 21 days</Td>
      <Td isNumeric>-0.3304</Td>
    </Tr>
  </Tbody>
  <TableCaption textAlign="left">
    <Button colorScheme="blue" variant="outline">Make Offer</Button>
  </TableCaption>
</Table>)
}

function OtherAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Proximity Score
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      <Box>
        <Stats />
      </Box>
      <Box>
        Closest District: Vegas City
      </Box>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Price History
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Offers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      <OfferTable/>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  )
}

function DetailAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left"  fontWeight="bold">
          Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      <Table variant="unstyled" paddingLeft={0} marginLeft={0}>
        <Tbody>
          <Tr>
            <Td>Contract Address</Td>
            <Td>0xf87eiksfjsss</Td>
          </Tr>
          <Tr>
            <Td>Token ID</Td>
            <Td>837646463632</Td>
          </Tr>
          <Tr>
            <Td>Estate ID</Td>
            <Td>516727844</Td>
          </Tr>
          <Tr>
            <Td>Blockchain</Td>
            <Td>Ethereum</Td>
          </Tr>
        </Tbody>
    </Table>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight="bold">
        Description
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight="bold">
        Parcels
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>
      54 -26
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  )
}

export default function Detail({ assets }: { assets: any }) {
  return (
<Container maxW="container.xl">
  <Grid templateColumns="repeat(2, 1fr)" gap={15}>
  <Box w="100%" >
    <AirbnbExample/>
    <AlertBox />
  </Box>
  <Box>
    <DetailAccordion/>
  </Box>
  </Grid>
  <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={15}>
    <OtherAccordion/ >
</Grid>
  </Container>

  );
}
