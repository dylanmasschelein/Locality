import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { capitalize } from '../../../utils/global_functions';
import Select from '@mui/material/Select';
import styles from '../CustomInput/input.module.scss';
import { InputLabel } from '@mui/material';

interface IProps {
	onChange: any;
	value: string;
	label: string;
	name: string;
	options: string[];
	styling?: string;
}

const CustomDropdown: FC<IProps> = ({ onChange, value, label, name, options, styling }) => (
	<div className={`${styles.input_container} ${styling}`}>
		{label && <label className={styles.label}>{label}</label>}
		<FormControl fullWidth>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				placeholder={value}
				name={name}
				onChange={onChange}
			>
				{options.map(option => (
					<MenuItem value={option}>{capitalize(option)}</MenuItem>
				))}
			</Select>
		</FormControl>
	</div>
);

export default CustomDropdown;
