import { FC } from 'react';
import defaultStyles from './file.module.scss';

interface IProps {
	placeholder?: string;
	styles?: string;
	value: string;
	name: string;
	onChange: any;
	label?: string;
	errors?: any;
	required?: boolean;
}

const CustomFileField: FC<IProps> = ({ placeholder, required, styles, value, name, onChange, label, errors }) => {
	return (
		<label className={`${defaultStyles.input} ${styles}`}>
			<input type="file" value={value || ''} name={name} onChange={onChange} />
		</label>
	);
};

export default CustomFileField;
