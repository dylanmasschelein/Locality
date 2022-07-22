import { useMemo } from 'react';
import { useState, useCallback } from 'react';

export const useUserInput = (defaultValue: string = '') => {
	const [value, setValue] = useState(defaultValue);
	const onChange = useCallback((e: any) => setValue(e.target.value), []);

	return { value, onChange };
};

export const useSearch = <T>(data: T[], searchText: string, searchProps: (item: T) => string[]) => {
	return useMemo(() => {
		const regex = new RegExp(searchText, 'i');
		return data.filter(item => searchProps(item).some(sp => regex.test(sp)));
	}, [data, searchText, searchProps]);
};
