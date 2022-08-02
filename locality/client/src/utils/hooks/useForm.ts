import { useState, SyntheticEvent } from 'react';
import { omit } from 'lodash';
import { IFormEvent, IValue } from '../../types/form';
import { useDispatch } from 'react-redux';
import formSlice from '../../store/slices/form';

export const useForm = (onSubmit: any, initialState: any = {}) => {
	// Add validation??
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();

	const updateErrors = (name: string, message: string) => {
		setErrors({
			...errors,
			[name]: message
		});
	};

	const validate = (event: SyntheticEvent, name: string, value: string, password: string = '') => {
		switch (name) {
			case 'first_name':
				if (value.length <= 1) {
					updateErrors(name, 'First name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'firstName');
					setErrors(newObj);
				}
				break;
			case 'last_name':
				if (value.length <= 1) {
					updateErrors(name, 'Last name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'lastName');
					setErrors(newObj);
				}
				break;
			case 'business_name':
				if (value.length <= 1) {
					updateErrors(name, 'Business Name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'business_name');
					setErrors(newObj);
				}
				break;
			case 'legal_name':
				if (value.length <= 1) {
					updateErrors(name, 'Legal name must be a minimum of 2 letters');
				} else {
					const newObj = omit(errors, 'legal_name');
					setErrors(newObj);
				}
				break;
			case 'business_number':
				if (value.length <= 1) {
					updateErrors(name, 'Business number must be in xxx-xxx-xxx format');
				} else {
					const newObj = omit(errors, 'business_number');
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
			case 'phone_number':
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
					const newObj = omit(errors, 'password');
					setErrors(newObj);
				}
				break;
			case 'password2':
				if (value !== password) {
					updateErrors(name, 'Passwords must match');
				} else {
					const newObj = omit(errors, 'password2');
					setErrors(newObj);
				}
				break;

			default:
				break;
		}
	};

	// const handleDispatch = (formData: any, name: string, value: string) => {
	// 	dispatch(
	// 		formSlice.actions.setFormData({
	// 			...formData,
	// 			[name]: value
	// 		})
	// 	);
	// };

	const handleInputChange = (e: IFormEvent, file: any = null) => {
		validate(e, e.target.name, e.target.value);

		// How you getting in here?
		if (file) {
			setFormData({ ...formData, [e.target.name]: e.target.files[0] });
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e: IFormEvent) => {
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

	return { formData, errors, handleInputChange, handleSubmit /* handleDispatch */ };
};
