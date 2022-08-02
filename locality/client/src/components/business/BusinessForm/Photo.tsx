import { FC } from 'react';
import CustomFileField from '../../componentLibrary/FormComponents/CustomFIleField';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const Photo: FC<IProps> = ({ errors, formData, onChange }) => (
	<div className={styles.animation}>
		<h3>Upload your business logo</h3>
		<CustomFileField
			label="Photo"
			name="photo"
			value={''}
			onChange={(e: any) => onChange(e, true)}
			errors={errors}
			styles={styles.file_field}
		/>
	</div>
);

export default Photo;
