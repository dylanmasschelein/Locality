import { useState, SyntheticEvent } from 'react';
import { omit } from 'lodash';
import { IFormEvent, IValue } from '../type/form';

export const useForm = (onSubmit: any, initialState: any = {}) => {
	// Add validation??
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});

	const updateErrors = (name: string, message: string) => {
		setErrors({
			...errors,
			[name]: message
		});
	};

	const validate = (event: SyntheticEvent, name: string, value: IValue, password: string = '') => {
		switch (name) {
			case 'firstName':
				if (value.length <= 1) {
					updateErrors(name, 'First name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'firstName');
					setErrors(newObj);
				}
				break;
			case 'lastName':
				if (value.length <= 1) {
					updateErrors(name, 'Last name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'lastName');
					setErrors(newObj);
				}
				break;
			case 'email':
				if (
					!new RegExp(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					).test(value)
				) {
					updateErrors(name, 'Enter a valid email address');
				} else {
					const newObj = omit(errors, 'email');
					setErrors(newObj);
				}
				break;
			case 'phoneNumber':
				if (value.length < 10) {
					updateErrors(name, 'Enter a valid phone number');
				} else {
					const newObj = omit(errors, 'phoneNumber');
					setErrors(newObj);
				}
				break;
			case 'password':
				if (value.length < 8) {
					updateErrors(name, 'Password must be minimum 8 characters');
				} else {
					const newObj = omit(errors, 'passowrd');
					setErrors(newObj);
				}
				break;
			case 'confirmPassword':
				if (value !== password) {
					updateErrors(name, 'Passwords must match');
				} else {
					const newObj = omit(errors, 'confirmPassword');
					setErrors(newObj);
				}
				break;

			default:
				break;
		}
	};

	const handleInputChange = (e: IFormEvent) => {
		validate(e, e.target.name, e.target.value);

		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: SyntheticEvent) => {
		if (e) e.preventDefault();

		// Object.keys(formData).forEach(key => {
		// 	console.log(formData[key]);
		// 	validate(e, key, formData[key]);
		// });

		// validate(e, e.target.name, e.target.value);
		if (Object.keys(errors).length === 0 && Object.keys(formData).length !== 0) {
			onSubmit?.(formData);
		}
	};

	return { formData, errors, handleInputChange, handleSubmit };
};
