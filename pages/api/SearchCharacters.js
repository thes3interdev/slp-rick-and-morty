import { gql } from '@apollo/client';
import client from '../../utilities/ApolloClient';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
	const search = req.body;

	try {
		const { data } = await client.query({
			query: gql`
        query {
          characters(filter: { name: "${search}" }) {
            info {
              count
            }
            results {
              id
              name
              location {
                id
                name
              }
              image
              origin {
                id
                name
              }
              episode {
                id
                episode
                air_date
              }              
            }
          }
        }
      `,
		});
		res.status(200).json({ characters: data.characters.results, error: null });
	} catch (error) {
		if (error.message === '404: Not Found') {
			res.status(404).json({ characters: null, error: 'Character Not Found.' });
		} else {
			res
				.status(500)
				.json({ characters: null, error: 'Internal error, please try again.' });
		}
	}
};
