import { createContext, useState, useEffect, FC, ReactNode } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { IRegisterForm } from '../components/AuthComponents/Registration';
import { convertDataToFormData } from '../utils/global_functions';
import { getUserData } from '../api/accounts';

const AuthContext = createContext<any>(null); // Type the context?? - DS
type RegisterForms = IRegisterForm;

export default AuthContext;

export const AuthProvider: FC<ReactNode | any> = ({ children }) => {
	// Hmm type of children  not react node?
	const initToken: string | null = localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null;

	const [authTokens, setAuthTokens] = useState(initToken ? JSON.parse(initToken) : null);
	const [token, setToken] = useState(initToken ? jwt_decode(initToken) : null);
	const [loading, setLoading] = useState(true);
	// NavigateFunction type
	const navigate: any = useNavigate();

	const loginUser = async (formData: any) => {
		const userToken = await axios.post('http://127.0.0.1:8000/accounts/token/', formData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (userToken.status === 200) {
			const decodedToken: any = jwt_decode(userToken.data.access); // TODO:
			setAuthTokens(userToken);
			setToken(decodedToken);

			localStorage.setItem('authTokens', JSON.stringify(userToken.data.access));
			// const fetchUser = async () => {
			// 	const userData = await getUserData(decodedToken.user_id.toString());
			// 	console.log(userData, 'HJBDWUDUH');
			// 	setUser(userData);
			// };
			navigate(`/dashboard/${decodedToken.user_id}`, { replace: true });
		} else {
			return false;
		}
	};

	// Customize this function to work for customers and service providers
	const registerUser = async (formData: RegisterForms) => {
		console.log(formData);
		const data = convertDataToFormData(formData);
		const userData = await axios.post('http://127.0.0.1:8000/accounts/create_customer/', data, {
			headers: { 'Content-Type': 'multipart/form-data' }
		});

		if (userData.status === 200) {
			await loginUser(formData);
		} else {
			alert('Something went wrong!');
		}
	};

	const logoutUser = () => {
		setAuthTokens(null);
		setToken(null);
		localStorage.removeItem('authTokens');
		navigate('/', { replace: true });
	};

	const contextData = {
		token,
		setToken,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser
	};

	useEffect(() => {
		if (authTokens) {
			console.log(authTokens);
			setToken(jwt_decode(authTokens));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
