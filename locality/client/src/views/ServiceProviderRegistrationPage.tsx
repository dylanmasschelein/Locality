import { useContext, SyntheticEvent } from 'react';
import AuthContext from '../context/AuthContext';

// Components
import Form from '../components/componentLibrary/FormComponents/CustomForm';
import CustomInput from '../components/componentLibrary/FormComponents/CustomInput';
import PrimaryButton from '../components/componentLibrary/Buttons/PrimaryButton';
import { useForm } from '../utils/hooks/useForm';
import { IFormEvent } from '../types/form';

export interface ISPRegisterForm {
	firstName: string;
	lastName: string;
	city: string;
	businessName: string;
	businessType: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const ServiceProviderRegistrationPage = () => {
	// Register Service Provdier, should hit a different route
	const { registerUser } = useContext(AuthContext);

	const initialFormState: ISPRegisterForm = {
		firstName: '',
		lastName: '',
		city: '',
		businessName: '',
		businessType: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(registerUser, initialFormState);

	return (
		<section>
			<h1>Service Provider Registration</h1>
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					label="First Name"
					name="firstName"
					value={formData.firstName}
					onChange={handleInputChange}
					errors={errors}
					required
				/>
				<CustomInput
					type="text"
					label="Last Name"
					name="lastName"
					value={formData.lastName}
					onChange={handleInputChange}
					errors={errors}
					required
				/>
				<CustomInput
					type="text"
					label="City"
					name="city"
					value={formData.city}
					onChange={handleInputChange}
					errors={errors}
					required
				/>
				<CustomInput
					type="text"
					label="Business Name"
					name="businessName"
					value={formData.businessName}
					onChange={handleInputChange}
					errors={errors}
				/>
				{/* Make into a dropdown */}
				<CustomInput
					type="text"
					label="Business Type"
					name="businessType"
					value={formData.buisnessType}
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
				<CustomInput
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					errors={errors}
					required
				/>
				<PrimaryButton type="submit" text="Register" />
			</Form>
		</section>
	);
};

export default ServiceProviderRegistrationPage;
