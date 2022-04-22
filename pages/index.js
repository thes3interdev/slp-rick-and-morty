import React, { useState } from 'react';
import client from '../utilities/ApolloClient';
import GET_CHARACTERS from '../graphql/queries/GetCharacters';
import Meta from '../utilities/Meta';

export default function Home(results) {
	const initialState = results;
	const [characters, setCharacters] = useState(initialState.characters);

	console.log(initialState);

	return (
		<div className="">
			<Meta title="Home | The Rick and Morty API | Superior Software Solutions" />
		</div>
	);
}

export const getStaticProps = async () => {
	const { data } = await client.query({
		query: GET_CHARACTERS,
	});

	return {
		props: {
			characters: data.characters.results,
		},
	};
};
