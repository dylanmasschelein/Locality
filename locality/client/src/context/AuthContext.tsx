import { createContext, useState, useEffect, FC, ReactNode } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { ICustomerRegisterForm } from '../views/CustomerRegistrationPage';
import { ISPRegisterForm } from '../views/ServiceProviderRegistrationPage';
import { convertDataToFormData } from '../utils/global_functions';

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

	const loginUser = async (formData: any) => {
		console.log(formData);
		const userToken = await axios.post('http://localhost:8000/accounts/token/', formData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (userToken.status === 200) {
			setAuthTokens(userToken);
			setUser(jwt_decode(userToken.data.access));
			localStorage.setItem('authTokens', JSON.stringify(userToken.data.access));
			navigate('/', { replace: true });
		} else {
			alert('Something went wrong!');
		}
	};

	// Customize this function to work for customers and service providers
	const registerUser = async (formData: RegisterForms) => {
		const response = await fetch('http://127.0.0.1:8000/accounts/customer/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		const userData = await response.json();
		if (response.status === 200) {
			const navigateLink = userData.is_customer ? '/' : `/dashboard/${userData.id}/?business`;
			navigate(navigateLink, { replace: true });
		} else {
			alert('Something went wrong!');
		}
	};

	const logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('authTokens');
		navigate('/', { replace: true });
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
			console.log(authTokens);
			setUser(jwt_decode(authTokens));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
