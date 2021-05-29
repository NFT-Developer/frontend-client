import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Tbody,
  Tr,
  Td
} from '@chakra-ui/react';

export default function DetailAccordion({
  contract_address,
  token_id,
  estate_id,
  blockchain,
  description,
  parcel_number
}) {
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
                <Td>{contract_address}</Td>
              </Tr>
              <Tr>
                <Td>Token ID</Td>
                <Td>{token_id}</Td>
              </Tr>
              <Tr>
                <Td>Estate ID</Td>
                <Td>{estate_id}</Td>
              </Tr>
              <Tr>
                <Td>Blockchain</Td>
                <Td>{blockchain}</Td>
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
          {description}
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
          {parcel_number}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}