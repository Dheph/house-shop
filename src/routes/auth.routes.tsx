import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Login } from '@pages/AuthPages/Login';

import { AuthStackParams } from './routes';
import theme from '@theme/';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

export function AuthRoutes() {
	const insets = useSafeAreaInsets();
	return (
		<Navigator
			initialRouteName={'Login'}
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
				headerShown: false,
				cardStyle: { backgroundColor: theme.colors.background, paddingTop: insets.top },
			}}
		>
			<Screen name="Login" component={Login} />
		</Navigator>
	);
}
