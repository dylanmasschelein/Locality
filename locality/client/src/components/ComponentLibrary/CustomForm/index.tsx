import { useState, useEffect, FC } from 'react';
import baseStyles from './form.module.scss';

interface IProps {
	children: any;
	styles?: string;
	onSubmit: any;
}

const CustomForm: FC<IProps> = ({ children, styles, onSubmit }) => {
	return (
		<form className={`${baseStyles.form} ${styles}`} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default CustomForm;
