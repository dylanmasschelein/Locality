import axios from 'axios';
import { IBusinessData } from '../../components/spDashboardComponents/BusinessForm';
import { convertDataToFormData } from '../../utils/global_functions';

export const getUserData = async (pk: any): Promise<any> => {
	const { data: user } = await axios.get(`http://localhost:8000/accounts/customer/${pk}/`);

	// might eb business.data - or will be with axios i believe
	return user;
};
