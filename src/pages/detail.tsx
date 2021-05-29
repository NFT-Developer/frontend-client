import {
  Box,
  Grid,
  Container,
} from '@chakra-ui/react';
import DetailAccordion from '../components/Detail/DetailAccordion';
import AlertBox from '../components/Detail/AlertBox';
import MetricsAccordion from '../components/Detail/MetricsAccordion';
import DetailCard from '../components/Detail/DetailCard';

export default function Detail({ assets }: { assets: any }) {
  return (
    <Container maxW="container.xl" h="100%">
    <Grid templateColumns="repeat(2, 1fr)" gap={15}>
      <Box w="100%" >
        <DetailCard/>
        <AlertBox />
      </Box>
      <Box>
        <DetailAccordion />
      </Box>
    </Grid>
    <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={15}>
      <MetricsAccordion />
    </Grid>
  </Container>
  );
}
