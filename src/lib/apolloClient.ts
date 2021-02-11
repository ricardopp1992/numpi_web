import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;
const httpLink = new HttpLink({
  uri: 'http://localhost:1337/graphql'
});

const authMiddleware = (authToken: string) =>
  new ApolloLink((operation, forward) => {
    if (authToken) {
      operation.setContext({
        headers: {
          autorization: `Bearer ${authToken}`
        }
      });
    }

    return forward(operation);
  });

function createApolloClient(data: any) {
  return new ApolloClient({
    link: authMiddleware(data.jwt).concat(httpLink),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(data: any): ApolloClient<NormalizedCacheObject> {
  apolloClient = apolloClient ?? createApolloClient(data);
  return apolloClient;
}

export function useApollo(data) {
  return initializeApollo(data);
}
