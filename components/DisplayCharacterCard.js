import React from 'react';
import Image from 'next/image';

const DisplayCharacterCard = ({ characters }) => {
	return (
		<div className="grid grid-cols-1 gap-x-8 gap-y-8 px-4 pt-8 lg:grid-cols-3">
			{characters.map((character) => {
				return (
					<div key={character.id} className="overflow-hidden rounded-lg shadow-lg">
						<Image
							src={character.image}
							width={500}
							height={400}
							alt={character.name}
							className="bg-center object-cover object-center"
						/>
						<h4 className="text-center text-lg font-semibold">{character.name}</h4>
						<div className="pb-4 text-center">
							<p>Origin: {character.origin.name}</p>
							<p>Location: {character.location.name}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DisplayCharacterCard;
