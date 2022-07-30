// import { getBusinessList } from '../api/business';
import { useEffect, useState, useCallback } from 'react';
import BusinessCard from '../components/homeComponents/BusinessCard';
import { useUserInput, useSearch } from '../utils/hooks/useSearch';
import styles from '../components/homeComponents/BusinessCard/business-card.module.scss';
import ScrollableIcons from '../components/componentLibrary/ScrollableIcons';
import CustomSearchField from '../components/componentLibrary/FormComponents/CustomSearchField';
import { getBusinessList } from '../api/business';

const Home = () => {
	const [businessList, setBusinessList] = useState<any[]>([]);
	const [value, setValue] = useState('explore');
	// const searchText = useUserInput('');

	// Will need a scalable solution
	// const fetchBusinessList = useCallback(async () => {
	// 	const list = await getBusinessList();
	// 	setBusinessList(list);
	// 	setFilteredBusinessList(list);
	// 	return;
	// }, []);

	// useEffect(() => {
	// 	fetchBusinessList();
	// }, []);
	const fetchBusinessList = async (value: string) => {
		const list = await getBusinessList(value);
		setBusinessList(list);
	};

	const handleChange = async (event: React.SyntheticEvent, newValue: string) => {
		fetchBusinessList(newValue);
		setValue(newValue);
	};

	// const handleSearch = e => {
	// 	const search = useSearch(businessList, e.target.value);
	// };

	// const searchBusinesses = useSearch(businessList, searchText.value, l => [l.business_type]);

	useEffect(() => {
		fetchBusinessList(value);
	}, []);

	return (
		<div>
			{/* <CustomSearchField onChange={searchText.onChange} value={searchText.value} /> */}
			<ScrollableIcons value={value} handleChange={handleChange} />

			<div className={styles.business}>
				{businessList?.map((business: any) => (
					<BusinessCard key={business.id} business={business} />
				))}
			</div>
		</div>
	);
};

export default Home;
