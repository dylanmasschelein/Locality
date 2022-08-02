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
import { getBusiness } from '../api/business';
// Icons
import InfoIcon from '@mui/icons-material/Info';
import PaidIcon from '@mui/icons-material/Paid';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const Dashboard: FC<IProps> = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
	const [business, setBusiness] = useState(null);
	const handleToggle = () => setToggleDrawer(toggle => !toggle);
	const auth = useSelector((state: RootState) => state.auth);
	const { account: user }: any = auth;

	const handleLogout = () => {
		dispatch(authSlice.actions.logout());
		navigate('/');
	};

	// // get pk from the user, which is taken from context
	const getBusinessData = async (pk: string): Promise<void> => {
		const business = await getBusiness(pk);
		setBusiness(business);
	};

	useEffect(() => {
		if (!auth.account) {
			navigate('/auth', { replace: true });
		}
		getBusinessData(user.id);
	}, []);

	const accountSettingsOptions = [
		{
			text: 'Personal Information',
			link: '/personal_info',
			icon: <InfoIcon />
		},
		{
			text: 'Payments',
			link: '/payments',
			icon: <PaidIcon />
		},
		{
			text: 'Notifications',
			link: '/notifications',
			icon: <NotificationsIcon />
		},
		{
			text: 'Privacy and Sharing',
			link: '/',
			icon: <PrivacyTipIcon />
		}
	];

	const businessOptions = [
		{
			text: 'Register my business',
			alternateAction: handleToggle,
			link: '/',
			icon: <AddBusinessIcon />,
			hideOption: business
		},
		{
			text: 'Manage my business',
			link: '/manage',
			icon: <ManageAccountsIcon />
		},
		{
			text: 'Promote my business',
			link: '/',
			icon: <LocalAtmIcon />
		},
		{
			text: 'Manage Bookings',
			link: '/',
			icon: <CalendarMonthIcon />
		}
	];
	return (
		<div className={styles.dashboard}>
			<CustomDrawer open={toggleDrawer} toggleDrawer={handleToggle}>
				<BusinessForm id={user.id} handleToggle={handleToggle} />
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
