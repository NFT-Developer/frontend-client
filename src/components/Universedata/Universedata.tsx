import { Box, Grid } from '@chakra-ui/layout';
import { assertSchema } from 'graphql';
import client from '../../lib/apollo';
import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';


export default function Universedata({ counts = null, metaverse }: { counts?: any, metaverse: string }) {
  const getMetaverseQuery = (meta: string) => {
    if (meta === 'decentraland') {
      return {
        query: gql`{counts {
          parcelTotal
          estateTotal
        }
      }`
    }
  }
}
  const [totals, setTotals ] = useState({
    estateTotal: '',
    parcelTotal: ''
  });

  useEffect(() => {
    async function blah() {
      const query = getMetaverseQuery(metaverse);
      const result = await client.query(query);
      setTotals({
        estateTotal: result.data.counts[0].estateTotal,
        parcelTotal: result.data.counts[0].parcelTotal,
      });
    }

    const result = blah();
  }, []);


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
          Total Parcels: {totals.parcelTotal}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Total Estates: {totals.estateTotal}
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
