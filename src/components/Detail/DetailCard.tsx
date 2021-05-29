import {
  Box,
  Image,
  Text,
  Heading
} from '@chakra-ui/react';

export default function DetailCard() {
  return (
    <Box  overflowX="hidden">
      <Box d="flex" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold">Decentraland</Text>
        <Text fontWeight="bold">Parcel</Text>
      </Box>
        <Image src="https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w" width="100%" height="200px"/>
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