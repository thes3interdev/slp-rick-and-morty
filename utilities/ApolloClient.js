import { ApolloClient, InMemoryCache } from '@apollo/client';

/** configure the apollo graphql client */
const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql/',
	cache: new InMemoryCache(),
});

export default client;
