import React from 'react';
import { useAuth } from '@context/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
	const { isAuth } = useAuth();

	return (
		<SafeAreaProvider>
			<NavigationContainer>{isAuth ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
		</SafeAreaProvider>
	);
}
