import { FC } from 'react';
import defaultStyles from '../CustomInput/input.module.scss';

interface IProps {
	placeholder?: string;
	styles?: string;
	value: string;
	name: string;
	onChange: any;
	label?: string;
	errors?: any;
}

const CustomTextArea: FC<IProps> = ({ placeholder, styles, value, name, onChange, label, errors }) => (
	<div className={defaultStyles.input_container}>
		{label && <label className={defaultStyles.label}>{label}</label>}
		<textarea
			placeholder={placeholder || ''}
			className={`${defaultStyles.input} ${styles}`}
			value={value}
			name={name}
			onChange={onChange}
			style={{ maxWidth: '100%' }}
		/>
		{errors?.[name] && <p className={defaultStyles.input_error}>{errors[name]}</p>}
	</div>
);

export default CustomTextArea;
