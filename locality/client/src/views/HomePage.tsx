import { getBusinessList } from '../api/business';
import { useEffect, useState, useCallback } from 'react';
import BusinessCard from '../components/homeComponents/BusinessCard';
import { IBusiness } from '../types/business';
import styles from '../components/homeComponents/BusinessCard/business-card.module.scss';
import CustomSearchField from '../components/componentLibrary/SearchField';

const Home = () => {
	const [businessList, setBusinessList] = useState<any>([]); // busines type
	const fetchBusinessList = useCallback(async () => {
		const list = await getBusinessList();
		setBusinessList(list);
	}, []);

	useEffect(() => {
		fetchBusinessList();
	}, []);

	const handleSearch = () => {

	}

	return (
		<div>
			{/* <CustomSearchField /> */}

			<h1>You are on home page!</h1>
			<div className={styles.business}>
				{businessList.map((business: IBusiness) => (
					<BusinessCard business={business} />
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
