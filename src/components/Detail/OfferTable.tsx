import {
  Button,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';

export default function OfferTable({ offers }) {
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
        {offers.map((offer) => (
          <Tr key={offer.name}>
            <Td>{offer.name}</Td>
            <Td>
              {offer.price_eth} (${offer.price_usd})
            </Td>
            <Td>in {offer.expiration}</Td>
            <Td>{offer.delta_from_offer}</Td>
          </Tr>
        ))}
      </Tbody>
      <TableCaption textAlign="left">
        <Button colorScheme="purple" variant="outline">
          Make Offer
        </Button>
      </TableCaption>
    </Table>
  );
}
