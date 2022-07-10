import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppStackParams } from 'src/routes/routes';
import { Home } from '@pages/AppPages/Home';
import theme from '@theme/';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { Navigator, Screen } = createStackNavigator<AppStackParams>();

export function HomeStackRoutes() {
	const insets = useSafeAreaInsets();
	return (
		<Navigator
			screenOptions={() => ({
				headerShown: false,
				cardStyle: { backgroundColor: theme.colors.background, paddingTop: insets.top },
			})}
		>
			<Screen name="Home" component={Home} />
		</Navigator>
	);
}
