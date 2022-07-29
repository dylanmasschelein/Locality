import { useState, useEffect, FC, useContext } from 'react';
import BusinessForm from '../components/spDashboardComponents/BusinessForm';
import CustomModal from '../components/componentLibrary/CustomModal';
// import { postBusiness, getBusinessList } from '../api/business';
import { IBusinessData } from '../components/spDashboardComponents/BusinessForm';
import { RouteProps, useNavigate, Route } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import { Modal } from 'semantic-ui-react';
import ImageUpload from '../components/spDashboardComponents/ImageUpload';
import { getUserData } from '../api/accounts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import authSlice from '../store/slices/auth';

// import styles from '../'

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const Dashboard: FC<IProps> = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state: RootState) => state.auth);

	// grab user
	// const { token, logoutUser, userDataMan } = useContext(AuthContext);
	// const { query, id }: any = useQuery(); // Fucking sort this shit out lol.
	// // sort out how to access url queries

	// const [businessData, setBusinessData] = useState<IBusinessData | null>(null);
	// const [user, setUser] = useState<any>(null);

	// const postBusinessData = async (formData: IBusinessData): Promise<void> => {
	// 	const business = await postBusiness({ ...formData, user: +id });
	// 	setBusinessData(business);
	// };

	const handleLogout = () => {
		dispatch(authSlice.actions.logout());
		navigate('/');
	};

	// // get pk from the user, which is taken from context
	// const getBusinessData = async (pk: string): Promise<void> => {
	// 	const business = await getBusinessList();
	// 	setBusinessData(business);
	// };

	// const fetchUser = async (pk: number) => {
	// 	const userData = await getUserData(pk);
	// 	console.log(userData);
	// 	setUser(userData);
	// };
	// console.log(id, 'fucking iss');
	// useEffect(() => {
	// 	console.log('fuck');
	// 	fetchUser(id);
	// }, [id]);

	useEffect(() => {
		if (!auth.account) {
			navigate('/auth', { replace: true });
		}
	}, []);

	return (
		<div>
			{/* <BusinessForm postBusinessData={postBusinessData} /> */}
			<h1>Yo</h1>
			<button type="button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
