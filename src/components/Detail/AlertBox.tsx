import {
  Box,
  Button,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  HStack,
} from '@chakra-ui/react';

export default function AlertBox({ sale_end }) {
  return (
    // <Box color="white" border="1px solid" borderColor="red.600">
    <Alert status="error" bgColor="red.600">
      <Flex justify="space-between" align="center" w="100%">
        <HStack>
          <AlertIcon color="white" />
          <AlertDescription>Sale ends at {sale_end}.</AlertDescription>
        </HStack>
        <Button size="lg" bgColor="white" color="black">
          Buy now
        </Button>
      </Flex>
    </Alert>
  );
}
