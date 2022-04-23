import { gql } from '@apollo/client';

const GetCharacter = gql`
	query Character($name: String) {
		characters(filter: { name: $name }) {
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
`;

export default GetCharacter;
