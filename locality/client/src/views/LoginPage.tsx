import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

// Components
import Form from '../components/componentLibrary/CustomForm';
import PrimaryButton from '../components/componentLibrary/Buttons/PrimaryButton';
import CustomInput from '../components/componentLibrary/CustomInput';

// Util
import { useForm } from '../utils/hooks/useForm';

interface IForm {
	email: string;
	password: string;
}

function Register() {
	const { loginUser } = useContext(AuthContext); // Takes a username and password

	const initFormState: IForm = {
		email: '',
		password: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(loginUser, initFormState);
	return (
		<section>
			<h1>Login</h1>
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
			</Form>
		</section>
	);
}

export default Register;
