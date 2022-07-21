import { FC } from 'react';
import { useForm } from '../../utils/hooks/useForm';

// Components
import Form from '../../components/componentLibrary/CustomForm';
import CustomInput from '../../components/componentLibrary/CustomInput';
import PrimaryButton from '../../components/componentLibrary/Buttons/PrimaryButton';

export interface IBusinessForm {
	business_name: string;
	legal_name: string;
	business_number: string;
	business_type: string;
}

interface IProps {
	postBusinessData: (f: IBusinessForm) => Promise<void>;
}

const CustomerRegistrationPage: FC<IProps> = ({ postBusinessData }) => {
	// Get User
	const initialFormState: IBusinessForm = {
		business_name: '',
		legal_name: '',
		business_number: '',
		business_type: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(postBusinessData, initialFormState);

	return (
		<section>
			<h1>Customer Registration</h1>
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					label="Business Name"
					name="business_name"
					value={formData.business_name}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="Legal Name"
					name="legal_name"
					value={formData.legal_name}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomInput
					type="text"
					label="Business Number"
					name="business_number"
					value={formData.business_number}
					onChange={handleInputChange}
					errors={errors}
				/>
				{/* Make into dropdown */}
				<CustomInput
					type="text"
					label="Business Type"
					name="business_type"
					value={formData.business_type}
					onChange={handleInputChange}
					errors={errors}
				/>
				<PrimaryButton type="submit" text="Register Business" />
			</Form>
		</section>
	);
};

export default CustomerRegistrationPage;
