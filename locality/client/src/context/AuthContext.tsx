import { createContext, useState, useEffect, FC, ReactNode } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { ICustomerRegisterForm } from '../views/CustomerRegistrationPage';
import { ISPRegisterForm } from '../views/ServiceProviderRegistrationPage';

const AuthContext = createContext<any>(null); // Type the context?? - DS
type RegisterForms = ICustomerRegisterForm | ISPRegisterForm;

export default AuthContext;

export const AuthProvider: FC<ReactNode | any> = ({ children }) => {
	// Hmm type of children  not react node?
	const initToken: string | null = localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null;

	const [authTokens, setAuthTokens] = useState(initToken ? JSON.parse(initToken) : null);
	const [user, setUser] = useState(initToken ? jwt_decode(initToken) : null);
	const [loading, setLoading] = useState(true);

	// NavigateFunction type
	const navigate: any = useNavigate();

	const loginUser = async (email: string, password: string) => {
		// Swap to axios
		const response = await fetch('http://127.0.0.1:8000/api/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});
		const data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			localStorage.setItem('authTokens', JSON.stringify(data));
			navigate.push('/');
		} else {
			alert('Something went wrong!');
		}
	};

	// Customize this function to work for customers and service providers
	const registerUser = async (formData: RegisterForms) => {
		const response = await fetch('http://127.0.0.1:8000/api/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		if (response.status === 201) {
			navigate.push('/login');
		} else {
			alert('Something went wrong!');
		}
	};

	const logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('authTokens');
		navigate.push('/');
	};

	const contextData = {
		user,
		setUser,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser
	};

	useEffect(() => {
		if (authTokens) {
			setUser(jwt_decode(authTokens.access));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
