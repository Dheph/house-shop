import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import BottomTab from './Navigators/BottomTab';
import { AppStackParams } from './routes';

const { Navigator, Screen } = createStackNavigator<AppStackParams>();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName={'Home'}
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
				headerShown: false,
			}}
		>
			<Screen name="Home" component={BottomTab} />
		</Navigator>
	);
}
