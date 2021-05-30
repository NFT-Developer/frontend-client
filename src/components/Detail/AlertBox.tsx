import {
  Box,
  Button,
  Container,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

export default function AlertBox({ sale_end }) {
  return (
    <Box color="white" border="1px solid" borderColor="red.600">
      <Alert status="error" bgColor="red.600">
        <AlertIcon color="white" />
        <AlertDescription>Sale ends at {sale_end}.</AlertDescription>
      </Alert>
      <Container centerContent p="2">
        <Button colorScheme="purple">Buy now</Button>
      </Container>
    </Box>
  );
}
