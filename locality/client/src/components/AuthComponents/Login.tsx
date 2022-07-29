// Components
import Form from '../componentLibrary/FormComponents/CustomForm';
import PrimaryButton from '../componentLibrary/Buttons/PrimaryButton';
import CustomInput from '../componentLibrary/FormComponents/CustomInput';

// Util
import { useForm } from '../../utils/hooks/useForm';
import TopNav from '../componentLibrary/Navigation/TopNav';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authSlice from '../../store/slices/auth';
import { useDispatch } from 'react-redux';

interface ILoginForm {
	email: string;
	password: string;
}

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async (formData: ILoginForm) => {
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login/`, formData);

		if (res.status === 200) {
			dispatch(
				authSlice.actions.setAuthTokens({
					token: res.data.access,
					refreshToken: res.data.refresh
				})
			);
			dispatch(authSlice.actions.setAccount(res.data.user));
			navigate('/');
		} else {
			alert('Issue logging in somewhere');
		}
	};

	const initFormState: ILoginForm = {
		email: '',
		password: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(handleLogin, initFormState);
	return (
		<>
			<TopNav title="Login" />
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="email"
					label="Email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					errors={errors}
					required
				/>
				<CustomInput
					type="password"
					label="Password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					errors={errors}
					required
				/>

				<PrimaryButton type="submit" text="Login" />
				<span style={{ marginTop: '3px' }}>
					Need an account? <Link to="/auth?register">Sign up</Link>
				</span>
			</Form>
		</>
	);
};

export default Login;
