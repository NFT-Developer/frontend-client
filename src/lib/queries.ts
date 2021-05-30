import { gql } from '@apollo/client';

export const parcelBidHistoryQuery = (x, y) => ({
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

export const parcelPriceHistoryQuery = (x, y) => ({
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

export const estatePriceHistoryQuery = (queryId) => ({
  query: gql`
  {
    estates (where:{id:"estate-0x959e104e1a4db6317fa58f8295f586e1a978c297-${queryId}"}){
      id
      size
      parcels{
        id
        x
        y
      }
      nft{
        orders{
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

export const estateBidsQuery = (queryId) => ({
  query: gql`
  {
      estates (where:{id:"estate-0x959e104e1a4db6317fa58f8295f586e1a978c297-${queryId}"}){
        id
        parcels
        {
          id
          x
          y
        }
        nft{
          orders{
          status
          price
          createdAt
          updatedAt
            nft{
              bids{
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
  `,
});
