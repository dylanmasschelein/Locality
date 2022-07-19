import { useContext, SyntheticEvent } from 'react';
import AuthContext from '../context/AuthContext';

// Components
import Form from '../components/componentLibrary/CustomForm';
import CustomInput from '../components/componentLibrary/CustomInput';
import PrimaryButton from '../components/componentLibrary/Buttons/PrimaryButton';
import { useForm } from '../utils/hooks/useForm';
import { IFormEvent } from '../type/form';

export interface ICustomerRegisterForm {
	firstName: string;
	lastName: string;
	city: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const CustomerRegistrationPage = () => {
	const { registerUser } = useContext(AuthContext); // Takes a username and password

	const initialFormState: ICustomerRegisterForm = {
		firstName: '',
		lastName: '',
		city: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(registerUser, initialFormState);

	return (
		<section>
			<h1>Customer Registration</h1>
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					label="First Name"
					name="firstName"
					value={formData.firstName}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="Last Name"
					name="lastName"
					value={formData.lastName}
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
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					errors={errors}
				/>
				<PrimaryButton type="submit" text="Register" />
			</Form>
		</section>
	);
};

export default CustomerRegistrationPage;
