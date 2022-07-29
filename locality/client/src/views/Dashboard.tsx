import { useState, useEffect, FC, useContext } from 'react';
import BusinessForm from '../components/spDashboardComponents/BusinessForm';
import CustomModal from '../components/componentLibrary/CustomModal';
import { postBusiness, getBusinessList } from '../api/business';
import { IBusinessData } from '../components/spDashboardComponents/BusinessForm';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import AuthContext from '../context/AuthContext';
import { Modal } from 'semantic-ui-react';
import ImageUpload from '../components/spDashboardComponents/ImageUpload';
import { getUserData } from '../api/accounts';

// import styles from '../'

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const Dashboard: FC<IProps> = () => {
	// grab user
	const { token, logoutUser, userDataMan } = useContext(AuthContext);
	const { query, id }: any = useQuery(); // Fucking sort this shit out lol.
	// sort out how to access url queries

	const [businessData, setBusinessData] = useState<IBusinessData | null>(null);
	const [user, setUser] = useState<any>(null);

	const postBusinessData = async (formData: IBusinessData): Promise<void> => {
		const business = await postBusiness({ ...formData, user: +id });
		setBusinessData(business);
	};

	// get pk from the user, which is taken from context
	const getBusinessData = async (pk: string): Promise<void> => {
		const business = await getBusinessList();
		setBusinessData(business);
	};

	const fetchUser = async (pk: number) => {
		const userData = await getUserData(pk);
		console.log(userData);
		setUser(userData);
	};

	useEffect(() => {
		console.log('fuck');
		fetchUser(token.user_id);
	}, [token]);

	return (
		<div>
			{/* <BusinessForm postBusinessData={postBusinessData} /> */}
			<h1>{user?.first_name}</h1>
			<button type="button" onClick={logoutUser}>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
