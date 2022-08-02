import { useState, useEffect, FC } from 'react';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const BusinessType: FC<IProps> = ({ errors, formData, onChange }) => {
	return (
		<div className={styles.animation}>
			<CustomInput
				label="Business Type"
				name="business_type"
				errors={errors}
				value={formData.business_type}
				onChange={onChange}
			/>
		</div>
	);
};

export default BusinessType;
