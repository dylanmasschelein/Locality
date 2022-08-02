import { useState, useEffect, FC, useContext } from 'react';
// import { postBusiness, getBusinessList } from '../api/business';
import { RouteProps, useNavigate, Route } from 'react-router-dom';
import { useQuery } from '../utils/hooks/useQuery';
import { getUserData } from '../api/accounts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import authSlice from '../store/slices/auth';
import Image from '../components/componentLibrary/Image';
import styles from './views.module.scss';
import AccountOptions from '../components/Dashboard/AccountOptions';
import CustomDrawer from '../components/componentLibrary/CustomDrawer';
import BusinessForm from '../components/business/BusinessForm';

// import styles from '../'

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const Dashboard: FC<IProps> = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
	const handleToggle = () => setToggleDrawer(toggle => !toggle);
	const auth = useSelector((state: RootState) => state.auth);
	const { account: user }: any = auth;
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
	console.log(user);
	useEffect(() => {
		if (!auth.account) {
			navigate('/auth', { replace: true });
		}
	}, []);

	const accountSettingsOptions = [
		{
			text: 'Personal Information',
			link: '/personal_info'
		},
		{
			text: 'Payments',
			link: '/payments'
		},
		{
			text: 'Notifications',
			link: '/notifications'
		},
		{
			text: 'Privacy and Sharing',
			link: '/privacy'
		}
	];

	const businessOptions = [
		{
			text: 'Register my business',
			alternateAction: handleToggle,
			link: '/my_business'
		},
		{
			text: 'Manage my business',
			link: '/manage'
		},
		{
			text: 'Promote my business',
			link: '/promote'
		},
		{
			text: 'Manage Bookings',
			link: '/bookings'
		}
	];
	return (
		<div className={styles.dashboard}>
			<CustomDrawer open={toggleDrawer} toggleDrawer={handleToggle}>
				<BusinessForm />
			</CustomDrawer>
			{/* <BusinessForm postBusinessData={postBusinessData} /> */}
			<Image srcLink={user.photo} styles={styles.profile_image} />
			<h2>{user.first_name}</h2>
			<span>Show profile</span>

			<div className={styles.option_container}>
				<AccountOptions options={accountSettingsOptions} header="Account Settings" />
				<AccountOptions options={businessOptions} header="Business Management" />
			</div>
			<button type="button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
