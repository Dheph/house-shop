import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
	isAuth: boolean;
}

interface AuthProviderProps {
	children: ReactNode;
}

const Auth = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	//const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		// storage verifier
		async function loadStorageData() {
			setIsAuth(false);
		}
		loadStorageData();
	}, []);

	// function to login
	// async function login(){}
	// async function register(){}
	// async function logout(){}

	return <Auth.Provider value={{ isAuth }}>{children}</Auth.Provider>;
}

export function useAuth() {
	return useContext(Auth);
}
