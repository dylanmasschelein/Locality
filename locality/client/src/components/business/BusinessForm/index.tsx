import { useState, useEffect, FC } from 'react';
import { useForm } from '../../../utils/hooks/useForm';
import PrimaryButton from '../../componentLibrary/Buttons/PrimaryButton';
import styles from './business.module.scss';
import BusinessInfo from './BusinessInfo';
import BusinessName from './BusinessName';
import BusinessType from './BusinessType';
import Description from './Description';
import ProgressBar from './LinearProgress';
import Location from './Location';
import Photo from './Photo';

interface IProps {
	// prop: string;
	// prop1: number;
	// prop2: string;
}

export interface IBusinessForm {
	business_name: string;
	legal_name: string;
	business_number: string;
	business_type: string;
	description: string;
	location: string;
	photo: any;
}

const BusinessForm: FC<IProps> = () => {
	const [step, setStep] = useState<number>(0);
	const totalSteps = 6;
	const incrementStep = () => setStep(step => (step += 1));

	const initialFormState: IBusinessForm = {
		business_name: '',
		legal_name: '',
		business_number: '',
		business_type: '',
		description: '',
		location: '',
		photo: ''
	};
	const { errors, formData, handleInputChange, handleSubmit } = useForm(console.log('hi'), initialFormState);

	return (
		<div className={styles.form}>
			<ProgressBar step={step} totalSteps={totalSteps} />
			{/* Form */}
			{step === 0 && <BusinessName formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 1 && <BusinessInfo formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 2 && <BusinessType formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 3 && <Description formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 4 && <Location formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 5 && <Photo formData={formData} onChange={handleInputChange} errors={errors} />}
			{step === 6 && <Photo formData={formData} onChange={handleInputChange} errors={errors} />}
			<PrimaryButton
				text={step !== totalSteps ? 'Next' : 'Submit'}
				handleClick={step !== totalSteps ? incrementStep : handleSubmit}
				styles={styles.form__btn}
			/>
		</div>
	);
};

export default BusinessForm;
