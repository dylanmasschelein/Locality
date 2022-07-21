import { useContext, SyntheticEvent } from 'react';
import AuthContext from '../context/AuthContext';

// Components
import Form from '../components/componentLibrary/CustomForm';
import CustomInput from '../components/componentLibrary/CustomInput';
import PrimaryButton from '../components/componentLibrary/Buttons/PrimaryButton';
import { useForm } from '../utils/hooks/useForm';
import { IFormEvent } from '../type/form';

export interface ICustomerRegisterForm {
	first_name: string;
	last_name: string;
	city: string;
	email: string;
	password: string;
	password2: string;
	is_customer: boolean;
	is_sp: boolean;
	is_admin: boolean;
	username: string;
}

const CustomerRegistrationPage = () => {
	const { registerUser } = useContext(AuthContext); // Takes a username and password

	const initialFormState: ICustomerRegisterForm = {
		first_name: '',
		last_name: '',
		city: '',
		email: '',
		password: '',
		password2: '',
		is_customer: true,
		is_sp: false,
		is_admin: false,
		username: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(registerUser, initialFormState);

	return (
		<section>
			<h1>Customer Registration</h1>
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					label="Username"
					name="username"
					value={formData.username}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="First Name"
					name="first_name"
					value={formData.first_name}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="Last Name"
					name="last_name"
					value={formData.last_name}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="City"
					name="city"
					value={formData.city}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="email"
					label="Email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="password"
					label="Password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="password"
					label="Confirm Password"
					name="password2"
					value={formData.password2}
					onChange={handleInputChange}
					errors={errors}
				/>
				<PrimaryButton type="submit" text="Register" />
			</Form>
		</section>
	);
};

export default CustomerRegistrationPage;
