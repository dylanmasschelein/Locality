import { IBusinessForm } from '../../components/spDashboardComponents/BusinessForm';

export const postBusiness = async (formData: IBusinessForm): Promise<any> => {
	// no any
	// convert to axios as well
	const res = await fetch('http://localhost:8000/business/create-business', {
		method: 'POST',
		body: JSON.stringify(formData)
	});

	const business = await res.json();

	// might eb business.data - or will be with axios i believe
	return business;
};

export const getBusiness = async (pk: string): Promise<any> => {
	// no any
	// convert to axios as well
	const res = await fetch(`http://localhost:8000/business/${pk}`);

	const business = await res.json();

	// might eb business.data - or will be with axios i believe
	return business;
};
