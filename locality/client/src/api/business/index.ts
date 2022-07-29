import axios from 'axios';
import { IBusinessData } from '../../components/spDashboardComponents/BusinessForm';
import { convertDataToFormData } from '../../utils/global_functions';

// export const postBusiness = async (data: IBusinessData): Promise<IBusinessData> => {
// 	// no any
// 	// convert to axios as well
// 	const formData = convertDataToFormData(data);
// 	const business = await axios.post('http://localhost:8000/accounts/business/', formData, {
// 		headers: { 'Content-Type': 'multipart/form-data' }
// 	});

// 	// might eb business.data - or will be with axios i believe
// 	return business.data;
// };

// export const getBusinessList = async (): Promise<any> => {
// 	// no any
// 	// convert to axios as well
// 	const businessList = await axios.get(`http://localhost:8000/accounts/business_list/`);
// 	// get associated images for each business

// 	// might eb business.data - or will be with axios i believe
// 	return businessList.data;
// };
