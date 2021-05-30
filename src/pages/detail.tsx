import {
  Box,
  Grid,
  Container,
} from '@chakra-ui/react';
import DetailAccordion from '../components/Detail/DetailAccordion';
import AlertBox from '../components/Detail/AlertBox';
import MetricsAccordion from '../components/Detail/MetricsAccordion';
import DetailCard from '../components/Detail/DetailCard';
import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apollo';

const asset = {
  metaverse: 'Decentraland',
  land_type: 'Parcel',
  image_src: "https://lh3.googleusercontent.com/bHA7padmm0G17HKIOftzZqaajo0Pmv1xc2bQ2sDI5MpiYePAY5myang7QTSrQn4scLdnV7GXzCPFfntKQci7FzMSe27IpQz5DUiu4w",
  parcel_number: '54-26',
  owner: 'me',
  views: 840,
  current_bids: 7,
  price_eth: 1.58877,
  price_usd: 3765.55,
  sale_end: '27:34:13',
  contract_address: '0xf87eiksfjsss',
  token_id: 837646463632,
  estate_id: 516727844,
  blockchain: 'ethereum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  closest_district: 'Vegas City',
  insight: 'Hot Find! This parcel is closer to a Road than 60% of other parcels',
  plaza_score: 46,
  plaza_distance: 18,
  road_score: 82,
  road_distance: 3,
  district_score: 51,
  district_distance: 6,
  price_history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  offers: [
    { name: 'ChaChaSlide', price_eth: 1.4230, price_usd: 3501, expiration: '6 days', delta_from_offer: -0.1622},
    { name: 'Jamiroquai', price_eth: 1.2566, price_usd: 3214, expiration: '21 days', delta_from_offer: -0.3304}
  ]
}

export default function Detail() {
  const {
    metaverse,
    land_type,
    image_src,
    parcel_number,
    owner,
    views,
    current_bids,
    price_eth,
    price_usd,
    sale_end,
    contract_address,
    token_id,
    estate_id,
    blockchain,
    description,
    closest_district,
    insight,
    plaza_score,
    plaza_distance,
    road_score,
    road_distance,
    district_score,
    district_distance,
    price_history,
    offers
  } = asset;

  const parcelBidHistoryQuery = (x , y) => ({
    query: gql`{
    parcels(where:{x:${x} y:${y}}){
      id
      x
      y
      estate{
        id
        size
      }
      nft{
        orders{
        id
        status
        price
        createdAt
        updatedAt
          nft{
            bids{
              id
              nftAddress
              price
              bidder
              seller
              status
              createdAt
              updatedAt
              expiresAt
            }
          }
          }
      }
    }
  }
  `
});

  const parcelPriceHistoryQuery = (x, y) => ({
    query: gql`
    {
      parcels(where:{x:${x} y:${y}}){
        id
        x
        y
        nft{
          orders{
          id
          status
          price
          createdAt
          updatedAt
            }
        }
      }
    }
    `,
  });

  useEffect(() => {
    async function blah () {
      const data = await client.query(parcelBidHistoryQuery(2, -150));

      console.log('zzz', data);
    }

    blah();
  }, []);

  return (
    <Container maxW="container.xl" h="100%">
    <Grid templateColumns="repeat(2, 1fr)" gap={15}>
      <Box w="100%" >
        <DetailCard
            metaverse={metaverse}
            land_type={land_type}
            image_src={image_src}
            parcel_number={parcel_number}
            owner={owner}
            views={views}
            current_bids={current_bids}
            price_eth={price_eth}
            price_usd={price_usd}
        />
        <AlertBox sale_end={sale_end} />
      </Box>
      <Box>
        <DetailAccordion
          contract_address={contract_address}
          token_id={token_id}
          estate_id={estate_id}
          blockchain={blockchain}
          description={description}
          parcel_number={parcel_number}
          />
      </Box>
    </Grid>
    <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={15}>
      <MetricsAccordion
        closest_district={closest_district}
        insight={insight}
        plaza_score={plaza_score}
        plaza_distance={plaza_distance}
        road_score={road_score}
        road_distance={road_distance}
        district_score={district_score}
        district_distance={district_distance}
        price_history={price_history}
        offers={offers}
      />
    </Grid>
  </Container>
  );
}
