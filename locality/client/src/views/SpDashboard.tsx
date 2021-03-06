import { useState, useEffect, FC, useContext } from 'react';
import BusinessForm from '../components/spDashboardComponents/BusinessForm';
import CustomModal from '../components/componentLibrary/CustomModal';
import { postBusiness, getBusinessList } from '../api/business';
import { IBusinessForm } from '../components/spDashboardComponents/BusinessForm';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import AuthContext from '../context/AuthContext';
import { Modal } from 'semantic-ui-react';

// import styles from '../'

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const SpDashboard: FC<IProps> = () => {
	// grab user
	const { user } = useContext(AuthContext);
	const query: any = useQuery(); // Fucking sort this shit out lol.

	// sort out how to access url queries
	const registerBusiness = query === 'business';

	const [modal, setModal] = useState(registerBusiness);
	const [businessData, setBusinessData] = useState(null);

	const postBusinessData = async (formData: IBusinessForm): Promise<void> => {
		const business = await postBusiness(formData);
		setBusinessData(business);
		setModal(false); // Will need error handling
	};

	// get pk from the user, which is taken from context
	const getBusinessData = async (pk: string): Promise<void> => {
		const business = await getBusinessList();
		setBusinessData(business);
	};

	useEffect(() => {
		// check what the field is called
		if (user?.business_id) getBusinessData(user.business_id);
	}, [query?.business, user?.business_id]);

	const toggleModal = () => setModal(!modal);

	return (
		<div>
			<CustomModal open={modal} close={toggleModal}>
				<BusinessForm postBusinessData={postBusinessData} />
			</CustomModal>
			<h1>Welcome to your Profile!</h1>
		</div>
	);
};

export default SpDashboard;
