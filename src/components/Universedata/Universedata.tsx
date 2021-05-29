import { Box, Grid } from '@chakra-ui/layout';
import { assertSchema } from 'graphql';

export default function Universedata({ counts }: { counts: any }) {
  return (
    <Box p="4">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Total Parcels: {counts[0].parcelTotal}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Total Estates: {counts[0].estateTotal}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Average Price:
        </Box>
      </Grid>
    </Box>
  );
}
