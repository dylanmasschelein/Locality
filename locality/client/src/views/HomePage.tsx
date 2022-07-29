import { getBusinessList } from '../api/business';
import { useEffect, useState, useCallback } from 'react';
import BusinessCard from '../components/homeComponents/BusinessCard';
import { IBusinessData } from '../components/spDashboardComponents/BusinessForm';
import { useUserInput, useSearch } from '../utils/hooks/useSearch';
import styles from '../components/homeComponents/BusinessCard/business-card.module.scss';
import ScrollableIcons from '../components/componentLibrary/ScrollableIcons';
import CustomSearchField from '../components/componentLibrary/FormComponents/CustomSearchField';

const Home = () => {
	const [businessList, setBusinessList] = useState<IBusinessData[]>([]);
	const [filteredBusinessList, setFilteredBusinessList] = useState<IBusinessData[]>([]);
	const [value, setValue] = useState('explore');
	// const searchText = useUserInput('');

	// Will need a scalable solution
	const fetchBusinessList = useCallback(async () => {
		const list = await getBusinessList();
		setBusinessList(list);
		setFilteredBusinessList(list);
		return;
	}, []);

	useEffect(() => {
		fetchBusinessList();
	}, []);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		if (newValue === 'explore') {
			setFilteredBusinessList(businessList);
		} else {
			const filteredList = businessList.filter(business => business.business_type === newValue);
			setFilteredBusinessList(filteredList);
		}
		setValue(newValue);
	};

	// const handleSearch = e => {
	// 	const search = useSearch(businessList, e.target.value);
	// };

	// const searchBusinesses = useSearch(businessList, searchText.value, l => [l.business_type]);
	return (
		<div>
			{/* <CustomSearchField onChange={searchText.onChange} value={searchText.value} /> */}
			<ScrollableIcons value={value} handleChange={handleChange} />

			<div className={styles.business}>
				{filteredBusinessList.map((business: IBusinessData) => (
					<BusinessCard key={business.id} business={business} />
				))}
				{/* Business Profile and allow for swipe up to get the list back */}
				{/* This means ill have to create a swipeable drawer, similar to the one in ModelReno actually */}
				{/* Take some inspiration from this! */}
				{/* the swipeable drawer will be a seperate "Layout" component, only attatched to certain pages */}
			</div>
		</div>
	);
};

export default Home;
