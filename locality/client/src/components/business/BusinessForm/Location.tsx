import { FC } from 'react';
import { cityOptions } from '../../../utils/global_vars';
import CustomDropdown from '../../componentLibrary/FormComponents/CustomDopdown';
import CustomInput from '../../componentLibrary/FormComponents/CustomInput';
import CustomTextArea from '../../componentLibrary/FormComponents/CustomTextArea';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const Location: FC<IProps> = ({ errors, formData, onChange }) => (
	<div className={styles.animation}>
		<h3>What city do you operate in?</h3>
		<CustomDropdown
			label="City"
			name="location"
			value={formData.location}
			onChange={(e: any) => onChange(e, false)}
			options={cityOptions}
			// styling={styles.align_left}
		/>
		{/* <CustomInput label="Location" name="location" errors={errors} value={formData.location} onChange={onChange} /> */}
	</div>
);

export default Location;
