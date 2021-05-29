import {
  Box,
  Button,
  Container,
  Alert,
  AlertIcon,
  AlertDescription
} from '@chakra-ui/react';

export default function AlertBox({sale_end}) {
  return (
    <Box color="white" border="1px solid" borderColor="red">
      <Alert status="error" bgColor="red">
        <AlertIcon color="white"/>
        <AlertDescription>Sale ends at {sale_end}.</AlertDescription>
      </Alert>
      <Container centerContent p="2">
        <Button colorScheme="blue">Buy Now</Button>
      </Container>
    </Box>
  );
}