import React, { useState } from 'react';
import client from '../utilities/ApolloClient';
import GET_CHARACTERS from '../graphql/queries/GetCharacters';
import Meta from '../utilities/Meta';
import DisplayCharacterCard from '../components/DisplayCharacterCard';

export default function Home(results) {
	const initialState = results;
	const [characters, setCharacters] = useState(initialState.characters);

	return (
		<div>
			<Meta title="Home | The Rick and Morty API | Superior Software Solutions" />
			<DisplayCharacterCard characters={characters} />
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
