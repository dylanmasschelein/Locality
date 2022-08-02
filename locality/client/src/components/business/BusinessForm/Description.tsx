import { FC } from 'react';
import CustomTextArea from '../../componentLibrary/FormComponents/CustomTextArea';
import styles from './business.module.scss';

interface IProps {
	errors: any;
	formData: any;
	onChange: any;
}

const Description: FC<IProps> = ({ errors, formData, onChange }) => (
	<div className={styles.animation}>
		<CustomTextArea
			label="Description"
			name="description"
			errors={errors}
			value={formData.description}
			onChange={onChange}
		/>
	</div>
);

export default Description;
