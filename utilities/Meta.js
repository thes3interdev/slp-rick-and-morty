import Head from 'next/head';

const Meta = ({ title }) => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Access the Rick and Morty API to learn about GraphQL integration with Next.js."
				/>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<title>{title}</title>
			</Head>
		</div>
	);
};

Meta.defaultProps = {
	title: 'The Rick and Morty API | Superior Software Solutions',
};

export default Meta;
