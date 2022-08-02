import { useState, useEffect, FC } from 'react';
import { businessTypeOptions } from '../../../utils/global_vars';
import CustomDropdown from '../../componentLibrary/FormComponents/CustomDopdown';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const BusinessType: FC<IProps> = ({ errors, formData, onChange }) => {
	return (
		<div className={styles.animation}>
			<h3>What type of business do you run?</h3>
			<CustomDropdown
				label="Business Type"
				name="business_type"
				value={formData.business_type}
				onChange={(e: any) => onChange(e, false)}
				options={businessTypeOptions}
				// styling={styles.align_left}
			/>

		</div>
	);
};

export default BusinessType;
