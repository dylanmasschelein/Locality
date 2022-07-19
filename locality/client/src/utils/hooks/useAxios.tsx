import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const baseURL = 'http://127.0.0.1:8000/api';

const useAxios = () => {
	// Auth Context type
	const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

	const axiosInstance = axios.create({
		// What type is axios instance of
		baseURL,
		headers: { Authorization: `Bearer ${authTokens?.access}` }
	});

	// Read more into axiosInstance and interceptors
	axiosInstance.interceptors.request.use(async (req: any) => {
		// Define req type
		const user: any = jwt_decode(authTokens.access); // Find out what type user is
		const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

		if (!isExpired) return req;

		// Setup a proxy so don't have to use "baseURL"
		const response = await axios.post(`${baseURL}/token/refresh/`, {
			refresh: authTokens.refresh
		});

		// Convert to cookies
		localStorage.setItem('authTokens', JSON.stringify(response.data));

		setAuthTokens(response.data);
		setUser(jwt_decode(response.data.access));

		req.headers.Authorization = `Bearer ${response.data.access}`;
		return req;
	});

	return axiosInstance;
};

export default useAxios;
