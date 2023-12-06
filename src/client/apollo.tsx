import { useMemo } from 'react';
import { IncomingMessage, ServerResponse } from 'http';
import cookie from 'cookie';
import {
  ApolloClient,
  split,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createClient } from 'graphql-ws';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: any;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((graphqlError) => {
      // const { message, locations, path } = graphqlError;
      try {
        // Sentry.captureMessage(message);
      } catch (err) {
        console.log('err', err);
      }
      return graphqlError;
    });
  }
  if (networkError) {
    try {
      // Sentry.captureException(networkError);
    } catch (err) {
      console.log('err', err);
    }
  }
  // prepared for logging
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {

      },
    },
  },
});

function createApolloClient(context?: ResolverContext) {
  const authLink = setContext((_, { headers }) => {
    const token= sessionStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? token : '',
      },
    };
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const SUBSCRIPTION_URL = process.env.NEXT_PUBLIC_SUBSCRIPTION_URL as string;

  const httpLink = new HttpLink({
    uri: API_URL,
    credentials: 'same-origin',
  });

  const wsLink =
    typeof window !== 'undefined'
      ? new GraphQLWsLink(
          createClient({
            url: SUBSCRIPTION_URL,
            on: {
              connected: () => console.log('Connected client!'),
              closed: () => console.log('Closed ws-connection!'),
            },
          }),
        )
      : null;

  const splitLink =
    typeof window !== 'undefined' && wsLink != null
      ? split(
          ({ query }) => {
            const def = getMainDefinition(query);
            return (
              def.kind === 'OperationDefinition' &&
              def.operation === 'subscription'
            );
          },
          wsLink,
          ApolloLink.concat(errorLink, authLink.concat(httpLink)),
        )
      : ApolloLink.concat(errorLink, authLink.concat(httpLink));

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: splitLink,
    cache,
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
  context?: ResolverContext,
): ApolloClient<NormalizedCacheObject> {
  const apolloClientInitialized = apolloClient ?? createApolloClient(context);

  if (initialState) {
    const existingCache = apolloClientInitialized.extract();

    apolloClientInitialized.cache.restore({
      ...existingCache,
      ...initialState,
    });
  }

  if (typeof window === 'undefined') return apolloClientInitialized;

  if (!apolloClient) apolloClient = apolloClientInitialized;

  return apolloClientInitialized;
}

export function useApollo(
  initialState: NormalizedCacheObject | null,
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
