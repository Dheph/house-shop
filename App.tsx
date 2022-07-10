import 'react-native-gesture-handler';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

import theme from '@theme/';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/';
import { AuthProvider } from '@context/auth';

export default function App() {
	useEffect(() => {
		async function checkAvailableUpdatesAndUpdate() {
			const { isAvailable } = await Updates.checkForUpdateAsync();

			if (isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			}
		}
		checkAvailableUpdatesAndUpdate();
	}, []);

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<StatusBar style="light" backgroundColor="transparent" translucent />
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	);
}
