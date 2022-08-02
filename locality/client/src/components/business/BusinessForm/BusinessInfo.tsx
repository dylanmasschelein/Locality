import { useState, useEffect, FC } from 'react';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const BusinessInfo: FC<IProps> = ({ errors, formData, onChange }) => {
	return (
		<div className={styles.animation}>
			<h3>Enter your business details</h3>
			<CustomInput
				label="Legal Name"
				name="legal_name"
				errors={errors}
				value={formData.legal_name}
				onChange={onChange}
			/>
			<CustomInput
				label="Business Number"
				name="business_number"
				errors={errors}
				value={formData.business_number}
				onChange={onChange}
			/>
		</div>
	);
};

export default BusinessInfo;
