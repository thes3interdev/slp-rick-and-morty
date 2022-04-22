import React from 'react';
import { useQuery } from '@apollo/client';

const Query = ({ children, query, slug }) => {
	const { data, loading, error } = useQuery(query, { variables: { slug: slug } });

	if (loading) return <p className="center-on-screen">loading...</p>;

	if (error)
		return <p className="center-on-screen text-red-500">Error: {error.message}</p>;

	return children({ data });
};

export default Query;
