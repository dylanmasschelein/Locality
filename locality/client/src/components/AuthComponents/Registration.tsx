import { useContext, SyntheticEvent, useMemo, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

// Components
import Form from '../componentLibrary/FormComponents/CustomForm';
import CustomInput from '../componentLibrary/FormComponents/CustomInput';
import PrimaryButton from '../componentLibrary/Buttons/PrimaryButton';
import { useForm } from '../../utils/hooks/useForm';
import { IFormEvent } from '../../types/form';
import { useQuery } from '../../utils/hooks/useQuery';
import Image from '../componentLibrary/Image';
import TopNav from '../componentLibrary/Navigation/TopNav';
import { Link } from 'react-router-dom';
import CustomFileField from '../componentLibrary/FormComponents/CustomFIleField';

export interface IRegisterForm {
	first_name: string;
	last_name: string;
	city: string;
	photo: string;
	email: string;
	password: string;
	password2: string;
}

const Registration = () => {
	const { registerUser } = useContext(AuthContext);
	const initialFormState: IRegisterForm = {
		first_name: '',
		last_name: '',
		photo: '',
		city: 'Vancouver',
		email: '',
		password: '',
		password2: ''
	};
	const { errors, formData, handleInputChange, handleSubmit } = useForm(registerUser, initialFormState);
	return (
		<>
			<TopNav title="Register" />
			<Form onSubmit={handleSubmit}>
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
				<CustomFileField
					label="Photo"
					name="photo"
					value={''}
					onChange={(e: any) => handleInputChange(e, true)}
					errors={errors}
				/>
				{/* <CustomInput
					type="text"
					label="City"
					name="city"
					value={formData.city}
					onChange={handleInputChange}
					errors={errors}
				/> */}
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
				<PrimaryButton type="submit" text="Register" topMargin />
				<span style={{ marginTop: '3px' }}>
					Already have an account? <Link to="/auth">Login</Link>
				</span>
			</Form>
		</>
	);
};

export default Registration;
