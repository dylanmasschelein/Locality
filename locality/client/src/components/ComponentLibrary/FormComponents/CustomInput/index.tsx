import { FC } from 'react';
import defaultStyles from './input.module.scss';

interface IProps {
	type?: string;
	placeholder?: string;
	styles?: string;
	value: string;
	name: string;
	onChange: any;
	label?: string;
	errors?: any;
	required?: boolean;
}

const CustomInput: FC<IProps> = ({ type, placeholder, required, styles, value, name, onChange, label, errors }) => (
	<div className={defaultStyles.input_container}>
		{/* {label && <label className={defaultStyles.label}>{label}</label>} */}
		<input
			type={type || 'text'}
			placeholder={label || ''}
			className={`${defaultStyles.input} ${styles}`}
			value={value}
			name={name}
			onChange={onChange}
		/>
		{errors?.[name] && <p className={defaultStyles.input_error}>{errors[name]}</p>}
	</div>
);

export default CustomInput;
