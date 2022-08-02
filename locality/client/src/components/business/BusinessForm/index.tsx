import { useState, useEffect, FC } from 'react';
import { useForm } from '../../../utils/hooks/useForm';
import { postBusiness } from '../../../api/business';
import PrimaryButton from '../../componentLibrary/Buttons/PrimaryButton';
import styles from './business.module.scss';
import BusinessInfo from './BusinessInfo';
import BusinessName from './BusinessName';
import BusinessType from './BusinessType';
import Description from './Description';
import ProgressBar from './LinearProgress';
import Location from './Location';
import Photo from './Photo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IProps {
	id: string;
	handleToggle: any;
	// prop1: number;
	// prop2: string;
}

export interface IBusinessForm {
	id: string;
	business_name: string;
	legal_name: string;
	business_number: string;
	business_type: string;
	description: string;
	location: string;
	photo: any;
}

const BusinessForm: FC<IProps> = ({ id, handleToggle }) => {
	const [step, setStep] = useState<number>(0);
	const totalSteps = 5;
	const incrementStep = () => setStep(step => (step += 1));
	const decrementStep = () => setStep(step => (step -= 1));
	const postBusinessData = (formData: IBusinessForm) => {
		postBusiness(formData);
		handleToggle();
	};

	const initialFormState: IBusinessForm = {
		id,
		business_name: '',
		legal_name: '',
		business_number: '',
		business_type: '',
		description: '',
		location: '',
		photo: ''
	};
	const { errors, formData, handleInputChange, handleSubmit } = useForm(postBusinessData, initialFormState);
	const disableBtn = Object.keys(errors).length;

	return (
		<>
			<ProgressBar step={step} totalSteps={totalSteps} />
			<div className={styles.form}>
				{step !== 0 && <ArrowBackIcon className={styles.form__back} onClick={decrementStep} />}
				{/* Form */}
				{step === 0 && <BusinessName formData={formData} onChange={handleInputChange} errors={errors} />}
				{step === 1 && <BusinessInfo formData={formData} onChange={handleInputChange} errors={errors} />}
				{step === 2 && <BusinessType formData={formData} onChange={handleInputChange} errors={errors} />}
				{step === 3 && <Description formData={formData} onChange={handleInputChange} errors={errors} />}
				{step === 4 && <Location formData={formData} onChange={handleInputChange} errors={errors} />}
				{step === 5 && <Photo formData={formData} onChange={handleInputChange} errors={errors} />}
				<PrimaryButton
					disabled={disableBtn}
					text={step !== totalSteps ? 'Next' : 'Submit'}
					handleClick={step !== totalSteps ? incrementStep : handleSubmit}
					styles={styles.form__btn}
				/>
			</div>
		</>
	);
};

export default BusinessForm;

// import { useState, useEffect, FC } from 'react';
// import { useForm } from '../../../utils/hooks/useForm';
// import { postBusiness } from '../../../api/business';
// import PrimaryButton from '../../componentLibrary/Buttons/PrimaryButton';
// import styles from './business.module.scss';
// import BusinessInfo from './BusinessInfo';
// import BusinessName from './BusinessName';
// import BusinessType from './BusinessType';
// import Description from './Description';
// import ProgressBar from './LinearProgress';
// import Location from './Location';
// import Photo from './Photo';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import formSlice from '../../../store/slices/form';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store';
// interface IProps {
// 	id: string;
// 	handleToggle: any;
// 	// prop1: number;
// 	// prop2: string;
// }

// export interface IBusinessForm {
// 	id: string;
// 	business_name: string;
// 	legal_name: string;
// 	business_number: string;
// 	business_type: string;
// 	description: string;
// 	location: string;
// 	photo: any;
// }

// const BusinessForm: FC<IProps> = ({ id, handleToggle }, props) => {
// 	const dispatch = useDispatch();
// 	const form = useSelector((state: RootState) => state.form);
// 	const { businessForm, step }: any = form;
// 	const totalSteps = 5;
// 	const incrementStep = () => {
// 		dispatch(
// 			formSlice.actions.setStep({
// 				step: step + 1
// 			})
// 		);
// 	};
// 	const decrementStep = () => {
// 		dispatch(
// 			formSlice.actions.setStep({
// 				step: step - 1
// 			})
// 		);
// 	};

// 	const postBusinessData = (formData: IBusinessForm) => {
// 		postBusiness(formData);
// 		handleToggle();
// 	};

// 	const { errors, handleSubmit, handleDispatch } = useForm(postBusinessData, businessForm);
// 	const disableBtn = Object.keys(errors).length;

// 	return (
// 		<>
// 			<ProgressBar step={step} totalSteps={totalSteps} />
// 			<div className={styles.form}>
// 				{step !== 0 && <ArrowBackIcon className={styles.form__back} onClick={decrementStep} />}
// 				{/* Form */}
// 				{step === 0 && <BusinessName formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				{step === 1 && <BusinessInfo formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				{step === 2 && <BusinessType formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				{step === 3 && <Description formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				{step === 4 && <Location formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				{step === 5 && <Photo formData={businessForm} onChange={handleDispatch} errors={errors} />}
// 				<PrimaryButton
// 					disabled={disableBtn}
// 					text={step !== totalSteps ? 'Next' : 'Submit'}
// 					handleClick={step !== totalSteps ? incrementStep : handleSubmit}
// 					styles={styles.form__btn}
// 				/>
// 			</div>
// 		</>
// 	);
// };

// export default BusinessForm;
