import { useState, useEffect, FC } from 'react';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import styles from './business.module.scss';

interface IProps {
	formData: any;
	onChange: any;
	errors: any;
}

const BusinessName: FC<IProps> = ({ formData, onChange, errors }) => {
	return (
		<div className={styles.animation}>
			<CustomInput
				label="Business Name"
				name="business_name"
				errors={errors}
				value={formData.business_name}
				onChange={onChange}
			/>
		</div>
	);
};

export default BusinessName;
