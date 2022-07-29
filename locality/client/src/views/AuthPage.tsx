import { useState, useEffect, FC } from 'react';
import Login from '../components/AuthComponents/Login';
import Registration from '../components/AuthComponents/Registration';
import { useQuery } from '../utils/hooks/useQuery';

interface IProps {
	// prop: string
	// prop1: number
	// prop2: string
}

const AuthPage: FC<IProps> = () => {
	const { query } = useQuery();
	return <>{query === 'register' ? <Registration /> : <Login />}</>;
};

export default AuthPage;
