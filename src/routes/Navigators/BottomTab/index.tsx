import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackRoutes } from '../Stacks/home.routes';
import { TabIconProps } from 'src/routes/routes';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
	const theme = useTheme();

	const icons: TabIconProps[] = [
		{
			screen: 'Profile',
			icon_name: {
				fill: 'person',
				outline: 'person-outline',
			},
		},
		{
			screen: 'Home',
			icon_name: {
				fill: 'home',
				outline: 'home-outline',
			},
		},
		{
			screen: 'FoodPantry',
			icon_name: {
				fill: 'fast-food',
				outline: 'fast-food-outline',
			},
		},
	];

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: {
					backgroundColor: theme.colors.primary,
					borderTopColor: 'transparent',
					paddingHorizontal: 10,
					paddingTop: 5,
					paddingBottom: 12,
					height: RFValue(50),
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: theme.colors.shape,
				tabBarInactiveTintColor: theme.colors.shape,
				tabBarIcon: ({ size, color, focused }) => {
					const icon = icons.find(icon => icon.screen === route.name);

					const iconFocused = focused ? icon?.icon_name.fill : icon?.icon_name.outline;

					return <Ionicons name={iconFocused} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Profile" component={HomeStackRoutes} />
			<Tab.Screen name="Home" component={HomeStackRoutes} />
			<Tab.Screen name="FoodPantry" component={HomeStackRoutes} />
		</Tab.Navigator>
	);
};

export default BottomTab;
