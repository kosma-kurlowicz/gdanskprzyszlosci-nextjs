import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://gpswp.chaocos.online/graphql",
    cache: new InMemoryCache(),
});

export default client;