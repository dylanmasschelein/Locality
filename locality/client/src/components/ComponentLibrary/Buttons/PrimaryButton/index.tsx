import { FC } from 'react';
import defaultStyles from './primary-button.module.scss';
import { Icon } from 'semantic-ui-react';

interface IProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	styles?: string;
	handleClick?: any;
	text: string | JSX.Element;
	icon?: string | any;
	iconLoading?: boolean;
	image?: string;
	disabled?: boolean | string | any;
}

const PrimaryButton: FC<IProps> = ({
	styles,
	handleClick,
	text,
	icon,
	image,
	disabled,
	type = 'button',
	iconLoading
}) => (
	<button
		type={type}
		onClick={handleClick}
		className={`${defaultStyles.base} ${styles} ${disabled && defaultStyles.disabled}`}
		disabled={disabled}
	>
		<span style={image ? { marginRight: 12 } : {}}>{`${text} `}</span>
		{icon && <Icon loading={iconLoading} name={icon} className={defaultStyles.icon} />}
	</button>
);

export default PrimaryButton;
