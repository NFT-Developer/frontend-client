import {
  Box,
  Button,
  Container,
  Alert,
  AlertIcon,
  AlertDescription
} from '@chakra-ui/react';

export default function AlertBox() {
  return (
    <Box color="white" border="1px solid" borderColor="red">
      <Alert status="error" bgColor="red">
        <AlertIcon color="white"/>
        <AlertDescription>Sale ends tomorrow in 27:34:13.</AlertDescription>
      </Alert>
      <Container centerContent p="2">
        <Button colorScheme="blue">Buy Now</Button>
      </Container>
    </Box>
  );
}