import { FC } from 'react';
import defaultStyles from './search.module.scss';

interface IProps {
	styles?: string;
	value: string;
	name: string;
	onChange: any;
}

const CustomSearchField: FC<IProps> = ({ styles, value, name, onChange }) => (
	<div className={defaultStyles.input}>
		<input
			placeholder="Search"
			className={defaultStyles.input__field}
			value={value}
			name={name}
			onChange={onChange}
		/>
	</div>
);

export default CustomSearchField;
