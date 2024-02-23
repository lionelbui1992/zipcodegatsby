import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://wordpress-897316-4088707.cloudwaysapps.com/headless/graphql",
  cache: new InMemoryCache(),
})
