import {
  Button,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td
} from '@chakra-ui/react';

export default function OfferTable() {
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
    </Table>
  )
}