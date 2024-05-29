import { ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export type ProviderProps = {
  children: ReactNode;
};

/**
 * Gracefully handle loading environment variables in the browser.
 */
const maybeProcessEnv = (key: string, defaultValue: string) => {
  try {
    return process.env[key] ?? defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export function AcmeApolloProvider({ children }: ProviderProps) {
  const gatewayUrl = maybeProcessEnv('BACKEND_URL', 'http://34.136.188.130');

  const client = new ApolloClient({
    uri: `${gatewayUrl}/graphql`,
    cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
