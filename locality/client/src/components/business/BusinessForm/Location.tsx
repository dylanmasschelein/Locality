import { FC } from 'react';
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
		<CustomInput label="Location" name="location" errors={errors} value={formData.location} onChange={onChange} />
	</div>
);

export default Location;
