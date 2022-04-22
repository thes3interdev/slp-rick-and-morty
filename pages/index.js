import React, { useState } from 'react';
import { gql } from '@apollo/client';
import client from '../utilities/ApolloClient';
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
		query: gql`
			query {
				characters(page: 1) {
					info {
						count
						pages
					}
					results {
						id
						name
						location {
							id
							name
						}
						origin {
							id
							name
						}
						episode {
							id
							episode
							air_date
						}
						image
					}
				}
			}
		`,
	});

	return {
		props: {
			characters: data.characters.results,
		},
	};
};
