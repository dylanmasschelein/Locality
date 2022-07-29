import { FC } from 'react';
import defaultStyles from './search.module.scss';

interface IProps {
	styles?: string;
	onChange: any;
	value: string;
}

const CustomSearchField: FC<IProps> = ({ styles, onChange, value }) => (
	<div className={defaultStyles.input}>
		<input placeholder="Search" className={defaultStyles.input__field} value={value} onChange={onChange} />
	</div>
);

export default CustomSearchField;
