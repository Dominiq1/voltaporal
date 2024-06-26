import "@/styles/globals.css";
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

import { LicenseInfo } from "@mui/x-license-pro";

LicenseInfo.setLicenseKey(
  "9e17734200a964cd420488accda5490fTz01ODkyOSxFPTE3MDY4NzA0MzEyMTAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

export default function App({ Component, pageProps }) {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          leads: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          users: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  // uri: ' https://vcinventory.herokuapp.com/graphql',
  //      uri: 'http://localhost:5000/graphql',
  //  https://voltaicinventory.herokuapp.com/graphql
  //  uri: 'https://voltaicapiio.herokuapp.com/graphql',
  // ' https://vcinventory.herokuapp.com/graphql',
  // uri: "https://vcintake-daee1e96746f.herokuapp.com/graphql",
  // uri: "https://vcintake-daee1e96746f.herokuapp.com/graphql",
  const client = new ApolloClient({
   // uri: "http://localhost:4000/graphql",
   // uri: "https://vcintake-daee1e96746f.herokuapp.com/graphql",
  uri: "https://voltaicintake-b36b2251c323.herokuapp.com/graphql",
  //  uri: "http://localhost:4000/graphql",
    cache,
    
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
