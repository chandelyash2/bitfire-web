import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/client/apollo";
import "@/styles/globals.css";
import { CMSContext } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps as any);

  return (
    <ApolloProvider client={apolloClient}>
      <CMSContext>
        <Component {...pageProps} />
      </CMSContext>
    </ApolloProvider>
  );
}
