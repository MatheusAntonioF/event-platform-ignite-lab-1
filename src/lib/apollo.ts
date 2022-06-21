import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o71dsb0y3g01xmhar27ctb/master',
  cache: new InMemoryCache(),
});
