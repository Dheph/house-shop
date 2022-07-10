import { Ionicons } from '@expo/vector-icons';

export type AuthStackParams = {
	Login: undefined;
};

export type AppStackParams = {
	Home: undefined;
};

type IoniconsIconName = React.ComponentProps<typeof Ionicons>['name'];

export interface TabIconProps {
	screen: 'Home' | 'FoodPantry' | 'Profile';
	icon_name: {
		fill: IoniconsIconName;
		outline: IoniconsIconName;
	};
}
