import React, { useState } from 'react';
import client from '../utilities/ApolloClient';
import GET_CHARACTERS from '../graphql/queries/GetCharacters';
import Meta from '../utilities/Meta';
import DisplayCharacterCard from '../components/DisplayCharacterCard';

export default function Home(results) {
	const initialState = results;
	const [characters, setCharacters] = useState(initialState.characters);
	const [search, setSearch] = useState('');

	return (
		<div className="mb-20">
			<Meta title="Home | The Rick and Morty API | Superior Software Solutions" />
			<div className="mx-3 my-10 max-w-lg rounded-lg border border-slate-200 bg-white p-4 shadow-md md:mx-auto">
				<form
					onSubmit={async (event) => {
						event.preventDefault;

						const results = await fetch('/api/SearchCharacters', {
							method: 'post',
							body: search,
						});
						const { characters, error } = await results.json();

						if (error) {
							console.log(error);
						} else {
							setCharacters(characters);
						}
					}}
				>
					<div className="flex space-x-2">
						<input
							type="text"
							name="search"
							placeholder="Search"
							className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm focus:border-sky-500 focus:ring-sky-500"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button
							disabled={search === ''}
							type="submit"
							className="rounded-lg bg-sky-500 py-3 px-5 text-white"
						>
							Search
						</button>
						<button
							disabled={search === ''}
							onClick={async () => {
								setSearch('');
								setCharacters(initialState.characters);
							}}
							className="rounded-lg bg-red-500 py-3 px-5 text-white"
						>
							Reset
						</button>
					</div>
				</form>
			</div>
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
