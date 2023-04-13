import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IRegisterDtoRequest } from '@services/registerService/dto/registerDtoRequest';
import { registerService } from '@services/registerService';

interface AuthContextProps {
	isAuth: boolean;
	register: (data: IRegisterDtoRequest) => Promise<void>;
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
	async function register(data: IRegisterDtoRequest) {
		const userAuth = await registerService(data);
		if (!userAuth) return;
		console.log(userAuth);
		setIsAuth(true);

		return;
	}
	// async function logout(){}

	return <Auth.Provider value={{ isAuth, register }}>{children}</Auth.Provider>;
}

export function useAuth() {
	return useContext(Auth);
}
