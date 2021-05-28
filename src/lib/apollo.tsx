import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/decentraland/marketplace',
  cache: new InMemoryCache(),
});

export default client;
