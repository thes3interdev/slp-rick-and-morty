import { ApolloClient, InMemoryCache } from '@apollo/client';

/** configure the apollo graphql client */
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://rickandmortyapi.com/graphql/'
			: 'https://rickandmortyapi.com/graphql/',
	cache: new InMemoryCache(),
});

export default client;
