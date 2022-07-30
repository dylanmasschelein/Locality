import axios from 'axios';
import { useState, useEffect, FC } from 'react';
import { Form } from 'semantic-ui-react';
import { convertDataToFormData } from '../../../utils/global_functions';
import { useForm } from '../../../utils/hooks/useForm';
import PrimaryButton from '../../componentLibrary/Buttons/PrimaryButton';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import styles from './image.module.scss';

interface IProps {
	businessId: string | undefined;
	// prop1: number;
	// prop2: string;
}

const ImageUpload: FC<IProps> = ({ businessId }) => {
	const initialFormState = {
		caption: '',
		image: '',
		business_id: 4
	};

	const onSumbit = async (data: any) => {
		const formData = convertDataToFormData(data);
		const image = await axios.post('http://localhost:8000/accounts/business_image/', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	};
	const { errors, formData, handleInputChange, handleSubmit } = useForm(onSumbit, initialFormState);

	return (
		<Form onSubmit={handleSubmit}>
			<CustomInput
				type="text"
				label="Caption"
				name="caption"
				value={formData.caption}
				onChange={handleInputChange}
				errors={errors}
			/>
			<CustomInput
				type="file"
				label="Image"
				name="image"
				value={''}
				onChange={(e: any) => handleInputChange(e, true)}
				errors={errors}
			/>
			<PrimaryButton type="submit" text="Register Business" topMargin />
		</Form>
	);
};

export default ImageUpload;
