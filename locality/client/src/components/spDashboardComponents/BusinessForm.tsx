import { FC } from 'react';
import { useForm } from '../../utils/hooks/useForm';
import styles from '../componentLibrary/CustomInput/input.module.scss';

// Components
import Form from '../../components/componentLibrary/CustomForm';
import CustomInput from '../../components/componentLibrary/CustomInput';
import CustomTextArea from '../componentLibrary/CustomTextArea';
import PrimaryButton from '../../components/componentLibrary/Buttons/PrimaryButton';
import { SelectChangeEvent } from '@mui/material';
import CustomDropdown from '../componentLibrary/CustomDopdown';
import { businessTypeOptions, cityOptions } from '../../utils/global_vars';

export interface IBusinessData {
	id?: string;
	business_name: string;
	legal_name: string;
	business_number: string;
	business_type: string;
	description: string;
	location: string;
	user?: number;
}

interface IProps {
	postBusinessData: (f: IBusinessData) => Promise<void>;
}

const BusinessForm: FC<IProps> = ({ postBusinessData }) => {
	// Get User
	const initialFormState: IBusinessData = {
		business_name: '',
		legal_name: '',
		business_number: '',
		business_type: '',
		description: '',
		location: ''
	};

	const { errors, formData, handleInputChange, handleSubmit } = useForm(postBusinessData, initialFormState);
	return (
		<section>
			<h1>Business Registration</h1>
			<Form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					label="Business Name"
					name="business_name"
					value={formData.business_name}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomTextArea
					label="Description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
					errors={errors}
				/>
				<CustomDropdown
					label="City"
					name="location"
					value={formData.location}
					onChange={(e: any) => handleInputChange(e, false)}
					options={cityOptions}
					styling={styles.align_left}
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
				<CustomDropdown
					label="Business Type"
					name="business_type"
					value={formData.business_type}
					onChange={(e: any) => handleInputChange(e, false)}
					options={businessTypeOptions}
					styling={styles.align_left}
				/>
				<PrimaryButton type="submit" text="Register Business" topMargin />
			</Form>
		</section>
	);
};

export default BusinessForm;
