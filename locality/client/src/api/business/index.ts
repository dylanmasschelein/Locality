import axios from 'axios';
// import { IBusinessData } from '../../components/spDashboardComponents/BusinessForm';
import { convertDataToFormData } from '../../utils/global_functions';

export const postBusiness = async (data: any): Promise<any> => {
	// no any
	// convert to axios as well
	const formData = convertDataToFormData(data);
	const business = await axios.post('http://localhost:8000/accounts/business/', formData, {
		headers: { 'Content-Type': 'multipart/form-data' }
	});

	// might eb business.data - or will be with axios i believe
	return business.data;
};

export const getBusinessList = async (type: string): Promise<any> => {
	let businessList;
	if (type === 'explore') {
		businessList = await axios.get(`http://localhost:8000/api/business/`);
	} else {
		businessList = await axios.get(`http://localhost:8000/api/business/type?type=${type}`);
	}
	console.log(businessList.data);
	return businessList.data;
};
