import axios from 'axios';
import { IBusinessData } from '../../components/spDashboardComponents/BusinessForm';

export const postBusiness = async (formData: IBusinessData): Promise<IBusinessData> => {
	// no any
	// convert to axios as well
	const business = await axios.post('http://localhost:8000/accounts/business/', formData, {
		headers: { 'Content-Type': 'application/json' }
	});

	// might eb business.data - or will be with axios i believe
	return business.data;
};

export const getBusinessList = async (): Promise<any> => {
	// no any
	// convert to axios as well
	const businessList = await axios.get(`http://localhost:8000/accounts/businesses/`);

	// might eb business.data - or will be with axios i believe
	return businessList.data;
};
