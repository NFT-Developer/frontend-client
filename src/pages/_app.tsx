import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import Layout from '../components/Layout';
import { theme } from '../theme';
import client from '../lib/apollo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MeMeta: Digital Land Aggregation</title>
        <meta name="description" content="digital land aggregation" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔭</text></svg>"
        />
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}
