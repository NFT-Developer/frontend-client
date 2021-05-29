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

export default function DetailAccordion() {
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