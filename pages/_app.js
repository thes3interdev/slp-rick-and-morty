import { ApolloProvider } from '@apollo/client';
import client from '../utilities/ApolloClient';
import Layout from '../layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
