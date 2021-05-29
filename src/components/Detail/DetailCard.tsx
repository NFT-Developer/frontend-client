import {
  Box,
  Image,
  Text,
  Heading
} from '@chakra-ui/react';

export default function DetailCard({
  metaverse,
  land_type,
  image_src,
  parcel_number,
  owner,
  views,
  current_bids,
  price_eth,
  price_usd
}) {
  return (
    <Box  overflowX="hidden">
      <Box d="flex" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold">{metaverse}</Text>
        <Text fontWeight="bold">{land_type}</Text>
      </Box>
        <Image src={image_src} width="100%" height="200px"/>
      <Box d="flex" flexDir="row" justifyContent="space-between">
        <Box>
          <Box
            fontWeight="semibold"
            lineHeight="tight"
            isTruncated
          >
            <Heading size="lg">Parcel {parcel_number}</Heading>
          </Box>

          <Box>
          <Heading size="md">owned by {owner}</Heading>
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
            {views} views, {current_bids} current
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {price_eth} (${price_usd})
          </Box>
        </Box>
      </Box>
    </Box>
  )
}