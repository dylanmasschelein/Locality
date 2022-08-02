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
		<CustomFileField
			label="Photo"
			name="photo"
			value={''}
			onChange={(e: any) => onChange(e, true)}
			errors={errors}
		/>
		;
	</div>
);

export default Photo;
