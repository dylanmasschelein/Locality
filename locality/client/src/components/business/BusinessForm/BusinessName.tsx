import { useState, useEffect, FC } from 'react';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import styles from './business.module.scss';

interface IProps {
	formData: any;
	onChange: any;
	errors: any;
}

const BusinessName: FC<IProps> = ({ formData, onChange, errors }) => (
	<div className={styles.animation}>
		<h3>What is the name of your business?</h3>
		<CustomInput
			label="Business Name"
			name="business_name"
			errors={errors}
			value={formData.business_name}
			onChange={onChange}
		/>
	</div>
);

export default BusinessName;
