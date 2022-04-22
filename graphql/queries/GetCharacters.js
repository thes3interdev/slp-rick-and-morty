import { gql } from '@apollo/client';

const GetCharacters = gql`
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
`;

export default GetCharacters;
