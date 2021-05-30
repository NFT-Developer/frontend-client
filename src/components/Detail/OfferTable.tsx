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

export default function OfferTable({ orderHistory }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Created at</Th>
          <Th>Price</Th>
          <Th>Status</Th>
          <Th>Updated at</Th>
          <Th>Type</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orderHistory.map((order) => (
          <Tr key={order.__typename}>
            <Td>{order.createdAt}</Td>
            <Td>{order.price}</Td>
            <Td>{order.status}</Td>
            <Td>{order.updatedAt}</Td>
            <Td>{order.__typename}</Td>
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
