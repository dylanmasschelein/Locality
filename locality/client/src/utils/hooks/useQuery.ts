import { Console } from 'console';
import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useQuery = () => {
	const { search } = useLocation();
	const { id } = useParams();

	const query = search.split('?')[1];
	// const queryParams = useMemo(() => new URLSearchParams(search), [search]);

	return { query, id };
};
