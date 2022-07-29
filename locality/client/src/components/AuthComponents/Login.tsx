import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// Components
import Form from '../componentLibrary/FormComponents/CustomForm';
import PrimaryButton from '../componentLibrary/Buttons/PrimaryButton';
import CustomInput from '../componentLibrary/FormComponents/CustomInput';

// Util
import { useForm } from '../../utils/hooks/useForm';
import TopNav from '../componentLibrary/Navigation/TopNav';
import { Link } from 'react-router-dom';

interface ILoginForm {
	email: string;
	password: string;
}

const Login = () => {
	const { loginUser } = useContext(AuthContext); // Takes a username and password

	const initFormState: ILoginForm = {
		email: '',
		password: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(loginUser, initFormState);
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
